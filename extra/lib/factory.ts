import {
    BrowseMessage,
    GuideMessage,
    NextMessage,
    PlayerMessage,
    SearchMessage,
    SettingMessage,
    ShortsMessage,
    WatchMessage
} from './response'
import {Youtubemessage} from './youtubemessage'

const messages = new Map<string, new () => Youtubemessage>([
    ['browse', BrowseMessage],
    ['next', NextMessage],
    ['player', PlayerMessage],
    ['search', SearchMessage],
    ['reel_watch_sequence', ShortsMessage],
    ['guide', GuideMessage],
    ['get_setting', SettingMessage],
    ['get_watch', WatchMessage]
])

export default function createMessage(url: string): Youtubemessage | null {
    for (const [path, MessageClass] of messages.entries()) {
        if (url.includes(path)) {
            return new MessageClass()
        }
    }
    return null
}
