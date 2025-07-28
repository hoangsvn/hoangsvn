/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import {Browse} from './protobuf/response/browse_pb'
import {Next} from './protobuf/response/next_pb'
import {Search} from './protobuf/response/search_pb'
import {Shorts} from './protobuf/response/shorts_pb'
import {Guide} from './protobuf/response/guide_pb'
import {BackgroundPlayer, Player} from './protobuf/response/player_pb'
import {Setting, SettingItem, SubSetting} from './protobuf/response/setting_pb'
import {Watch} from './protobuf/response/watch_pb'
import {Message, WireType} from '@bufbuild/protobuf'
import {$} from './env'

export abstract class YouTubeMessage {
    name: string
    needProcess: boolean
    needSave: boolean
    message: any
    version: string = '1.0'
    whiteNo: number[] = []
    blackNo: number[] = []
    whiteEml: string[] = []
    blackEml: string[] = ['inline_injection_entrypoint_layout.eml']
    msgType: Message<any>
    argument: Record<string, any>
    decoder = new TextDecoder('utf-8', {
        fatal: false,
        ignoreBOM: true
    })

    protected constructor(msgType: Message<any>, name: string) {
        this.name = name
        this.msgType = msgType
        this.argument = this.decodeArgument()
        $.isDebug = Boolean(this.argument.debug)
        const storedData: Record<string, any> = $.getJSON('YouTubeAdvertiseInfo')
        if (storedData?.version === this.version) {
            Object.assign(this, storedData)
        }
    }

    decodeArgument(): Record<string, any> {
        const args = {
            debug: false
        }
        return $.decodeParams(args)
    }

    fromBinary(binaryBody: Uint8Array | undefined | string): YouTubeMessage {
        if (binaryBody instanceof Uint8Array) {
            this.message = this.msgType.fromBinary(binaryBody)
            return this
        }
        $.exit()
        return this
    }

    abstract pure(): Promise<YouTubeMessage> | YouTubeMessage

    async modify(): Promise<YouTubeMessage> {
        const pureMessage = this.pure()
        if (pureMessage instanceof Promise) {
            return await pureMessage
        } else {
            return pureMessage
        }
    }

    toBinary(): Uint8Array {
        return this.message.toBinary()
    }

    listUnknownFields(msg: any): ReadonlyArray<{ no: number, wireType: WireType, data: Uint8Array }> {
        if (msg instanceof Message) {
            return msg.getType().runtime.bin.listUnknownFields(msg)
        }
        return []
    }

    save(): void {
        if (this.needSave) {

            const YouTubeAdvertiseInfo = {
                version: this.version,
                whiteNo: this.whiteNo,
                blackNo: this.blackNo,
                whiteEml: this.whiteEml,
                blackEml: this.blackEml
            }
            $.setJSON(YouTubeAdvertiseInfo, 'YouTubeAdvertiseInfo')
        }
    }

    done(): void {
        this.save()
        if (this.needProcess) {
            const bodyBytes = this.toBinary()
            $.done({bodyBytes})
        }
        $.exit()
    }

    iterate(obj: any = {}, target: string, call: Function): any {
        const stack: any[] = (typeof obj === 'object') ? [obj] : []
        while (stack.length) {
            const item = stack.pop()
            const keys = Object.keys(item)
            for (const key of keys) {
                if (key === target) {
                    call(item, stack)
                } else if (typeof item[key] === 'object') {
                    stack.push(item[key])
                }
            }
        }
    }

    isAdvertise(o: Message<any>): boolean {
        const filed = this.listUnknownFields(o)[0]
        return filed ? this.handleFieldNo(filed) : this.handleFieldEml(o)
    }

    handleFieldNo(field): boolean {
        const no = field.no
        if (this.whiteNo.includes(no)) {
            return false
        } else if (this.blackNo.includes(no)) {
            return true
        }
        const adFlag = this.checkBufferIsAd(field)
        adFlag ? this.blackNo.push(no) : this.whiteNo.push(no)
        this.needSave = true
        return adFlag
    }

    handleFieldEml(field): boolean {
        let adFlag = false
        let eml = ''
        this.iterate(field, 'renderInfo', (obj, stack) => {
            eml = obj.renderInfo.layoutRender.eml.split('|')[0]
            if (this.whiteEml.includes(eml)) {
                adFlag = false
            } else if (this.blackEml.includes(eml) || /shorts(?!_pivot_item)/.test(eml)) {
                adFlag = true
            } else {
                const videoContent = obj?.videoInfo?.videoContext?.videoContent
                if (videoContent) {
                    adFlag = this.checkUnknownFiled(videoContent)
                    adFlag ? this.blackEml.push(eml) : this.whiteEml.push(eml)
                    this.needSave = true
                }
            }
            stack.length = 0
        })
        return adFlag
    }

    checkBufferIsAd(filed): boolean {
        if (!filed || filed.data.length < 1000) return false
        const rawText = this.decoder.decode(filed.data)
        return rawText.includes('pagead')
    }

    checkUnknownFiled(unknown): boolean {
        if (!unknown) return false
        const unknownFields = this.listUnknownFields(unknown)
        return unknownFields?.some(field => this.checkBufferIsAd(field)) ?? false
    }
    
}

export class BrowseMessage extends YouTubeMessage {
    constructor(msgType: any = Browse, name: string = 'Browse') {
        super(msgType, name)
    }

