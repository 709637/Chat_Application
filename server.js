console.log('Server side code');

//creating the server

const http=require('http');
const express=require('express');
const app=express();

const path=require('path');

app.use(express.static(path.join(__dirname,'public')));

app.use(express.static(path.join(__dirname,'node_modules')));

const server=http.createServer(app);

server.listen(3020,()=>{
    console.log('listing on port 3020');
})

//creating socket io instance at server-side
const io=require('socket.io')(server);

//listening for the connection request from client as handshake 
io.on('connection',(socket)=>{
    console.log('connected with client');
    socket.emit('welcome-message',"Welcome to my chat app");
    
    socket.on('message',(message)=>{
        //console.log(message);
        socket.broadcast.emit('server-message',message);
    })
})