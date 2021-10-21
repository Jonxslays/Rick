class Rick {
    message: string;

    constructor() {
        this.message = "";
    }

    never(): Rick {
        this.message += "Never ";
        return this;
    }

    gonna(): Rick {
        this.message += "gonna ";
        return this;
    }

    give(): Rick {
        this.message += "let ";
        return this;
    }

    you(): Rick {
        this.message += "you ";
        return this;
    }

    up() {
        console.log(this.message + "down!")
    }
}

let rick = new Rick();
rick.never().gonna().give().you().up()
