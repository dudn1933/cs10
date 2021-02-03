class Request {
    constructor(method, url) {
        this.method = method;
        this.header = null;
        this.url = url;
    }
    setMethod(method) {
        this.method = method;
    }
    setHeader(header) {
        this.header = header;
    }
    getMessage() {
        if (this.url === 'www.disney.co.kr') {
            return `${this.method} //home/index.jsp HTTP/1.1\r\n` + `Host: ${this.url}:80\r\n` + `\r\n`;
        } else if (this.url !== 'www.disney.co.kr') {
            return `${this.method} / HTTP/1.1\r\n` + `Host: ${this.url}:80\r\n` + `\r\n`;
            // + `Accept: */*\r\n` + `Connection: keep-alive\r\n` + `Content-Length: 0` + 
        }
    }
}

module.exports = Request;