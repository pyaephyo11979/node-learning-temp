const fs = require('fs');
for(let i=0; i<100000; i++){
    fs.writeFileSync('./contents/new_result.txt',`Hello world ${i} \n` , {flag: 'a'});
}