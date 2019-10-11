/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(employeeArray) {
  return {
    firstName: employeeArray[0],
    familyName: employeeArray[1],
    title: employeeArray[2],
    payPerHour: employeeArray[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

function createEmployeeRecords(recordsArray) {
  return recordsArray.map(employeeArray => createEmployeeRecord(employeeArray))
}

function createTimeInEvent(dateStamp) {
  let date = dateStamp.split(' ');
  this.timeInEvents.push({
    type: 'TimeIn',
    hour: parseInt(date[1]),
    date: date[0]
  });
  return this;
}

function createTimeOutEvent(dateStamp) {
  let date = dateStamp.split(' ');
  this.timeOutEvents.push({
    type: 'TimeOut',
    hour: parseInt(date[1]),
    date: date[0]
  });
  return empRecord;
}

function hoursWorkedOnDate(empRecord, date) {
  let timeIn = empRecord.timeInEvents.find(timeEvent => timeEvent.date === date);
  let timeOut = empRecord.timeOutEvents.find(timeEvent => timeEvent.date === date);
  return (timeOut.hour - timeIn.hour)/100;
}

function wagesEarnedOnDate(empRecord, date) {
  const hoursWorked = hoursWorkedOnDate(empRecord, date);
  return hoursWorked * empRecord.payPerHour;
}

function allWagesFor(empRecord) {
  let dates = empRecord.timeInEvents.map(time => time.date);
  return dates.reduce((total, date) => total + wagesEarnedOnDate(empRecord, date), 0);
}

function findEmployeeByFirstName(srcArray, firstName) {
  return srcArray.find(empRecord => empRecord.firstName === firstName);
}

function calculatePayroll (srcArray) {
  return srcArray.reduce((total, empRecord) => total + allWagesFor(empRecord), 0);
}