    async pure(): Promise<YouTubeMessage> {
        this.iterate(this.message, 'sectionListSupportedRenderers', (obj) => {
            for (let i = obj.sectionListSupportedRenderers.length - 1; i >= 0; i--) {
                this.removeCommonAD(obj, i)
            }
        })
        return this
    }

    removeCommonAD(obj: any, index: number): void {
        const content = obj.sectionListSupportedRenderers[index]
        const richItemContent = content?.itemSectionRenderer?.richItemContent
        for (let j = richItemContent?.length - 1; j >= 0; j--) {
            if (this.isAdvertise(richItemContent[j])) {
                richItemContent.splice(j, 1)
                this.needProcess = true
            }
        }
    }
}

export class NextMessage extends BrowseMessage {
    constructor(msgType: any = Next, name: string = 'Next') {
        super(msgType, name)
    }
}

export class PlayerMessage extends YouTubeMessage {
    constructor(msgType: any = Player, name: string = 'Player') {
        super(msgType, name)
    }

    pure(): YouTubeMessage {
        if (this.message.adPlacements?.length) {
            this.message.adPlacements.length = 0
        }
        if (this.message.adSlots?.length) {
            this.message.adSlots.length = 0
        }
        delete this.message?.playbackTracking?.pageadViewthroughconversion
        this.addPlayAbility()
        this.needProcess = true
        return this
    }

    addPlayAbility(): void {
        const miniPlayerRender = this.message?.playabilityStatus?.miniPlayer?.miniPlayerRender
        if (typeof miniPlayerRender === 'object') {
            miniPlayerRender.active = true
        }
        if (typeof this.message.playabilityStatus === 'object') {
            this.message.playabilityStatus.backgroundPlayer = new BackgroundPlayer({
                backgroundPlayerRender: {
                    active: true
                }
            })
        }
    }
}

export class SearchMessage extends BrowseMessage {
    constructor(msgType: any = Search, name: string = 'Search') {
        super(msgType, name)
    }
}

export class ShortsMessage extends YouTubeMessage {
    constructor(msgType: any = Shorts, name: string = 'Shorts') {
        super(msgType, name)
    }

    pure(): YouTubeMessage {
        const shortsRawLength = this.message.entries?.length
        if (shortsRawLength) {
            for (let i = shortsRawLength - 1; i >= 0; i--) {
                if (!this.message.entries[i].command?.reelWatchEndpoint?.overlay) {
                    this.message.entries.splice(i, 1)
                    this.needProcess = true
                }
            }
        }
        return this
    }
}

export class GuideMessage extends YouTubeMessage {
    constructor(msgType: any = Guide, name: string = 'Guide') {
        super(msgType, name)
    }

    pure(): YouTubeMessage {
        const blackList = ['SPunlimited']
        if (this.argument.blockUpload) blackList.push('FEuploads')
        if (this.argument.blockImmersive) blackList.push('FEmusic_immersive')
        this.iterate(this.message, 'rendererItems', (obj) => {
            for (let i = obj.rendererItems.length - 1; i >= 0; i--) {
                const browseId =
                    obj.rendererItems[i]?.iconRender?.browseId ||
                    obj.rendererItems[i]?.labelRender?.browseId
                if (blackList.includes(browseId)) {
                    obj.rendererItems.splice(i, 1)
                    this.needProcess = true
                }
            }
        })
        return this
    }
}

export class SettingMessage extends YouTubeMessage {
    constructor(msgType: any = Setting, name: string = 'Setting') {
        super(msgType, name)
    }

    pure(): YouTubeMessage {
        this.iterate(this.message.settingItems, 'categoryId', (obj: {
            categoryId: number,
            subSettings: SubSetting[]
        }) => {
            if (obj.categoryId === 10135) {
                const PipSettingRender = new SubSetting({
                    settingBooleanRenderer: {
                        itemId: 0,
                        enableServiceEndpoint: {
                            setClientSettingEndpoint: {
                                settingData: {
                                    clientSettingEnum: {item: 151},
                                    boolValue: true
                                }
                            }
                        },
                        disableServiceEndpoint: {
                            setClientSettingEndpoint: {
                                settingData: {
                                    clientSettingEnum: {item: 151},
                                    boolValue: false
                                }
                            }
                        }
                    }
                })
                obj.subSettings.push(PipSettingRender)
            }
        })

        const fakePlayBackgroundSetting = new SettingItem({
            backgroundPlayBackSettingRenderer: {
                backgroundPlayback: true,
                download: true,
                downloadQualitySelection: true,
                smartDownload: true,
                icon: {iconType: 1093}
            }
        })
        this.message.settingItems.push(fakePlayBackgroundSetting)
        this.needProcess = true
        return this
    }
}

export class WatchMessage extends YouTubeMessage {
    player: PlayerMessage
    next: NextMessage

    constructor(msgType: any = Watch, name: string = 'Watch') {
        super(msgType, name)
        this.player = new PlayerMessage()
        this.next = new NextMessage()
    }

    async pure(): Promise<YouTubeMessage> {
        for (const msg of this.message.contents) {
            if (msg.player) {
                this.player.message = msg.player
                this.player.pure()
            }
            if (msg.next) {
                this.next.message = msg.next
                await this.next.pure()
            }
            this.needProcess = true
        }
        return this
    }
}
