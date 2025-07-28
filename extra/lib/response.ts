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
import {Youtubemessage} from './youtubemessage'

export class BrowseMessage extends Youtubemessage {
    constructor(msgType: any = Browse, name: string = 'Browse') {
        super(msgType, name)
    }

    async pure(): Promise<Youtubemessage> {
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

export class PlayerMessage extends Youtubemessage {
    constructor(msgType: any = Player, name: string = 'Player') {
        super(msgType, name)
    }

    pure(): Youtubemessage {
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

export class ShortsMessage extends Youtubemessage {
    constructor(msgType: any = Shorts, name: string = 'Shorts') {
        super(msgType, name)
    }

    pure(): Youtubemessage {
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

export class GuideMessage extends Youtubemessage {
    constructor(msgType: any = Guide, name: string = 'Guide') {
        super(msgType, name)
    }

    pure(): Youtubemessage {
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

export class SettingMessage extends Youtubemessage {
    constructor(msgType: any = Setting, name: string = 'Setting') {
        super(msgType, name)
    }

    pure(): Youtubemessage {
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

export class WatchMessage extends Youtubemessage {
    player: PlayerMessage
    next: NextMessage

    constructor(msgType: any = Watch, name: string = 'Watch') {
        super(msgType, name)
        this.player = new PlayerMessage()
        this.next = new NextMessage()
    }

    async pure(): Promise<Youtubemessage> {
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
