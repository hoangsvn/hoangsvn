import { AccountAttribute } from '../lib/protobuf/spotify/main_pb.js'
try {
  if (!$response?.body) {
    throw new Error('Response body is undefined or null')
  }
  if (!($response.body instanceof ArrayBuffer)) {
    throw new TypeError('Response body is not an ArrayBuffer')
  }
  processMapObj(AccountAttribute.fromBinary(new Uint8Array($response.body)))
  $done({ body })
} catch (error) {
  console.error('Error processing protobuf:', error)
  $done()
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function processMapObj (accountAttributesMapObj) {
  accountAttributesMapObj['player-license'] = { stringValue: 'premium' }
  accountAttributesMapObj.mobile = { boolValue: true }
  accountAttributesMapObj['streaming-rules'] = { stringValue: '' }
  accountAttributesMapObj['financial-product'] = { stringValue: 'pr:premium,tc:0' }
  accountAttributesMapObj['license-acceptance-grace-days'] = { longValue: 30 }
  accountAttributesMapObj['mobile-login'] = { boolValue: true }
  accountAttributesMapObj.name = { stringValue: 'Spotify Premium' }
  accountAttributesMapObj['on-demand'] = { boolValue: true }
  accountAttributesMapObj.ads = { boolValue: false }
  accountAttributesMapObj.catalogue = { stringValue: 'premium' }
  accountAttributesMapObj['high-bitrate'] = { boolValue: true }
  accountAttributesMapObj.libspotify = { boolValue: true }
  accountAttributesMapObj['nft-disabled'] = { stringValue: '1' }
  accountAttributesMapObj.shuffle = { boolValue: false }
  accountAttributesMapObj['audio-quality'] = { stringValue: '1' }
  accountAttributesMapObj.offline = { boolValue: true }
  accountAttributesMapObj['pause-after'] = { longValue: 0 }
  accountAttributesMapObj.can_use_superbird = { boolValue: true }
  accountAttributesMapObj.type = { stringValue: 'premium' }
  accountAttributesMapObj['loudness-levels'] = { stringValue: '1:-9.0,0.0,3.0:-2.0' }
  accountAttributesMapObj['payments-initial-campaign'] = { stringValue: 'web' }
  accountAttributesMapObj['shuffle-eligible'] = { boolValue: true }
  accountAttributesMapObj.unrestricted = { boolValue: true }
  accountAttributesMapObj['com.spotify.madprops.use.ucs.product.state'] = { boolValue: true }
  delete accountAttributesMapObj['ad-use-adlogic']
  delete accountAttributesMapObj['ad-catalogues']
}
