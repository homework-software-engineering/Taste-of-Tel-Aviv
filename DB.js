// Function to process and store user information into localStorage
function processInfo(name, lastName, phone, email, day, time, message, totalPrize) {
    // Creating a string representation of the order information
    var dbString = stringify(name, lastName, phone, email, day, time, message, totalPrize);
    // Storing the order information in localStorage with the phone number as the key
    localStorage.setItem(phone, dbString);
}


// Function to create a string representation of the order information
function stringify(name, lastName, phone, email, day, time, message, totalPrize) {
    var nameStr = 'name: ' + name;
    var lastNameStr = 'last Name: ' + lastName;
    var emailstr = 'Email: ' + email;
    var dayStr = 'day: ' + day;
    var timeStr = 'time: ' + time;
    var messageStr = 'message: ' + message;
    var totalPrizeStr = 'total Prize: ' + totalPrize;
    // Constructing the string with order information
    var dbStr = '{' + nameStr + ',' + lastNameStr + ',' + emailstr + ',' + dayStr + ',' + timeStr + ',' + messageStr + ',' + totalPrizeStr + '}';
    return dbStr;
}


// Function to retrieve orders from localStorage
function ShowOrdersDB() {
    var orders = [];
    // Iterating through localStorage items
    for (var i = 0; i < localStorage.length; i++) {
        var orderPhone = localStorage.key(i); // Getting phone number
        var orderInfo = localStorage.getItem(orderPhone); // Getting order information string
        var tmpOrder = [];
        // Parsing order information string and populating temporary order array
        tmpOrder[0] = orderPhone;
        tmpOrder[1] = getName(orderInfo);
        tmpOrder[2] = getLastName(orderInfo);
        tmpOrder[3] = getEmail(orderInfo);
        tmpOrder[4] = getDay(orderInfo);
        tmpOrder[5] = getTime(orderInfo);
        tmpOrder[6] = getMessage(orderInfo);
        tmpOrder[7] = getTotalPrize(orderInfo);
        orders[i] = tmpOrder; // Adding temporary order array to orders array
    }
    return orders;
}



// Function to extract name from order information
function getName(orderInfo) {
    var nameIndex = orderInfo.indexOf('name:') + 6;
    var endNameIndex = orderInfo.indexOf('last Name:') - 1;
    return orderInfo.substring(nameIndex, endNameIndex);
}


// Function to extract last name from order information
function getLastName(orderInfo) {
    var lastNameIndex = orderInfo.indexOf('last Name:') + 11;
    var endLastNameIndex = orderInfo.indexOf('Email:') - 1;
    return orderInfo.substring(lastNameIndex, endLastNameIndex);
}


// Function to extract last name from order information
function getEmail(orderInfo) {
    var EmailIndex = orderInfo.indexOf('Email:') + 7;
    var endEmailIndex = orderInfo.indexOf('day:') - 1;
    return orderInfo.substring(EmailIndex, endEmailIndex);
}


// Function to extract day from order information
function getDay(orderInfo) {
    var dayIndex = orderInfo.indexOf('day:') + 5;
    var endDayIndex = orderInfo.indexOf('time:') - 1;
    return orderInfo.substring(dayIndex, endDayIndex);
}


// Function to extract time from order information
function getTime(orderInfo) {
    var timeIndex = orderInfo.indexOf('time:') + 6;
    var endTimeIndex = orderInfo.indexOf('message:') - 1;
    return orderInfo.substring(timeIndex, endTimeIndex);
}


// Function to extract message from order information
function getMessage(orderInfo) {
    var messageIndex = orderInfo.indexOf('message:') + 9;
    var endMessageIndex = orderInfo.indexOf('total Prize:') - 1;
    return orderInfo.substring(messageIndex, endMessageIndex);
}


// Function to extract total prize from order information
function getTotalPrize(orderInfo) {
    var prizeIndex = orderInfo.indexOf('total Prize:') + 13;
    var endPrizeIndex = orderInfo.indexOf('}');
    return orderInfo.substring(prizeIndex, endPrizeIndex);
}

function RemoveOrderDB(number){
    localStorage.removeItem(number);
}
