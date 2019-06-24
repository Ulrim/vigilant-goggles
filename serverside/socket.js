Socket {
    nsp:
    Namespace {
        name: '/',
            server:
        Server {
            nsps: [Object],
                _path: '/socket.io',
                    _serveClient: true,
                        _adapter: [Function: Adapter],
                            _origins: '*:*',
                                sockets: [Circular],
                                    eio: [Server],
                                        httpServer: [Server],
                                            engine: [Server]
        },
        sockets:
        {
            PhRevMV0u3w_zfy4AAAB: [Socket],
                '8IGEfI4qkoS3BlbYAAAC': [Circular]
        },
        connected:
        {
            PhRevMV0u3w_zfy4AAAB: [Socket],
                '8IGEfI4qkoS3BlbYAAAC': [Circular]
        },
        fns: [],
            ids: 0,
                adapter:
        Adapter {
            nsp: [Circular],
                rooms: [Object],
                    sids: [Object],
                        encoder: Encoder { }
        },
        _events: [Object: null prototype] { connection: [Function] },
        _eventsCount: 1
    },
    server:
    Server {
        nsps: { '/': [Namespace] },
        _path: '/socket.io',
            _serveClient: true,
                _adapter: [Function: Adapter],
                    _origins: '*:*',
                        sockets:
        Namespace {
            name: '/',
                server: [Circular],
                    sockets: [Object],
                        connected: [Object],
                            fns: [],
                                ids: 0,
                                    adapter: [Adapter],
                                        _events: [Object],
                                            _eventsCount: 1
        },
        eio:
        Server {
            clients: [Object],
                clientsCount: 2,
                    wsEngine: undefined,
                        pingTimeout: 60000,
                            pingInterval: 25000,
                                upgradeTimeout: 10000,
                                    maxHttpBufferSize: 100000000,
                                        transports: [Array],
                                            allowUpgrades: true,
                                                allowRequest: [Function: bound],
                                                    cookie: 'io',
                                                        cookiePath: '/',
                                                            cookieHttpOnly: true,
                                                                perMessageDeflate: [Object],
                                                                    httpCompression: [Object],
                                                                        ws: [WebSocketServer],
                                                                            _events: [Object],
                                                                                _eventsCount: 1
        },
        httpServer:
        Server {
            _events: [Object],
                _eventsCount: 4,
                    _maxListeners: undefined,
                        _connections: 3,
                            _handle: [TCP],
                                _usingWorkers: false,
                                    _workers: [],
                                        _unref: false,
                                            allowHalfOpen: true,
                                                pauseOnConnect: false,
                                                    httpAllowHalfOpen: false,
                                                        timeout: 120000,
                                                            keepAliveTimeout: 5000,
                                                                _pendingResponseData: 0,
                                                                    maxHeadersCount: null,
                                                                        headersTimeout: 40000,
                                                                            _connectionKey: '6::::3000',
                                                                                [Symbol(IncomingMessage)]: [Function],
                                                                                    [Symbol(ServerResponse)]: [Function],
                                                                                        [Symbol(asyncId)]: 5
        },
        engine:
        Server {
            clients: [Object],
                clientsCount: 2,
                    wsEngine: undefined,
                        pingTimeout: 60000,
                            pingInterval: 25000,
                                upgradeTimeout: 10000,
                                    maxHttpBufferSize: 100000000,
                                        transports: [Array],
                                            allowUpgrades: true,
                                                allowRequest: [Function: bound],
                                                    cookie: 'io',
                                                        cookiePath: '/',
                                                            cookieHttpOnly: true,
                                                                perMessageDeflate: [Object],
                                                                    httpCompression: [Object],
                                                                        ws: [WebSocketServer],
                                                                            _events: [Object],
                                                                                _eventsCount: 1
        }
    },
    adapter:
    Adapter {
        nsp:
        Namespace {
            name: '/',
                server: [Server],
                    sockets: [Object],
                        connected: [Object],
                            fns: [],
                                ids: 0,
                                    adapter: [Circular],
                                        _events: [Object],
                                            _eventsCount: 1
        },
        rooms:
        { PhRevMV0u3w_zfy4AAAB: [Room], '8IGEfI4qkoS3BlbYAAAC': [Room] },
        sids:
        {
            PhRevMV0u3w_zfy4AAAB: [Object],
                '8IGEfI4qkoS3BlbYAAAC': [Object]
        },
        encoder: Encoder { }
    },
    id: '8IGEfI4qkoS3BlbYAAAC',
        client:
    Client {
        server:
        Server {
            nsps: [Object],
                _path: '/socket.io',
                    _serveClient: true,
                        _adapter: [Function: Adapter],
                            _origins: '*:*',
                                sockets: [Namespace],
                                    eio: [Server],
                                        httpServer: [Server],
                                            engine: [Server]
        },
        conn:
        Socket {
            id: '8IGEfI4qkoS3BlbYAAAC',
                server: [Server],
                    upgrading: false,
                        upgraded: true,
                            readyState: 'open',
                                writeBuffer: [],
                                    packetsFn: [],
                                        sentCallbackFn: [],
                                            cleanupFn: [Array],
                                                request: [IncomingMessage],
                                                    remoteAddress: '::ffff:127.0.0.1',
                                                        checkIntervalTimer: null,
                                                            upgradeTimeoutTimer: null,
                                                                pingTimeoutTimer:
            Timeout {
                _called: false,
                    _idleTimeout: 85000,
                        _idlePrev: [TimersList],
                            _idleNext: [Timeout],
                                _idleStart: 4950,
                                    _onTimeout: [Function],
                                        _timerArgs: undefined,
                                            _repeat: null,
                                                _destroyed: false,
                                                    [Symbol(unrefed)]: false,
                                                        [Symbol(asyncId)]: 205,
                                                            [Symbol(triggerId)]: 184
            },
            transport: [WebSocket],
                _events: [Object],
                    _eventsCount: 3
        },
        encoder: Encoder { },
        decoder: Decoder { reconstructor: null, _callbacks: [Object] },
        id: '8IGEfI4qkoS3BlbYAAAC',
            request:
        IncomingMessage {
            _readableState: [ReadableState],
                readable: false,
                    _events: [Object],
                        _eventsCount: 1,
                            _maxListeners: undefined,
                                socket: [Socket],
                                    connection: [Socket],
                                        httpVersionMajor: 1,
                                            httpVersionMinor: 1,
                                                httpVersion: '1.1',
                                                    complete: true,
                                                        headers: [Object],
                                                            rawHeaders: [Array],
                                                                trailers: { },
            rawTrailers: [],
                aborted: false,
                    upgrade: false,
                        url: '/socket.io/?EIO=3&transport=polling&t=1561343934449-0',
                            method: 'GET',
                                statusCode: null,
                                    statusMessage: null,
                                        client: [Socket],
                                            _consuming: false,
                                                _dumped: true,
                                                    _query: [Object],
                                                        res: [ServerResponse],
                                                            cleanup: [Function: cleanup]
        },
        onclose: [Function: bound],
            ondata: [Function: bound],
                onerror: [Function: bound],
                    ondecoded: [Function: bound],
                        sockets: { '8IGEfI4qkoS3BlbYAAAC': [Circular] },
        nsps: { '/': [Circular] },
        connectBuffer: []
    },
    conn:
    Socket {
        id: '8IGEfI4qkoS3BlbYAAAC',
            server:
        Server {
            clients: [Object],
                clientsCount: 2,
                    wsEngine: undefined,
                        pingTimeout: 60000,
                            pingInterval: 25000,
                                upgradeTimeout: 10000,
                                    maxHttpBufferSize: 100000000,
                                        transports: [Array],
                                            allowUpgrades: true,
                                                allowRequest: [Function: bound],
                                                    cookie: 'io',
                                                        cookiePath: '/',
                                                            cookieHttpOnly: true,
                                                                perMessageDeflate: [Object],
                                                                    httpCompression: [Object],
                                                                        ws: [WebSocketServer],
                                                                            _events: [Object],
                                                                                _eventsCount: 1
        },
        upgrading: false,
            upgraded: true,
                readyState: 'open',
                    writeBuffer: [],
                        packetsFn: [],
                            sentCallbackFn: [],
                                cleanupFn: [[Function], [Function]],
                                    request:
        IncomingMessage {
            _readableState: [ReadableState],
                readable: false,
                    _events: [Object],
                        _eventsCount: 1,
                            _maxListeners: undefined,
                                socket: [Socket],
                                    connection: [Socket],
                                        httpVersionMajor: 1,
                                            httpVersionMinor: 1,
                                                httpVersion: '1.1',
                                                    complete: true,
                                                        headers: [Object],
                                                            rawHeaders: [Array],
                                                                trailers: { },
            rawTrailers: [],
                aborted: false,
                    upgrade: false,
                        url: '/socket.io/?EIO=3&transport=polling&t=1561343934449-0',
                            method: 'GET',
                                statusCode: null,
                                    statusMessage: null,
                                        client: [Socket],
                                            _consuming: false,
                                                _dumped: true,
                                                    _query: [Object],
                                                        res: [ServerResponse],
                                                            cleanup: [Function: cleanup]
        },
        remoteAddress: '::ffff:127.0.0.1',
            checkIntervalTimer: null,
                upgradeTimeoutTimer: null,
                    pingTimeoutTimer:
        Timeout {
            _called: false,
                _idleTimeout: 85000,
                    _idlePrev: [TimersList],
                        _idleNext: [Timeout],
                            _idleStart: 4950,
                                _onTimeout: [Function],
                                    _timerArgs: undefined,
                                        _repeat: null,
                                            _destroyed: false,
                                                [Symbol(unrefed)]: false,
                                                    [Symbol(asyncId)]: 205,
                                                        [Symbol(triggerId)]: 184
        },
        transport:
        WebSocket {
            readyState: 'open',
                discarded: false,
                    socket: [WebSocket],
                        writable: false,
                            perMessageDeflate: [Object],
                                supportsBinary: true,
                                    _events: [Object],
                                        _eventsCount: 4
        },
        _events:
        [Object: null prototype] {
            close: [Array],
                data: [Function: bound],
                    error: [Function: bound]
        },
        _eventsCount: 3
    },
    rooms: { '8IGEfI4qkoS3BlbYAAAC': '8IGEfI4qkoS3BlbYAAAC' },
    acks: { },
    connected: true,
        disconnected: false,
            handshake:
    {
        headers:
        {
            host: 'localhost:3000',
                'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:67.0) Gecko/20100101 Firefox/67.0',
                accept: '*/*',
                    'accept-language': 'ko-KR,ko;q=0.8,en-US;q=0.5,en;q=0.3',
                        'accept-encoding': 'gzip, deflate',
                            dnt: '1',
                                connection: 'keep-alive',
                                    referer: 'http://localhost:3000/',
                                        cookie: 'io=PhRevMV0u3w_zfy4AAAB'
        },
        time: 'Mon Jun 24 2019 11:38:54 GMT+0900 (GMT+09:00)',
            address: '::ffff:127.0.0.1',
                xdomain: false,
                    secure: false,
                        issued: 1561343934455,
                            url: '/socket.io/?EIO=3&transport=polling&t=1561343934449-0',
                                query: { EIO: '3', transport: 'polling', t: '1561343934449-0' }
    },
    fns: [],
        _events: [Object: null prototype] { 'chat message': [Function] },
    _eventsCount: 1
}