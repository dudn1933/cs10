const log = console.log;
const dns = require('dns');
const net = require('net');
const Socket = require('./socket');
const Response = require('./response');

const go = url => {
    const port = 80;
    dns.lookup(url, function (err, address) {
        if (err) throw err;
        log(`TCP Connection : ${address} ${port}\n`);
        const socket = new Socket(address, url);
        socket.init();
    });
}

const main = () => {
    const url = ['www.hani.co.kr', 'www.disney.co.kr', 'www.khan.co.kr', 'www.yes24.com', 'www.kyobobook.co.kr'];
    const host = url[4];
    log(`URL ${host}`);
    log('(DNS LookUp...)');
    go(host);
}
main();