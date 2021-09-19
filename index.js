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

var createEmployeeRecord = function(employee_info){
    //const employeeObject = new Object();
    let newObj = {
    firstName: employee_info[0],
    familyName: employee_info[1],
    title: employee_info[2],
    payPerHour: employee_info[3],
    timeInEvents: [],
    timeOutEvents: [],
    }
    return newObj
}

function createEmployeeRecords(arrays) {
    const array1 = arrays.map(createEmployeeRecord);
    return array1
}

function createTimeInEvent(timeStamp) {
    let dateSplit = timeStamp.split(' ');
    let timeDetails = new Object();
        timeDetails.type = "TimeIn";
        timeDetails.hour = parseInt(dateSplit[1]);
        timeDetails.date = dateSplit[0];
    
    this.timeInEvents.push(timeDetails)
    return this
}

function createTimeOutEvent(timeStamp) {
    let dateSplit = timeStamp.split(' ');
    let timeDetails = new Object();
        timeDetails.type = "TimeOut";
        timeDetails.hour = parseInt(dateSplit[1]);
        timeDetails.date = dateSplit[0];
    
    this.timeOutEvents.push(timeDetails)
    return this
}

function hoursWorkedOnDate(dateTime) {
    let clockIn = this.timeInEvents.find(function(d) {
       return d.date === dateTime
    })

    let clockOut = this.timeOutEvents.find(function(d) {
        return d.date === dateTime
     })
    let timeWorked = clockOut.hour - clockIn.hour;
    return timeWorked / 100;
}

function wagesEarnedOnDate(dateTime) {
    let hoursWorked = hoursWorkedOnDate.call(this, dateTime);

    return this.payPerHour * hoursWorked
}

function calculatePayroll(employeeArray) {
    let payRollTotal = employeeArray.reduce(function(accumulator, employeeObject) {
        return allWagesFor(employeeObject) + accumulator;
    }, 0);
    return payRollTotal
}

function calculatePayroll(employeeArray) {
    let payRollTotal = employeeArray.reduce(function(accumulator, employeeObject) {
        return allWagesFor.call(employeeObject) + accumulator;
    }, 0);
    return payRollTotal
}


function findEmployeeByFirstName(employeeArray, name1) {
    let nameMatch =  employeeArray.find( function(n) {
        return n.firstName === name1
    })
    return nameMatch
}