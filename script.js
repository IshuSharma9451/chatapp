let username = '';
const btn = document.getElementById('join-chat');
const usernameInput = document.getElementById('username-input');
const usernameForm = document.querySelector('.form-username');
const chatroom = document.querySelector('.chatroom-cont');

btn.addEventListener('click',(event)=>{
    event.preventDefault();
    username = usernameInput.value;
    // console.log(username);
    if(username){
        usernameForm.style.display = "none";
        chatroom.style.display = "block";
    }
})