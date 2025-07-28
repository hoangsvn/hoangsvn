const obj = JSON.parse($response.body)
obj.plan = {
    'vendor': 'apple',
    'id': 'high_tier',
    'manageable': true,
    'plan_upsells': [],
    'plan_id': 'go-plus',
    'upsells': [],
    'plan_name': 'Go Plus'
}
obj.features = [
    {
        'name': 'offline_sync',
        'enabled': true,
        'plans': [
            'mid_tier',
            'high_tier'
        ]
    },
    {
        'name': 'no_audio_ads',
        'enabled': true,
        'plans': [
            'mid_tier',
            'high_tier'
        ]
    },
    {
        'name': 'hq_audio',
        'enabled': true,
        'plans': [
            'high_tier'
        ]
    },
    {
        'name': 'system_playlist_in_library',
        'enabled': true,
        'plans': []
    },
    {
        'name': 'ads_krux',
        'enabled': false,
        'plans': []
    },
    {
        'name': 'new_home',
        'enabled': true,
        'plans': []
    },

    {
        'name': 'spotlight',
        'enabled': false,
        'plans': []
    }
]

if ($persistentStore.read('sound-cloud-go-plus') !== 'true') {
    $notification.post('SoundCloud', 'You have activated', 'SoundCloud Go+')
    $persistentStore.write('true', 'sound-cloud-go-plus')
}
$done({body: JSON.stringify(obj)})


