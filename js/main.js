const Calculation = {
  data() {
    return {
      percent: null,
      volume: null,
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
      } else return "микрограммов";
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
  },
};

Vue.createApp(Calculation).mount("#calc");
