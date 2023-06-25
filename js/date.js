const todaysDate = document.querySelector("#date");

const weekday = ["일", "월", "화", "수", "목", "금", "토"];

function getToday(params){
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth()+1;
    const date = today.getDate();
    const day = today.getDay();

    
    const thisWeekday = weekday[day];
    const redWeekend = document.createElement("span");
    redWeekend.innerText = `${thisWeekday}`;

    if(day === 0 || day === 6){
        redWeekend.classList.add("weekend");
    }else{
        redWeekend.classList.remove("weekend");
    }
    
    todaysDate.innerText = `${year}.${month}.${date} `;
    todaysDate.appendChild(redWeekend);
}

getToday();