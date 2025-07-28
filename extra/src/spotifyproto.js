import protobuf from 'protobufjs/light'

const spotifyJson = {
    'options': {'java_package': 'com.smile.spotify.model'},
    'nested': {
        'BootstrapResponse': {
            'oneofs': {'ucsResponse': {'oneof': ['ucsResponseV0', 'trialsFacadeResponseV1']}},
            'fields': {
                'ucsResponseV0': {
                    'type': 'UcsResponseWrapperV0',
                    'id': 2
                },
                'trialsFacadeResponseV1': {
                    'type': 'TrialsFacadeResponseWrapperV1',
                    'id': 3
                }
            }
        },
        'UcsResponseWrapperV0': {
            'oneofs': {'result': {'oneof': ['success', 'error']}},
            'fields': {
                'success': {
                    'type': 'UcsResponseWrapperSuccess',
                    'id': 1
                },
                'error': {
                    'type': 'UcsResponseWrapperError',
                    'id': 2
                }
            }
        },
        'UcsResponseWrapperSuccess': {
            'fields': {
                'customization': {
                    'type': 'UcsResponseWrapper',
                    'id': 1
                }
            }
        },
        'UcsResponseWrapperError': {
            'fields': {
                'errorCode': {
                    'type': 'int32',
                    'id': 1
                },
                'message': {
                    'type': 'string',
                    'id': 2
                },
                'logId': {
                    'type': 'string',
                    'id': 3
                }
            }
        },
        'TrialsFacadeResponseWrapperV1': {
            'oneofs': {'result': {'oneof': ['success', 'error']}},
            'fields': {
                'success': {
                    'type': 'TrialsFacadeResponseWrapperSuccess',
                    'id': 1
                },
                'error': {
                    'type': 'TrialsFacadeResponseWrapperError',
                    'id': 2
                }
            }
        },
        'TrialsFacadeResponseWrapperError': {
            'fields': {
                'errorCode': {
                    'type': 'int32',
                    'id': 1
                },
                'message': {
                    'type': 'string',
                    'id': 2
                },
                'logId': {
                    'type': 'string',
                    'id': 3
                }
            }
        },
        'TrialsFacadeResponseWrapperSuccess': {
            'fields': {
                'field1': {
                    'type': 'int32',
                    'id': 1
                }
            }
        },
        'UcsResponseWrapper': {
            'oneofs': {'result': {'oneof': ['success', 'error']}},
            'fields': {
                'success': {
                    'type': 'UcsResponse',
                    'id': 1
                },
                'error': {
                    'type': 'Error',
                    'id': 2
                }
            }
        },
        'UcsResponse': {
            'oneofs': {
                'resolveResult': {'oneof': ['resolveSuccess', 'resolveError']},
                'accountAttributesResult': {'oneof': ['accountAttributesSuccess', 'accountAttributesError']}
            },
            'fields': {
                'resolveSuccess': {
                    'type': 'ResolveResponse',
                    'id': 1
                },
                'resolveError': {
                    'type': 'Error',
                    'id': 2
                },
                'accountAttributesSuccess': {
                    'type': 'AccountAttributesResponse',
                    'id': 3
                },
                'accountAttributesError': {
                    'type': 'Error',
                    'id': 4
                },
                'fetchTimeMillis': {
                    'type': 'int64',
                    'id': 5
                }
            }
        },
        'ResolveResponse': {
            'fields': {
                'configuration': {
                    'type': 'Configuration',
                    'id': 1
                }
            }
        },
        'Configuration': {
            'fields': {
                'configurationAssignmentId': {
                    'type': 'string',
                    'id': 1
                },
                'fetchTimeMillis': {
                    'type': 'int64',
                    'id': 2
                },
                'assignedValues': {
                    'rule': 'repeated',
                    'type': 'AssignedValue',
                    'id': 3
                },
                'policySnapshotId': {
                    'type': 'int64',
                    'id': 4
                }
            }
        },
        'AssignedValue': {
            'oneofs': {'structuredValue': {'oneof': ['boolValue', 'intValue', 'enumValue']}},
            'fields': {
                'propertyId': {
                    'type': 'Identifier',
                    'id': 1
                },
                'metadata': {
                    'type': 'Metadata',
                    'id': 2
                },
                'boolValue': {
                    'type': 'BoolValue',
                    'id': 3
                },
                'intValue': {
                    'type': 'IntValue',
                    'id': 4
                },
                'enumValue': {
                    'type': 'EnumValue',
                    'id': 5
                }
            }
        },
        'Identifier': {
            'fields': {
                'scope': {
                    'type': 'string',
                    'id': 1
                },
                'name': {
                    'type': 'string',
                    'id': 2
                }
            }
        },
        'Metadata': {
            'fields': {
                'policyId': {
                    'type': 'int64',
                    'id': 1
                },
                'externalRealm': {
                    'type': 'string',
                    'id': 2
                },
                'externalRealmId': {
                    'type': 'int64',
                    'id': 3
                }
            }
        },
        'BoolValue': {
            'fields': {
                'value': {
                    'type': 'bool',
                    'id': 1
                }
            }
        },
        'EnumValue': {
            'fields': {
                'value': {
                    'type': 'string',
                    'id': 1
                }
            }
        },
        'IntValue': {
            'fields': {
                'value': {
                    'type': 'int32',
                    'id': 1
                }
            }
        },
        'AccountAttributesResponse': {
            'fields': {
                'accountAttributes': {
                    'keyType': 'string',
                    'type': 'AccountAttribute',
                    'id': 1
                }
            }
        },
        'AccountAttribute': {
            'oneofs': {'value': {'oneof': ['boolValue', 'longValue', 'stringValue']}},
            'fields': {
                'boolValue': {
                    'type': 'bool',
                    'id': 2
                },
                'longValue': {
                    'type': 'int64',
                    'id': 3
                },
                'stringValue': {
                    'type': 'string',
                    'id': 4
                }
            }
        },
        'Error': {
            'fields': {
                'errorCode': {
                    'type': 'int32',
                    'id': 1
                },
                'errorMessage': {
                    'type': 'string',
                    'id': 2
                }
            }
        }
    }
}


