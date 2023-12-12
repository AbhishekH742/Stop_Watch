

const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('.resetBtn');

let minute = 0;
let second = 0;
let hour = 0;

let SingularMin = 0;
let SingularSsec = 0;
let Singularhour = 0;

let timeInterval = null;
let timerStatus = "stopped";

function stopWatch() {
    second++;

    if (second / 60 === 1) {
        second = 0;
        minute++;
        if (minute / 60 === 1) {
            minute = 0;
            hour++;
            // if (hour === 12 && minute / 60 === 1) {
            //     hour = 0;
            // }
        }
    }


    if (second < 10) {
        SingularSsec = "0" + second.toString();
    }
    else {
        SingularSsec = second;
    }
    if (minute < 10) {
        SingularMin = "0" + minute.toString();
    }
    else {
        SingularMin = minute;
    } if (hour < 10) {
        Singularhour = "0" + hour.toString();
    }
    else {
        Singularhour = hour;
    }

    let displayTimer = document.querySelector('.timer').innerText = Singularhour + ":" + SingularMin + ":" + SingularSsec;


}

// window.setInterval(stopWatch, 1000);



startStopBtn.addEventListener('click', function () {

    if (timerStatus === "stopped") {
        timeInterval = window.setInterval(stopWatch, 1000);
        document.querySelector('#startStopBtn').innerHTML = `Pause`;
        document.querySelector('#startStopBtn').style.backgroundColor = "orange";
        timerStatus = "started";
    } else {
        window.clearInterval(timeInterval);
        document.querySelector('#startStopBtn').innerText = "Start";
        document.querySelector('#startStopBtn').style.backgroundColor = "rgb(87, 213, 87)";
        timerStatus = "stopped";
    }
});

resetBtn.addEventListener('click', function () {

    window.clearInterval(timeInterval);

    second = 0;
    minute = 0;
    hour = 0;

    document.querySelector('.timer').innerText = "00:00:00";
})


