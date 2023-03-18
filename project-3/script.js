window.onload = function(){
    let seconds = 00;
    let tens = 00;
    let minutes = 00;
    
    let OutputSeconds = document.getElementById("second");
    let OutputTens = document.getElementById("tens");
    let OutputMins = document.getElementById("minutes");

    let buttonStart = document.getElementById("btn-start");
    let buttonStop = document.getElementById("btn-stop");
    let buttonReset = document.getElementById("btn-reset");
    let Interval;

    buttonStart.addEventListener('click', () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);  // millisecond 10 = 0.01 second
    });

    buttonStop.addEventListener('click', () => {
        clearInterval(Interval);
    });

    buttonReset.addEventListener('click', () => {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        minutes = "00";
        OutputSeconds.innerHTML = seconds;
        OutputTens.innerHTML = tens;
        OutputMins.innerHTML = minutes;

    });

    function startTimer(){
        tens++;
        if(tens <= 9){
            OutputTens.innerHTML = "0" + tens;
        }

        if(tens > 9){
            OutputTens.innerHTML = tens;
        }

        if(tens > 99){
            seconds++;
            OutputSeconds.innerHTML = "0" + seconds;
            tens = 0;
            OutputTens.innerHTML = "0" + 0;
        }

        if(seconds > 9){
            OutputSeconds.innerHTML = seconds;
        }
        if(seconds > 59){
            minutes++;
            OutputMins.innerHTML = "0" + minutes;
            seconds = 0;
            OutputSeconds.innerHTML = "0" + 0;
        }
        if(minutes > 9){
            OutputSeconds.innerHTML = minutes;
        }
    }
}
