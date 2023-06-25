
const API_KEY = "9a14b39deb9524d71d9740ca041387b2";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon)

    //current weather
    const url1 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=kr&appid=${API_KEY}&units=metric`;

    //forecast
    // const url2 =`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    //call current weather
    fetch(url1).then(response => response.json())
    .then(data => {
        const weatherIcon = document.querySelector('#weather-icon');
        const weatherMain = document.querySelector('#weather-main');

        const id = data.weather[0].id;
        const main = data.weather[0].main; 
        const temp = Math.floor(data.main.temp);
        const city = data.name; 

        // 날씨 아이콘 선택
        const icon = document.createElement('img');
        // 이미지 파일 선택
        if (200 <= id && id < 300) {
            icon.src = '/img/weather/200.png'
        };
        if (300 <= id && id < 400) {
            icon.src = '/img/weather/300.png'
        };
        if (500 <= id && id < 600) {
            icon.src = '/img/weather/500.png'
        };
        if (600 <= id && id < 700) {
            icon.src = '/img/weather/600.png'
        };
        if (700 <= id && id < 800) {
            icon.src = '/img/weather/700.png'
        };
        if (id == 800) {
            icon.src = '/img/weather/800.png'
        };
        if ( 800 < id ) {
            icon.src = '/img/weather/801.png'
        };
        weatherIcon.appendChild(icon);

        // 날씨 내용 추가
        weatherMain.innerHTML = `<h2>${main} </h2>  <h3> / </h3> <h3>${temp}°</h3> <h4>${city}</h4>`;
    });

    //call forecast

};
function onGeoError(){
    alert("Can't find you. No weather for you.")
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);