export default abstract class Client {
    protected static readonly classNames = {
        Surge: (name?: string, className?: string, options?: {
            debug?: boolean
        }) => new SurgeClient(name, className, options)
    }

    private static instances: Record<string, Client> = {}
    isDebug: boolean
    readonly className: string
    request: CRequest
    response: CResponse
    protected name: string

    protected constructor(name?: string, className?: string, options?: { debug?: boolean }) {
        this.name = name ?? ''
        this.isDebug = options?.debug ?? false
        this.className = className ?? ''
        this.init()
    }

    public static getInstance(name?: string, options?: { debug?: boolean }): Client {
        const className = 'Surge'
        if (!Client.instances[className]) {
            Client.instances[className] = Client.classNames[className](
                name,
                className,
                options
            )
        }
        return Client.instances[className]
    }

    abstract init(): void

    abstract getVal(key: string): string | null | undefined

    abstract setVal(val: string, key: string): void

    abstract done(done: CDone): void

    getJSON(key: string, alter: object = {}): object {
        const val = this.getVal(key)
        return val ? JSON.parse(val) : alter
    }

    setJSON(val: object, key: string): void {
        this.setVal(JSON.stringify(val), key)
    }

    exit(): void {
        $done({})
    }

    decodeParams(params: Record<string, any>): Record<string, any> {
        return params
    }

    protected createProxy<T extends object, C extends object>(target: T): C {
        return new Proxy(target, {
            get: this.getFn,
            set: this.setFn
        }) as unknown as C
    }

    protected getFn<T>(t: T, p: string, r: any): any {
        return t[p]
    }

    protected setFn<T>(t: T, p: string, v: any, r: any): boolean {
        t[p] = v
        return true
    }
}

export class SurgeClient extends Client {
    static clientAdapter = {
        bodyBytes: 'body'
    }

    init(): void {
        try {
            this.request = this.createProxy<SgRequest, CRequest>($request)
            this.response = this.createProxy<SgResponse, CResponse>($response)
        } catch (e) {
        }
    }

    getVal(key: string): string | null | undefined {
        return $persistentStore.read(key)
    }

    setVal(val: string, key: string): void {
        $persistentStore.write(val, key)
    }

    done(cDone: CDone): void {
        const realResponse = cDone.response ?? cDone
        let body: SurgeBody
        let sgDone: SgDone

        if (realResponse.bodyBytes) {
            body = realResponse.bodyBytes
            delete realResponse.bodyBytes
            sgDone = {...cDone}
            sgDone.response ? (sgDone.response.body = body) : (sgDone.body = body)
        } else {
            sgDone = cDone
        }
        $done(sgDone)
    }

    decodeParams(params: Record<string, any>): Record<string, any> {
        if (typeof $argument === 'string' && !$argument.includes('{{{')) {
            Object.assign(params, JSON.parse($argument))
        }
        return params
    }

    protected getFn<T>(t: T, p: string, receiver: any): any {
        const key = SurgeClient.clientAdapter[p] || p
        return super.getFn(t, key, receiver)
    }

    protected setFn<T>(t: T, p: string, newValue: any, receiver: any): boolean {
        const key = SurgeClient.clientAdapter[p] || p
        return super.setFn(t, key, newValue, receiver)
    }
}
