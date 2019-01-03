function clock() {
    var fullDate = new Date();
    var hours = fullDate.getHours();
    var minutes = fullDate.getMinutes();

    var colon = document.getElementById("pulsate");

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    document.getElementById("numbers").innerHTML = hours + ":" + minutes;
}

setInterval(clock, 1000);