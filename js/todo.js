const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input")
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDosArr = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDosArr));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    const span = li.querySelector("span");

    span.style.textDecoration = "line-through #FF5757";
    
    setTimeout(function(){
        li.remove();
        console.log("li.id는", li.id)
        toDosArr = toDosArr.filter(toDo => toDo.id !== parseInt(li.id));
        //stringfy -> parse된 todosArr에 계속해서 정보가 담김
        //해당 obj의 아이디는 number가 아니라 여전히 string
        saveToDos(); 

    }, 1000);
}

function paintToDo(newToDo){
    // console.log("I will paint", newToDo);
    // console.log(newToDo);
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    // const button = document.createElement("button");
    const deleteIcon = document.createElement("i")
    deleteIcon.classList.add("fas");
    deleteIcon.classList.add("fa-times-circle");

    // button.innerText = ` `
    // button.addEventListener("click", deleteToDo);
    deleteIcon.addEventListener("click", deleteToDo);

    // li.appendChild(button);
    li.appendChild(deleteIcon);
    li.appendChild(span); //li > span
    span.innerText = newToDo.text;
    todoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = todoInput.value;
    // 새로고침 막고 , 내 투두를 입력하면 화면에서 안보이게 하고 싶어!
    console.log(todoInput.value);
    todoInput.value = "";  //빈칸을 넣는다고 해서 입력한 값이 사라지는 것은 아님.
    // console.log(newToDo, todoInput.value);
    const newToDoObj ={
        text: newToDo,
        id: Date.now()
    }
    toDosArr.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item){
//     // array 속 item에 함수를 각각 실행시켜줌
//     // item 1개 -> function 실행 
//     // 그 다음 item -> function 실행
//     console.log("this is the turn of", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDosArr = parsedToDos; //todo를 업데이트
    // parsedToDos.forEach((item) => console.log("this is the turn of", item));
    // 진짜 array로 만들면 각각의 item에 함수를 실행시켜줄 수 있음.
    parsedToDos.forEach(paintToDo);
}

