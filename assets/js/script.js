function clock() {
    const fullDate = new Date();
    let hours = fullDate.getHours();
    let minutes = fullDate.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    document.querySelector('#hours').innerHTML = hours;
    document.querySelector('#minutes').innerHTML = minutes;
}

setInterval(clock);

function goodnight() {
    document.getElementById("on").style.display = "none";
    document.getElementById("off").style.display = "inline";
}

function eveningLights() {
    //  document.getElementById("off").style.display = "none";
    document.getElementById("on").style.display = "inline";
}