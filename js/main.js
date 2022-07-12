const Calculation = {
  data() {
    return {
      percent: null,
      volume: null,
      volume2: null,
      time: 1,
      min: "Минуты",
      switch1: true,
    };
  },

  methods: {
    messageOne() {
      let number = this.percent * this.volume * 10;
      number = Math.abs(number);
      number %= 100;
      if (number % 100 >= 5 && number <= 20) {
        return "миллиграммов";
      } else if (number % 10 > 1 && number % 10 < 5) {
        return "миллиграмма";
      } else if (number % 10 === 1) {
        return "миллиграмм";
      } else return "миллиграммов";
    },

    messageTwo() {
      let number2 = this.percent * this.volume * 10000;
      number2 = Math.abs(number2);
      number2 %= 100;
      if (number2 >= 5 && number2 <= 20) {
        return "микрограммов";
      } else if (number2 % 10 > 1 && number2 % 10 < 5) {
        return "микрограмма";
      } else if (number2 % 10 === 1) {
        return "микрограмм";
      } else return "микрограммов";
    },

    mreset() {
      this.percent = null;
      this.volume = null;
    },

    mreset2() {
      this.time = 1;
      this.volume2 = null;
    },

    mchange() {
      if (this.switch1 === false) {
        this.time = this.time / 60;
        this.min = "Часы";
      } else if (this.switch1 === true) {
        this.time = this.time * 60;
        this.min = "Минуты";
      }
    },

    messageThree() {
      if (this.switch1 === true) {
        return Math.round(((this.volume2 * 20) / this.time) * 10) / 10;
      } else {
        return Math.round(((this.volume2 * 20) / (this.time * 60)) * 10) / 10;
      }
    },

    messageFour() {
      if (this.switch1 === true) {
        return Math.round(((this.volume2 * 20) / (this.time * 60)) * 100) / 100;
      } else {
        return (
          Math.round(((this.volume2 * 20) / (this.time * 60 * 60)) * 100) / 100
        );
      }
    },

    messageFive() {
      let number3 = (this.volume2 * 20) / this.time;
      number3 = Math.abs(number3);
      number3 %= 100;
      if (number3 >= 5 && number3 <= 20) {
        return "капель";
      } else if (number3 % 10 > 1 && number3 % 10 < 5) {
        return "капли";
      } else if (number3 % 10 === 1) {
        return "капля";
      } else return "капель";
    },

    messageSix() {
      let number4 = (this.volume2 * 20) / (this.time * 60);
      number4 = Math.abs(number4);
      number4 %= 100;
      if (number4 >= 5 && number4 <= 20) {
        return "капель";
      } else if (number4 % 10 > 1 && number4 % 10 < 5) {
        return "капли";
      } else if (number4 % 10 === 1) {
        return "капля";
      } else return "капель";
    },
  },
};

Vue.createApp(Calculation).mount("#calc");