if ($response.status === 200) {
    let accAttributes
    let body
    if ($request.url.includes('bootstrap/v1/bootstrap') && $request.method === 'POST') {
        let bootstrapResponseType = protobuf.Root.fromJSON(spotifyJson).lookupType('BootstrapResponse')
        let bootstrapResponseObj = bootstrapResponseType.decode(binaryBody)
        accAttributes = bootstrapResponseObj.ucsResponseV0.success.customization.success.accountAttributesSuccess.accountAttributes
        processMapObj(accAttributes)
        body = bootstrapResponseType.encode(bootstrapResponseObj).finish()
    } else if ($request.url.includes('user-customization-service/v1/customize') && $request.method === 'POST') {
        let ucsResponseWrapperType = protobuf.Root.fromJSON(spotifyJson).lookupType('UcsResponseWrapper')
        let ucsResponseWrapperMessage = ucsResponseWrapperType.decode(binaryBody)
        accAttributes = ucsResponseWrapperMessage.success.accountAttributesSuccess.accountAttributes
        processMapObj(accAttributes)
        body = ucsResponseWrapperType.encode(ucsResponseWrapperMessage).finish()
    }
    $done({body})
}

function processMapObj(accAttributes) {
    accAttributes['player-license'] = {stringValue: 'premium'}
    accAttributes['mobile'] = {boolValue: true}
    accAttributes['streaming-rules'] = {stringValue: ''}
    accAttributes['financial-product'] = {stringValue: 'pr:premium,tc:0'}
    accAttributes['license-acceptance-grace-days'] = {longValue: 30}
    accAttributes['mobile-login'] = {boolValue: true}
    accAttributes['name'] = {stringValue: 'Spotify Premium ++'}
    accAttributes['on-demand'] = {boolValue: true}
    accAttributes['ads'] = {boolValue: false}
    accAttributes['catalogue'] = {stringValue: 'premium'}
    accAttributes['high-bitrate'] = {boolValue: true}
    accAttributes['libspotify'] = {boolValue: true}
    accAttributes['nft-disabled'] = {stringValue: '1'}
    accAttributes['shuffle'] = {boolValue: false}
    accAttributes['audio-quality'] = {stringValue: '1'}
    accAttributes['offline'] = {boolValue: true}
    accAttributes['pause-after'] = {longValue: 0}
    accAttributes['can_use_superbird'] = {boolValue: true}
    accAttributes['type'] = {stringValue: 'premium'}
    accAttributes['loudness-levels'] = {stringValue: '1:-9.0,0.0,3.0:-2.0'}
    accAttributes['payments-initial-campaign'] = {stringValue: 'web'}
    accAttributes['shuffle-eligible'] = {boolValue: true}
    accAttributes['unrestricted'] = {boolValue: true}
    accAttributes['com.spotify.madprops.use.ucs.product.state'] = {boolValue: true}
    delete accAttributes['ad-use-adlogic']
    delete accAttributes['ad-catalogues']
}
