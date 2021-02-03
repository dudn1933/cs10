const log = console.log;
const dns = require('dns');
const net = require('net');

class Request {
    constructor(address) {
        this.address = address;
        this.socket = new net.Socket();
    }
    connect(callback) {
        const arr = [];
        this.address.forEach(element => {
            arr.push(element);
        });

        const host = arr[0];
        log(host)
        log("DNS Lookup...");

        dns.lookup(host.toString(), (err, address) => {
            if (err) {
                log(err.stack);
            }
            // 소캣연결
            this.socket.on('data', (chunk) => {
                log(chunk.toString());
                this.socket.end();
            });

            this.socket.on('end', function () {
                log("서버 종료")
            });

            this.socket.connect(80, address, () => {
                log(`TCP Connection : ${address} 80`);
                log(`HTTP Request`);
                log(`\n================================================\n`)
                // REQUEST 요청을 보내면 REPONSE  가 옴
                if (arr[0]) {
                    this.socket.write("GET //home/index.jsp HTTP/1.1\r\n" + `Host: ${host}:80\r\n` + "\r\n");
                } else if (!arr[0]) {
                    this.socket.write("GET / HTTP/1.1\r\n" + `Host: ${host}:80\r\n` + "\r\n");
                    // Accept-Lanuage:kr
                }
            })
        });
    }
}

const main = () => {
    const address = ['www.disney.co.kr', 'www.khan.co.kr', 'www.yes24.com', 'www.kyobobook.co.kr'];
    const request = new Request(address);
    request.connect();
}
main();