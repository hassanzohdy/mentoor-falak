class FlkTimeRemaining {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor() {
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.startsAt = this.inputs.getProp('startsAt');

        // as the endsAt property is not in the html template, then the observer won't observe it
        // therefore we'll ask the observer to do it manually
        // whenever the endsAt value is changed we'll start again the time calculator
        this.handler.onChange('endsAt', e => {
            this.start();
        }).observe('endsAt');

        this.startsAt = Math.floor(Date.now() / 1000);

        this.endsAt = this.inputs.getProp('endsAt');

        this.hideWhen = this.prop('hideWhen');

        this.start();
    }

    start() {
        this.timeUp = false;

        if ((this.endsAt - this.startsAt) < 0) {
            this.timeUp = true;
        }

        this.lostSeconds = 0;

        setTimeout(() => {
            this.calculate();
        }, 0);

        this.startCalculating();
    }

    startCalculating() {
        if (this.timer) {
            clearInterval(this.timer);
        }

        this.timer = setInterval(() => {
            this.lostSeconds++;
            this.calculate();
        }, 1000);
    }

    getRemainingTime() {
        if (this.timeUp) return '00:00';;

        if (this.days > 0) {
            return this.days + 'd';
        }

        return this.hours + ':' + this.minutes + ':' + this.seconds;
    }

    calculate() {
        if ((this.endsAt - this.startsAt) < 0) {
            this.timeUp = true;
            clearInterval(this.timer);
            this.timer.innerHTML = this.getRemainingTime();
            return;
        }

        this.remaining = (this.endsAt - this.startsAt) - this.lostSeconds;

        // calculate (and subtract) whole days
        this.days = Math.floor(this.remaining / 86400);
        this.remaining -= this.days * 86400;

        // calculate (and subtract) whole hours
        this.hours = Math.floor(this.remaining / 3600) % 24;
        this.remaining -= this.hours * 3600;

        // calculate (and subtract) whole minutes
        this.minutes = Math.floor(this.remaining / 60) % 60;
        this.remaining -= this.minutes * 60;

        // what's left is seconds
        this.seconds = this.remaining % 60;  // in theory the modulus is not required

        this.hours = String(this.hours).padStart(2, '0');
        this.minutes = String(this.minutes).padStart(2, '0');
        this.seconds = String(this.seconds).padStart(2, '0');

        this.timer.innerHTML = this.getRemainingTime();
    }
}