const { GeneratorPhoneInfo } = require("../utils/generate");
const {
  IncomingCall,
  OutGoingCall,
  DataUsage,
  LimitToUse,
  SMSFrom,
  SMSTo,
} = require("./CallType");
const INCOMECALLS = 20;
const HALFINCOMECALL = 10;
const OUTCOMECALLS = 16;
const HALFOUTCOMECALL = 8;
const POSIBLEUNIT = ["kB", "MB", "GB"];

class PhoneBilling {
  /*
        @Params
        ownernumber - owner number
        incomecall - array of incomming call
        outgoingcall - array of outgoing call
        smsfrom - sms from somebody
        smsto - sms to somebody
        datausage - Date used by user in kb,mb or GB
        limit - User limit on data

    */
  constructor(
    ownernumber,
    incomecall,
    outgoingcall,
    smsfrom,
    smsto,
    datausage
  ) {
    this.ownernumber = ownernumber;
    this.incomecall = incomecall;
    this.outgoingcall = outgoingcall;
    this.smsfrom = smsfrom;
    this.smsto = smsto;
    this.datausage = datausage;
  }

  static generateIncomeCall(generator) {
    // Income calls
    let incomenumbers = generator.generatePhoneNumbers(INCOMECALLS);
    let incomedates = generator.generateDatesFromLastMonth(INCOMECALLS);
    let incomecalllength = [
      ...generator.generateTimeLessThan25Minutes(HALFINCOMECALL),
      ...generator.generateTimeLessThan60Secs(HALFINCOMECALL),
    ];
    let incommingcalls = [];
    for (let i = 0; i < INCOMECALLS; i++) {
      incommingcalls.push(
        new IncomingCall(incomenumbers[i], incomecalllength[i], incomedates[i])
      );
    }
    return incommingcalls;
  }

  static generateOutComeCall(generator) {
    // Outcome calls
    let outcomenumbers = generator.generatePhoneNumbers(OUTCOMECALLS);
    let outcomedate = generator.generateDatesFromLastMonth(OUTCOMECALLS);
    let outcomecalllength = [
      ...generator.generateTimeLessThan25Minutes(HALFOUTCOMECALL),
      ...generator.generateTimeLessThan60Secs(HALFOUTCOMECALL),
    ];
    let outcomingcalls = [];
    for (let i = 0; i < OUTCOMECALLS; i++) {
      outcomingcalls.push(
        new OutGoingCall(
          outcomenumbers[i],
          outcomecalllength[i],
          outcomedate[i]
        )
      );
    }
    return outcomingcalls;
  }

  static generateSMS(generator, incommingcalls, outcomingcalls, fromorto) {
    /*For sms we take some number from incoming and outcome and some random*/
    let smsnumbers = [
      ...incommingcalls.slice(0, 2).map((call) => call.numberwhichcall),
      ...outcomingcalls.slice(0, 2).map((call) => call.numbertocall),
      ...generator.generatePhoneNumbers(3),
    ];
    let smsdates = generator.generateDatesFromLastMonth(smsnumbers.length);
    let smss = [];
    for (let i = 0; i < smsnumbers.length; i++) {
      smss.push(
        fromorto === "F"
          ? new SMSFrom(smsnumbers[i], smsdates[i])
          : new SMSTo(smsnumbers[i], smsdates[i])
      );
    }
    return smss;
  }

  static generateDataLimit(generator) {
    let limitunit =
      POSIBLEUNIT[generator.numbergenerate() % POSIBLEUNIT.length];
    let limitusage =
      limitunit === "MB" || limitunit === "kB"
        ? generator.numbergenerate() % 1000
        : parseFloat(
            `${generator.numbergenerate() % 10}.${
              generator.numbergenerate() % 100
            }`
          );
    return new LimitToUse(limitusage, limitunit);
  }

  static generateUsageData(generator, limit) {
    let unit = POSIBLEUNIT[generator.numbergenerate() % POSIBLEUNIT.length];
    let datausage =
      unit === "MB" || unit === "kB"
        ? generator.numbergenerate() % 1000
        : parseFloat(
            `${generator.numbergenerate() % 10}.${
              generator.numbergenerate() % 100
            }`
          );
    return new DataUsage(datausage, limit, unit);
  }

  static GeneratePhoneBilling() {
    let generator = new GeneratorPhoneInfo();
    let ownernumber = generator.generatePhoneNumbers(1)[0];
    // Data usage info;

    let incommingcalls = PhoneBilling.generateIncomeCall(generator);
    let outcomingcalls = PhoneBilling.generateOutComeCall(generator);
    let smssfrom = PhoneBilling.generateSMS(
      generator,
      incommingcalls,
      outcomingcalls,
      "F",
    );
    let smssto = PhoneBilling.generateSMS(
      generator,
      incommingcalls,
      outcomingcalls,
      "T"
    );
    let limit = PhoneBilling.generateDataLimit(generator);
    let usagedata = PhoneBilling.generateUsageData(generator, limit);
    return new PhoneBilling(
      ownernumber,
      incommingcalls,
      outcomingcalls,
      smssfrom,
      smssto,
      usagedata
    );
  }
}

module.exports = PhoneBilling;
