const clock = document.querySelector("h2#clock");
const dDate = document.querySelector("h2#d-day");

function getClock() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const newHours = hours % 12;  //24시간 -> 12시간
    //1자리 시간 (ex. 1, 2, 3) -> 2자리 시간 (_1, _2, _3) 바꿔줌
    const formattedHours = newHours.toString().padStart(2, " "); 
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    const period = hours < 12 ? "am" : "pm";

    // 날짜 구하기
    
    if (newHours > 0){
        //hours: 1시부터 11시까지
        clock.innerText = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${period}`;
    }else{
        // hours: 나머지가 0. 즉, 12시
        clock.innerText = `12:${formattedMinutes}:${formattedSeconds} ${period}`;
    }
}


setInterval(getClock, 1000);
