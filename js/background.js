const backgroundIcon = document.querySelector(".background-icon")
const images = ["0.jpg", '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg'];
document.body.style.backgroundColor = "#96AED0";

function changeBackgroundImage(){
    const chosenImage = images[Math.floor(Math.random() * images.length)];
    console.log(chosenImage);
    
    document.body.style.backgroundImage = `url(./img/${chosenImage})`;
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
}

backgroundIcon.addEventListener("click", changeBackgroundImage);