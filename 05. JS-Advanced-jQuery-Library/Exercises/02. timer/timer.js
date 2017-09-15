function timer() {
    let startBtn = $('#start-timer');
    let stopBtn = $('#stop-timer');
    let seconds = 0;

    let counter;

    startBtn.on("click", function () {
        clearInterval(counter);
        counter = setInterval(step, 1);
    });

    stopBtn.on("click", function () {
        clearInterval(counter);
    });

    function step() {
        seconds++;
        $("#seconds")[0].textContent = pad(Math.floor(seconds % 60));

        let minutes = seconds / 60;
        $("#minutes")[0].textContent = pad(Math.floor(minutes % 60));

        let hours = seconds / 3600;
        $("#hours")[0].textContent = pad(Math.floor(hours));
    }

    function pad(num) {
        if (num <= 9) {
            num = `0${num}`;
        }
        return num;
    }
}