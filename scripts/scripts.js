function startClock() {
    const elementTime = document.querySelector(".timer");
    let seconds = 0;
    let time;

    function createDataFromSeconds(seconds) {
        const data = new Date(seconds * 1000);
        return data.toLocaleTimeString("pt-BR", {
            hour12: false,
            timeZone: "UTC",
        });
    }

    document.addEventListener("click", function (e) {
        const el = e.target;

        if (el.classList.contains("start")) {
            elementTime.classList.remove("pause-action");
            clearInterval(time);
            startTime();
        }

        if (el.classList.contains("pause")) {
            clearInterval(time);
            elementTime.classList.add("pause-action");
        }

        if (el.classList.contains("stop")) {
            elementTime.classList.remove("pause-action");
            clearInterval(time);
            elementTime.innerHTML = `00:00:00`;
            seconds = 0;
        }
    });

    function startTime() {
        time = setInterval(function () {
            seconds++;
            elementTime.innerHTML = createDataFromSeconds(seconds);
        }, 1000);
    }
}
startClock();
