const log = console.log;

class Response {
    constructor(data) {
        this.socketdata = data;
        this.statusCode;
        this.reponseLine;
        this.contentLength;
        this.header;
        this.body;
        this.zz
    }

    print() {
        this.socketdata = this.socketdata.toString();
        this.zz = this.socketdata.split('\n')
        this.header = this.socketdata.split('\r\n\r\n')[0];
        this.body = this.socketdata.split('\r\n\r\n')[1];

        log(`========== HTTP HEADER ==========`);
        log(this.header + "\n");
        log(`========== HTTP BODY ==========`);
        log(this.body + "\n");
    }
}

module.exports = Response;