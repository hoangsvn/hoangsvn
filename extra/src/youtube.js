import createMessage from '../lib/factory.js'
import 'fast-text-encoding'
import {$} from '../lib/env.js'
import Store from "../lib/store.js";

async function run() {

    const responseMsg = createMessage($.request.url)
    if (responseMsg) {
        
        $notification.post('Youtube', 'Youtube Premium', '')
        
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
