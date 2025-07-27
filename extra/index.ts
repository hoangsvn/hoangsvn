import createMessage from './lib/factory'
import 'fast-text-encoding'
import { $ } from './lib/env'

async function run (): Promise<void> {
  const responseMsg = createMessage($.request.url)
  if (responseMsg) {
    const body = $.response.bodyBytes
    responseMsg.fromBinary(body)
    await responseMsg.modify()
    responseMsg.done()
  } else {
    $.exit()
  }
}

run().finally(() => {
  $.exit()
})
