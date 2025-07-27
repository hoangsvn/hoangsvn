import { Message, WireType } from '@bufbuild/protobuf'
import { $ } from '../lib/env'

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

  protected constructor (msgType: Message<any>, name: string) {
    this.name = name
    this.msgType = msgType
    this.argument = this.decodeArgument()
    $.isDebug = Boolean(this.argument.debug)
    const storedData: Record<string, any> = $.getJSON('YouTubeAdvertiseInfo')
    if (storedData?.version === this.version) {
      Object.assign(this, storedData)
    }
  }

  decodeArgument (): Record<string, any> {
    const args = {
      debug: false
    }
    return $.decodeParams(args)
  }

  fromBinary (binaryBody: Uint8Array | undefined | string): YouTubeMessage {
    if (binaryBody instanceof Uint8Array) {
      this.message = this.msgType.fromBinary(binaryBody)
      return this
    }
    $.exit()
    return this
  }

  abstract pure (): Promise<YouTubeMessage> | YouTubeMessage

  async modify (): Promise<YouTubeMessage> {
    const pureMessage = this.pure()
    if (pureMessage instanceof Promise) {
      return await pureMessage
    } else {
      return pureMessage
    }
  }

  toBinary (): Uint8Array {
    return this.message.toBinary()
  }

  listUnknownFields (msg: any): ReadonlyArray<{ no: number, wireType: WireType, data: Uint8Array }> {
    if (msg instanceof Message) {
      return msg.getType().runtime.bin.listUnknownFields(msg)
    }
    return []
  }

  save (): void {
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

  done (): void {
    this.save()
    if (this.needProcess) {
      const bodyBytes = this.toBinary()
      $.done({ bodyBytes })
    }
    $.exit()
  }

  iterate (obj: any = {}, target: string, call: Function): any {
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

  isAdvertise (o: Message<any>): boolean {
    const filed = this.listUnknownFields(o)[0]
    return filed ? this.handleFieldNo(filed) : this.handleFieldEml(o)
  }

  handleFieldNo (field): boolean {
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

  handleFieldEml (field): boolean {
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

  checkBufferIsAd (filed): boolean {
    if (!filed || filed.data.length < 1000) return false
    const rawText = this.decoder.decode(filed.data)
    return rawText.includes('pagead')
  }

  checkUnknownFiled (unknown): boolean {
    if (!unknown) return false
    const unknownFields = this.listUnknownFields(unknown)
    return unknownFields?.some(field => this.checkBufferIsAd(field)) ?? false
  }
}
