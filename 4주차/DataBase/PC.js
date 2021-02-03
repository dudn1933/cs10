let fs = require('fs');

const { Data } = require('./nickname.js');

const nickName = new Data().nick;
const money = new Data().randommoney;
const date = new Data().randomdate;

for (let i = 0; i < 1000000; i++) {
    console.log(`,${nickName()},${money()},${date('01-29-2021', '02-28-2021')}`);
}
