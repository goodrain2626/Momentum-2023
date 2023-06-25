const button = document.querySelector(".fa-plus-circle");
const dDayForm = document.querySelector("#dDay-form");
const dDayList = document.querySelector(".dDay-box ul");
const displayUl = document.querySelector("#dDay-display");

function createIcon(classes){
    const icon = document.createElement("i");
    icon.classList.add("fas", ...classes);
    return icon;
}

function addInputButton(){
    const li = document.createElement("li");
    const deleteIcon = createIcon(["fa-times-circle"]);
    deleteIcon.addEventListener("click", deleteDday);


    const dDayName = document.createElement("input");
    dDayName.type = "text";
    dDayName.className = "dDay-name";
    
    const dDayInput = document.createElement("input");
    dDayInput.type = "date";
    dDayInput.className = "dDay-input";

    const checkIcon = createIcon(["fa-check-square"]);
    checkIcon.addEventListener("click", handleDayFormSubmit.bind(null, li, dDayName, dDayInput));

    li.append(deleteIcon, dDayName, dDayInput, checkIcon);
    dDayList.appendChild(li);
}

function handleDayFormSubmit(li, dDayName, dDayInput){
    const newDayName= dDayName.value;
    const chosenDate = new Date(dDayInput.value);
    const currentDate = new Date();
    const gapDate = chosenDate - currentDate;
    
    if(gapDate <= 0){
        alert("미래의 날짜를 선택해주세요 🔮");
    }else if(isNaN(gapDate)){
        alert("날짜를 선택해주세요 📆")
    }else if(newDayName === ""){
        alert("이름을 지정해주세요 📁")
    }else{
        const millisecondsPerSecond = 1000;
        const millisecondsPerMinute = millisecondsPerSecond * 60;
        const millisecondsPerHour = millisecondsPerMinute * 60;
        const millisecondsPerDay = millisecondsPerHour * 24;
        
        const remainingDays = Math.floor(gapDate / millisecondsPerDay ) +1;
        
        const displayLi = document.createElement("li");
        const deleteIcon = createIcon(["fa-times-circle"]);
        deleteIcon.addEventListener("click", deleteDday);
        
        const dayDisplay = document.createElement("h1");
        const nameDisplay = document.createElement("h2");

        if(remainingDays <= 7){
            dayDisplay.classList.add("red");
        }else if(remainingDays <= 31){
            dayDisplay.classList.add("blue");
        }else if(remainingDays <= 100){
            dayDisplay.classList.add("green")
        }

        dayDisplay.innerText = `D-${remainingDays}`;
        nameDisplay.innerText = newDayName;

        displayLi.append(deleteIcon, dayDisplay, nameDisplay);
        displayUl.appendChild(displayLi);

        li.style.display = "none";

        console.log(`D-${remainingDays} ${newDayName}`);
    }
}

function deleteDday(event){
    const icon = event.target;
    const li = icon.parentElement;
    if (li.parentElement === dDayList) {
        // This is an input list item, just remove it immediately
        li.remove();
    } else if (li.parentElement === displayUl) {
        // This is a display list item, apply strike-through and remove after 1 second
        const h1 = li.querySelector("h1");
        const h2 = li.querySelector("h2");
        
        h1.style.textDecoration = "line-through #FF5757"; 
        h2.style.textDecoration = "line-through #FF5757";
        
        setTimeout(() => li.remove(), 1000);
    }
}

button.addEventListener("click", addInputButton);
