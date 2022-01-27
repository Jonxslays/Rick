class Rick {

  constructor() {
    this.message = "";
  }

  never() {
    this.message += "Never ";
    return this;
  }

  gonna() {
    this.message += "gonna ";
    return this;
  }

  give() {
    this.message += "let ";
    return this;
  }

  you() {
    this.message += "you ";
    return this;
  }

  up() {
    console.log(this.message + "down!")
  }
}

let rick = new Rick();
rick.never().gonna().give().you().up()
