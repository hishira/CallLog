class OutGoingCall {
  constructor(numbertocall, time, date) {
    this.numbertocall = numbertocall;
    this.time = time;
    this.date = date;
  }
}

class IncomingCall {
  constructor(numberwhichcall, time, date) {
    this.numberwhichcall = numberwhichcall;
    this.time = time;
    this.date = date;
  }
}

class SMSTo {
  constructor(to, date) {
    this.to = to;
    this.date = date;
  }
}
class SMSFrom {
    constructor(from,date){
        this.from = from;
        this.date = date;
    }
}
class LimitToUse {
  constructor(datatuuse, unit) {
    this.datatuuse = datatuuse;
    this.unit = unit;
  }
}

class DataUsage {
  unitcheck(unit, limit) {
    return (
      (unit === "GB" && limit.unit === "kB") ||
      (unit === "GB" && limit.unit === "MB") ||
      (unit === "MB" && limit.unit === "kB")
    );
  }

  checkifabuse(data, unit, limit) {
    let abuse = false;
    if (this.unitcheck(unit, limit)) abuse = true;
    else if (unit === limit.unit && data > limit.datatuuse) abuse = true;
    return abuse;
  }

  constructor(useddata, limit, unit) {
    this.useddata = useddata;
    this.limit = limit;
    this.unit = unit;
    this.limitabuse = this.checkifabuse(useddata, unit, limit);
  }
}

module.exports = {
  OutGoingCall,
  IncomingCall,
  SMSFrom,
  SMSTo,
  LimitToUse,
  DataUsage,
};
