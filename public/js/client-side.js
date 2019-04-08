
console.log('client side script');

const socket=io('http://localhost:3020');

socket.on('welcome-message',(greeting)=>{
    console.log(greeting);
})

function sendMessage(event){
event.preventDefault();

let username=document.getElementById('name').value;
let message=document.getElementById('message').value;

socket.emit('message',`${username} :: ${message}`);

let chatHistory=document.getElementById('chatHistory');

let messageText=document.createElement('div');
messageText.className="sent-message self-align-end"
messageText.innerHTML=`${username} :: ${message}`;

chatHistory.appendChild(messageText);


}


socket.on('server-message',(message)=>{
    //console.log(message);

    let chatHistory=document.getElementById('chatHistory');

let messageText=document.createElement('div');

messageText.className="received-message self-align-start"
messageText.innerHTML=message;

chatHistory.appendChild(messageText);
})