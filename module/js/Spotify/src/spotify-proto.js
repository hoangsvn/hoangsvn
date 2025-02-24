const spotifyJson = {"options":{"java_package":"com.smile.spotify.model"},"nested":{"BootstrapResponse":{"oneofs":{"ucsResponse":{"oneof":["ucsResponseV0","trialsFacadeResponseV1"]}},"fields":{"ucsResponseV0":{"type":"UcsResponseWrapperV0","id":2},"trialsFacadeResponseV1":{"type":"TrialsFacadeResponseWrapperV1","id":3}}},"UcsResponseWrapperV0":{"oneofs":{"result":{"oneof":["success","error"]}},"fields":{"success":{"type":"UcsResponseWrapperSuccess","id":1},"error":{"type":"UcsResponseWrapperError","id":2}}},"UcsResponseWrapperSuccess":{"fields":{"customization":{"type":"UcsResponseWrapper","id":1}}},"UcsResponseWrapperError":{"fields":{"errorCode":{"type":"int32","id":1},"message":{"type":"string","id":2},"logId":{"type":"string","id":3}}},"TrialsFacadeResponseWrapperV1":{"oneofs":{"result":{"oneof":["success","error"]}},"fields":{"success":{"type":"TrialsFacadeResponseWrapperSuccess","id":1},"error":{"type":"TrialsFacadeResponseWrapperError","id":2}}},"TrialsFacadeResponseWrapperError":{"fields":{"errorCode":{"type":"int32","id":1},"message":{"type":"string","id":2},"logId":{"type":"string","id":3}}},"TrialsFacadeResponseWrapperSuccess":{"fields":{"field1":{"type":"int32","id":1}}},"UcsResponseWrapper":{"oneofs":{"result":{"oneof":["success","error"]}},"fields":{"success":{"type":"UcsResponse","id":1},"error":{"type":"Error","id":2}}},"UcsResponse":{"oneofs":{"resolveResult":{"oneof":["resolveSuccess","resolveError"]},"accountAttributesResult":{"oneof":["accountAttributesSuccess","accountAttributesError"]}},"fields":{"resolveSuccess":{"type":"ResolveResponse","id":1},"resolveError":{"type":"Error","id":2},"accountAttributesSuccess":{"type":"AccountAttributesResponse","id":3},"accountAttributesError":{"type":"Error","id":4},"fetchTimeMillis":{"type":"int64","id":5}}},"ResolveResponse":{"fields":{"configuration":{"type":"Configuration","id":1}}},"Configuration":{"fields":{"configurationAssignmentId":{"type":"string","id":1},"fetchTimeMillis":{"type":"int64","id":2},"assignedValues":{"rule":"repeated","type":"AssignedValue","id":3},"policySnapshotId":{"type":"int64","id":4}}},"AssignedValue":{"oneofs":{"structuredValue":{"oneof":["boolValue","intValue","enumValue"]}},"fields":{"propertyId":{"type":"Identifier","id":1},"metadata":{"type":"Metadata","id":2},"boolValue":{"type":"BoolValue","id":3},"intValue":{"type":"IntValue","id":4},"enumValue":{"type":"EnumValue","id":5}}},"Identifier":{"fields":{"scope":{"type":"string","id":1},"name":{"type":"string","id":2}}},"Metadata":{"fields":{"policyId":{"type":"int64","id":1},"externalRealm":{"type":"string","id":2},"externalRealmId":{"type":"int64","id":3}}},"BoolValue":{"fields":{"value":{"type":"bool","id":1}}},"EnumValue":{"fields":{"value":{"type":"string","id":1}}},"IntValue":{"fields":{"value":{"type":"int32","id":1}}},"AccountAttributesResponse":{"fields":{"accountAttributes":{"keyType":"string","type":"AccountAttribute","id":1}}},"AccountAttribute":{"oneofs":{"value":{"oneof":["boolValue","longValue","stringValue"]}},"fields":{"boolValue":{"type":"bool","id":2},"longValue":{"type":"int64","id":3},"stringValue":{"type":"string","id":4}}},"Error":{"fields":{"errorCode":{"type":"int32","id":1},"errorMessage":{"type":"string","id":2}}}}};

import protobuf from "protobufjs/minimal.js";

const resStatus = $response.status ? $response.status : $response.statusCode;
if(resStatus !== 200) {
    console.log(`$response.:${resStatus}`);
    $done({});
} else {
    const url = $request.url;
    const method = $request.method;
    const postMethod = "POST";
    const isQuanX = typeof $task !== "undefined";
    const binaryBody = isQuanX ? new Uint8Array($response.bodyBytes) : $response.body;
    let accMap;
    let body;
    if(url.includes("bootstrap/v1/bootstrap") && method === postMethod){
        let lookupType = protobuf.fromJSON(spotifyJson).lookupType("BootstrapResponse");
        let message = lookupType.decode(binaryBody);
        accMap = message.ucsResponseV0.success.customization.success.accountAttributesSuccess.accountAttributes;
        processMapObj(accMap);
        body = lookupType.encode(message).finish();
        console.log('bootstrap');
    } else if(url.includes("user-customization-service/v1/customize") && method === postMethod){
        let ucsWrapperType = protobuf.fromJSON(spotifyJson).lookupType("UcsResponseWrapper");
        let ucsWrapperMessage = ucsWrapperType.decode(binaryBody);
        accMap = ucsWrapperMessage.success.accountAttributesSuccess.accountAttributes;
        processMapObj(accMap);
        body = ucsWrapperType.encode(ucsWrapperMessage).finish();
        console.log('customize');
    } else {
        $notification.post('spotify premium', "Đường dẫn/phương pháp yêu cầu không khớp:", method + "," + url);
    }
    if(isQuanX){
        $done({bodyBytes: body.buffer.slice(body.byteOffset, body.byteLength + body.byteOffset)});
    } else {
        $done({body});
    }
}

function processMapObj(account){
    account['player-license'] = {stringValue : 'premium'};
    account['mobile'] = {boolValue : true};
    account['streaming-rules'] = {stringValue : ''};
    account['financial-product'] = {stringValue : 'pr:premium,tc:0'};
    account['license-acceptance-grace-days'] = {longValue : 30};
    account['mobile-login'] = {boolValue : true};
    account['name'] = {stringValue : 'Spotify Premium'};
    account['on-demand'] = {boolValue : true};
    account['ads'] = {boolValue : false};
    account['catalogue'] = {stringValue : 'premium'};
    account['high-bitrate'] = {boolValue : true};
    account['libspotify'] = {boolValue : true};
    account['nft-disabled'] = {stringValue : '1'};
    account['shuffle'] = {boolValue : false};
    account['audio-quality'] = {stringValue : '1'};
    account['offline'] = {boolValue : true};
    account['pause-after'] = {longValue : 0};
    account['can_use_superbird'] = {boolValue : true};
    account['type'] = {stringValue : 'premium'};
    account['loudness-levels'] = {stringValue : '1:-9.0,0.0,3.0:-2.0'};
    account['payments-initial-campaign'] = {stringValue : 'web'};
    account['shuffle-eligible'] = {boolValue : true};
    account['unrestricted'] = {boolValue : true};
    account['com.spotify.madprops.use.ucs.product.state'] = {boolValue : true};
    delete account['ad-use-adlogic'];
    delete account['ad-catalogues'];
}
