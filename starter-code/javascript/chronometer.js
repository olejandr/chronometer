 class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = 0;
    }

    startClick() {
        this.intervalId = setInterval(()=>{
            this.currentTime++
        }, 1000);
        
    }

    setMinutes() {
        let minutes = 0;
        if(this.currentTime == 60){
            minutes++;
            clearInterval(this.intervalId)
        } return minutes
    }

    setSeconds() {
    }

    twoDigitsNumber(number) {
    }

    setTime() {
    }

    setMilliseconds() {

    }

    stopClick() {
    }

    resetClick() {
    }

    splitClick() {

    }
}

