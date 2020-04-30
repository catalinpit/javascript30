var secondHand = document.querySelector('.second-hand');
var minuteHand = document.querySelector('.min-hand');
var hourHand = document.querySelector('.hour-hand');

function setDate() {
    var now = new Date();

    var seconds = now.getSeconds();
    var minutes = now.getMinutes();
    var hours = now.getHours();

    var secondsDegrees = ((seconds / 60) * 360) + 90;
    var minutesDegrees = ((seconds / 60) * 360) + 90;
    var hoursDegrees = ((seconds / 60) * 360) + 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}


setInterval(setDate, 1000);