import createMessage from '../lib/factory.js'
import 'fast-text-encoding'
import {$} from '../lib/env.js'

async function run() {
    if ($persistentStore.read('youtube-premium') !== 'true') {
        $notification.post('Youtube', 'You have activated', 'Youtube Premium')
        $persistentStore.write('true', 'youtube-premium')
    }
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
