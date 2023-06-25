const loginBox = document.querySelector(".login");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetingWords = document.querySelector("#greeting-words");
const greetingName = document.querySelector("#greeting-name");
const container = document.querySelector(".container");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"


function onLoginSubmit(event){
    event.preventDefault();
    loginBox.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    container.classList.remove("hidden-important");
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
} 

function paintGreetings(tomato){
    loginBox.classList.add("hidden-important");
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greetingWords.innerText = `반갑습니다 :)`;
    greetingName.innerText = `${tomato}!`
    greetingWords.classList.remove(HIDDEN_CLASSNAME);
    greetingName.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log(savedUsername);

if(savedUsername === null){
    // show the form
    loginBox.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    container.classList.add("hidden-important");
    
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    // show the greeting
    paintGreetings(savedUsername);
}