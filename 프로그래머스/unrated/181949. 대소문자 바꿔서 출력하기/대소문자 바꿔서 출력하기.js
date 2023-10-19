const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    const split=[...str]
        result = [];
    const strValue = [...str]
    strValue.map(a => {
        if(a === a.toUpperCase()) {
            result.push(a.toLowerCase());
        }else {
            result.push(a.toUpperCase());
        }
    })
    console.log(result.join(''));

});