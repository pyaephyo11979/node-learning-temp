const http = require('http');
const express = require('express');
const fs = require('fs');
const app= express();
const homePage = fs.readFileSync('./index.html');
const homeStyle=fs.readFileSync('./style.css');
const homeScript=fs.readFileSync('./script.js');
const homeLogo=fs.readFileSync('./logo.svg');
const server=http.createServer((req,res)=>{
    console.log('user hit the server');
    let url=req.url;
    switch(url){
        case '/':{
            res.writeHead(200,{'Content-type':'text/html'});
            res.write(homePage);
            res.end();
        }; break;
        case '/style.css':{
            res.writeHead(200,{'Content-type':'text/css'});
            res.write(homeStyle);
            res.end();
        }; break;
        case '/script.js':{
            res.writeHead(200,{'Content-type':'text/javascript'});
            res.write(homeScript);
            res.end();
        }; break;
        case'/logo.svg':{
            res.writeHead(200,{'Content-type':'image/svg+xml'});
            res.write(homeLogo);
            res.end();
        }; break;
        default:{
            res.writeHead(404,{'Content-type':'text/html'});
            res.end(`<h1 style="text-align:center; color:red;">page not found</h1>`);
        }; break;
    }
})
server.listen(5000,()=>{
    console.log('server is running on port 5000');
})
