//clock
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

setInterval(clock, 1000);



// get weekday and day
function currentDate() {
    const fullDate = new Date();
    let weekday = new Array(7);
    weekday[0] = "SUM";
    weekday[1] = "MON";
    weekday[2] = "TUE";
    weekday[3] = "WED";
    weekday[4] = "THU";
    weekday[5] = "FRI";
    weekday[6] = "SAT";

    let n = weekday[fullDate.getDay()];
    let day = fullDate.getDate();

    document.querySelector('#day').innerHTML = day;
    document.querySelector('#weekday').innerHTML = n;
}

setInterval(currentDate);


function start() {
    clock();
    currentDate();
    myFunction()
}





// function goodnight() {
//     document.getElementById("on").style.display = "none";
//     document.getElementById("off").style.display = "inline";
// }

// function eveningLights() {
//     //  document.getElementById("off").style.display = "none";
//     document.getElementById("on").style.display = "inline";
// }