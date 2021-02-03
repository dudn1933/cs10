const log = console.log;
const Request = require('./request');
const Response = require(`./response`);

class Socket {
    constructor(address, url) {
        const net = require('net');
        this.socket = new net.Socket();
        this.address = address;
        this.url = url;
        const request = new Request('GET', url);
        this.request = request;
    }

    init() {
        this.socket.connect(80, this.address, () => {
            // REQUEST 요청을 보내면 REPONSE 가 옴
            return this.socket.write(this.request.getMessage());
        });
        this.socket.on('data', (data) => {
            log(`========== HTTP Request ==========`);
            log(this.request.getMessage());
            // const socketdata = data.toString().split('\r\n\r\n');
            const socketdata = data;
            const response = new Response(socketdata);
            response.print();
            this.socket.end();
        });

        this.socket.on('end', () => {
            setTimeout(() => { log('서버 종료'); }, 3000);
        });
    }
}

module.exports = Socket;