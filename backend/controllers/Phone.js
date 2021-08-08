const {GeneratePhoneBilling} = require("../models/PhoneBilling");
class Phone {
  static async GetRandomData(req, res, next) {
    try {
      let billings = GeneratePhoneBilling();
      return res.status(200).json(billings)
    } catch (e) {
      console.log(e);
      return res.status(505).send({ message: "Server problem" });
    }
  }
}
module.exports = Phone;
