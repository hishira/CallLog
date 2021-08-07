const { GeneratorPhoneInfo } = require("../utils/generate");
const {GeneratePhoneBilling} = require("../models/PhoneBilling");
class Phone {
  static async GetRandomData(req, res, next) {
    try {
        /*
      let generate = new GeneratorPhoneInfo();
      let phones = generate.generatePhoneNumbers(10);
      let times = generate.generateTime(10);
      let lessthanseconds = generate.generateTimeLessThan60Secs(10);
      let lessthanminute = generate.generateTimeLessThan25Minutes(10);
      return res.status(200).json({
        phones: phones,
        times: times,
        sec: lessthanseconds,
        min: lessthanminute,
        dates: generate.generateDatesFromLastMonth(10),
        number: generate.numbergenerate()
      });
      */
      let phone = GeneratePhoneBilling();
      return res.status(200).json(phone)
    } catch (e) {
      console.log(e);
      return res.status(505).send({ message: "Server problem" });
    }
  }
}
module.exports = Phone;
