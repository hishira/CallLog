const DATEHELPER = 31 * 24 * 60 * 60 * 1000;

class GeneratorPhoneInfo {
  constructor(
    seeds = [999331, 393919, 479001599],
    modulo = [9948, 98394, 576493, 87843394, 7895049908],
    increment = [0],
    multipler = [64, 256, 512, 1024]
  ) {
    this.seeds = seeds;
    this.modulo = modulo;
    this.increment = increment;
    this.multipler = multipler;
  }

  NumberGenerator() {
    /* Create random genenarot
        @Param
        seed - array of seed
        modulo - array of modulo number
        increment - array of increment
        multipler - array of multiplers
    */
    let randomseed =
      this.seeds[parseInt(Math.random() * 1000) % this.seeds.length];
    let randommodulo =
      this.modulo[parseInt(Math.random() * 1000) % this.modulo.length];
    let randomincrement =
      this.increment[parseInt(Math.random() * 1000) % this.increment.length];
    let randommultipler =
      this.multipler[parseInt(Math.random() * 1000) % this.multipler.length];
    return function* () {
      while (true) {
        randomseed =
          (randommultipler * randomseed + randomincrement) % randommodulo;
        yield randomseed;
      }
    };
  }
  numbergenerate(){
    let generatenumber = this.NumberGenerator();
    return generatenumber().next().value
  }
  generatePhoneNumbers(numbertogenerate) {
    let firstnumbergenerator = this.NumberGenerator();
    let numbergenerator = this.NumberGenerator();
    let possiblefirstphonenumber = [5, 6, 7, 8];
    let result = [];
    for (let i = 0; i < numbertogenerate; i++) {
      let number = [
        possiblefirstphonenumber[
          firstnumbergenerator().next().value % possiblefirstphonenumber.length
        ],
      ];
      for (let i = 0; i < 8; i++) {
        number.push(numbergenerator().next().value % 10);
      }

      result.push(number);
    }
    result = result.map((a) => a.join(""));
    return result;
  }

  timeCalCulate(hh, mm, ss) {
    /*Return string time hh:mm:ss */
    return `${hh < 10 ? "0" + hh : hh}:${mm < 10 ? "0" + mm : mm}:${
      ss < 10 ? "0" + ss : ss
    }`;
  }

  generateSMSNumber() {
    let numbergenerator = this.NumberGenerator();
    return (numbergenerator().next().value % 30) + 1;
  }

  generateDate() {
    /**Generate date from last month */
    let date = new Date(Date.now() - Math.random() * DATEHELPER);
    return date.toLocaleDateString();
  }

  generateDatesFromLastMonth(numberofdate) {
    let datesfromlastmont = [];
    for (let i = 0; i < numberofdate; i++) {
      datesfromlastmont.push(this.generateDate());
    }
    return datesfromlastmont;
  }

  generateTimeLessThan60Secs(numberoftime) {
    let result = [];
    let numbergenerate = this.NumberGenerator();
    for (let i = 0; i < numberoftime; i++) {
      let ss = (numbergenerate().next().value % 50) + 10;
      result.push(this.timeCalCulate(0, 0, ss));
    }
    return result;
  }

  generateTimeLessThan25Minutes(numberoftime) {
    let result = [];
    let numbergenerate = this.NumberGenerator();
    for (let i = 0; i < numberoftime; i++) {
      let mm = (numbergenerate().next().value % 25) + 1;
      let ss = numbergenerate().next().value % 60;
      result.push(this.timeCalCulate(0, mm, ss));
    }
    return result;
  }

  generateTime(numberoftime) {
    /**Function return time in sequence hh:mm:ss */
    let result = [];
    let numbergenerate = this.NumberGenerator();
    for (let i = 0; i < numberoftime; i++) {
      let hh = numbergenerate().next().value % 50;
      let mm = numbergenerate().next().value % 60;
      let ss = numbergenerate().next().value % 60;
      let calculatedtime = this.timeCalCulate(hh, mm, ss);
      result.push(calculatedtime);
    }
    return result;
  }
}
module.exports = {
  GeneratorPhoneInfo,
};
