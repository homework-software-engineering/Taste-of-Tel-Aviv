//making a singleton for a admin user 
const UserSingleton = (function() {
    // Private variables
    let instance;

    // Private methods
    function createUserInstance() {
        // Private properties
        const username = "Admin";
        const password = "Admin";

        // Public methods
        return {
            getUsername: function() {
                return username;
            },
            getPassword: function() {
                return password;
            }
        };
    }

    return {
        // Public method to get the singleton instance
        getInstance: function() {
            if (!instance) {
                instance = createUserInstance();
            }
            return instance;
        }
    };
})();


// Function to toggle between light and dark mode for the homepage
function toggleMode() {
    var currentMode = document.getElementById("stylesheet");
    // Checking the current mode and toggling to the opposite mode
    if (currentMode.href.endsWith("homepagelight.css")) {
        currentMode.href = "homepagedark.css"; // Switching to dark mode stylesheet
    } else {
        currentMode.href = "homepagelight.css"; // Switching to light mode stylesheet
    }
}


// Class representing an item with name and price
class item{
    constructor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}
const items=[];
const item1In = new item("Bamba",4.29);
const item2In = new item("Har Bracha Tahini",14.99);
const item3In = new item("Bissli Grill",4.59);
const item4In = new item("Israeli Couscous",6.29);
const item5In = new item("Mini Croutons",11.59);
const item6In = new item("Gvina Levana",6.99);
const item7In = new item("Hashachar Chocolate Spread", 13.90);
const item8In = new item("Bazooka Bubble Gum", 13.90);
const item9In = new item("Turkish Coffee", 8.90);
const item10In = new item("Halva", 22.90);
const item11In = new item("Pesek-Zman", 7.50);
const item12In = new item("Raziel Red Blend", 49.90);
const item13In = new item("Pita", 5.90);
const item14In = new item("Challah", 4.50);
const item15In = new item("Pita with Za'atar", 3.90);
// Function to calculate total price of selected items
function calcPrice() {
    // Clearing the items array
    items.length = 0;
    // Checking which items are checked and pushing them into the items array
        item1In.quantity = parseInt(document.getElementById("item1").options[document.getElementById("item1").selectedIndex].text);
        items.push(item1In);

        item2In.quantity = parseInt(document.getElementById("item2").options[document.getElementById("item2").selectedIndex].text);
        items.push(item2In);
    
        item3In.quantity = parseInt(document.getElementById("item3").options[document.getElementById("item3").selectedIndex].text);
        items.push(item3In);
    
        item4In.quantity = parseInt(document.getElementById("item4").options[document.getElementById("item4").selectedIndex].text);
        items.push(item4In);

        item5In.quantity = parseInt(document.getElementById("item5").options[document.getElementById("item5").selectedIndex].text);
        items.push(item5In);

        item6In.quantity = parseInt(document.getElementById("item6").options[document.getElementById("item6").selectedIndex].text);
        items.push(item6In);

        item7In.quantity = parseInt(document.getElementById("item7").options[document.getElementById("item7").selectedIndex].text);
        items.push(item7In);

        item8In.quantity = parseInt(document.getElementById("item8").options[document.getElementById("item8").selectedIndex].text);
        items.push(item8In);
    
        item9In.quantity = parseInt(document.getElementById("item9").options[document.getElementById("item9").selectedIndex].text);
        items.push(item9In);

        item10In.quantity = parseInt(document.getElementById("item10").options[document.getElementById("item10").selectedIndex].text);
        items.push(item10In);

        item11In.quantity = parseInt(document.getElementById("item11").options[document.getElementById("item11").selectedIndex].text);
        items.push(item11In);

        item12In.quantity = parseInt(document.getElementById("item12").options[document.getElementById("item12").selectedIndex].text);
        items.push(item12In);
  
        item13In.quantity = parseInt(document.getElementById("item13").options[document.getElementById("item13").selectedIndex].text);
        items.push(item13In);
   
        item14In.quantity = parseInt(document.getElementById("item14").options[document.getElementById("item14").selectedIndex].text);
        items.push(item14In);
   
        item15In.quantity = parseInt(document.getElementById("item15").options[document.getElementById("item15").selectedIndex].text);
        items.push(item15In);

    let totalPrize = 0;
    totalPrize=calculateTotalPrice(items);

    // Displaying the total price
    var total = document.getElementById("total");
    if (totalPrize == 0) {
        total.innerHTML = "0$";
    } else {
        total.innerHTML = totalPrize.toFixed(2) + "$";
    }
}

//function for checking the input and saving the information
async function verifyInput(){
    var alertMsg=""; // Initialize an empty string to accumulate error messages.
    calcPrice(); // Calculate the price of selected items.

    // Get values from various input fields in the HTML document.
    const totalPrize = document.getElementById('total').innerHTML; // Get the total price of selected items.
    const name = document.getElementById('fname').value; // Get the value of the first name input field.
    const lastName = document.getElementById('lname').value; // Get the value of the last name input field.
    const number = document.getElementById('phone').value; // Get the value of the phone number input field.
    const email = document.getElementById('email').value; // Get the value of the email input field.
    const valDay = document.getElementById('day').value; // Get the selected value from the day dropdown.
    const valTime = document.getElementById('time').value; // Get the selected value from the time dropdown.

    async function verifyItem(errorMessage){
        if (totalPrize == "0$" || totalPrize == "0.00$") {
            alertMsg += errorMessage + "\n"; // Accumulate error message if no items are selected.
        }
    }
    
    async function verifyName(errorMessage){
        if (trim(name) == '') {
            alertMsg += errorMessage + "\n"; // Accumulate error message if the first name is empty.
        }
    }

    async function verifyLastName(errorMessage){
        if (trim(lastName) == '') {
            alertMsg += errorMessage + "\n"; // Accumulate error message if the last name is empty.
        }
    }

    async function verifyNumber(errorMessage){
        if (!trimPhone(number)) {
            alertMsg += errorMessage + "\n"; // Accumulate error message if the phone number is invalid.
        }
    }

    async function verifyEmail(errorMessage){
        if (!validEmail(email)) {
            alertMsg += errorMessage + "\n"; // Accumulate error message if the email is invalid.
        }
    }

    async function verifyDay(errorMessage){ 
        if (valDay == "chooseDay") {
            alertMsg += errorMessage + "\n"; // Accumulate error message if no day is selected.
        }
    }

    async function verifyTime(errorMessage){ 
        if (valTime == "chooseTime") {
            alertMsg += errorMessage + "\n"; // Accumulate error message if no time is selected.
        }
    }

    // Call all verification functions asynchronously using Promise.all.
    await Promise.all([
        verifyItem("Please select items"), // Verify if items are selected.
        verifyName("Please enter a right first name"), // Verify the first name.
        verifyLastName("Please enter a right last name"), // Verify the last name.
        verifyNumber("Please enter a right phone number"), // Verify the phone number.
        verifyEmail("Please enter a right Email"), // Verify the email address.
        verifyDay("Please select a day"), // Verify if a day is selected.
        verifyTime("Please select a time"), // Verify if a time is selected.
    ]);
    
    // If any error message is accumulated in alertMsg, display an alert with the accumulated messages.
    if (alertMsg != "") {
        alert(alertMsg);
    }
    else {
        // If all fields are valid, construct a summary of the order.
        const valMessage = document.getElementById('message').value; // Get the value of the message input field.
        var textPrint = '';
        textPrint += 'Phone: ' + number + '</br>' + 'Name: ' + name + ' ' + lastName + '</br>' + 'Email: ' + email + '</br>';
        textPrint += ' chosen day: ' + valDay + ',   ' + 'Hour: ' + valTime + '</br>';
        if(valMessage == 'insert your message'){
            textPrint += ' No message ' + '</br>' + ' Your total price: ' + totalPrize;
        }
        else{
            textPrint += ' Your message is: ' + valMessage + '</br>' + ' Your total price: ' + totalPrize;
        }
        textPrint += '</br> </br>';

        // Display the order summary in the HTML document.
        document.getElementById('showOrder').innerHTML = textPrint;

        // Process the order information (e.g., send it to a server).
        processInfo(name, lastName, number, email, valDay, valTime, valMessage, totalPrize);
    }
}

// Function to calculate total price of selected items
function calculateTotalPrice(items) {
    let price = 0;
    for (let i = 0; i < 15; i++) {
        price += items[i % items.length].price * items[i % items.length].quantity;
    }
    return price;
}


// Function to trim whitespace from a string
function trim(str) {
    return str.replace(/^\s+|\s+$/g, '');
}


// Function to validate phone number format
function trimPhone(phone) {
    var phonePa = /^\d{10}$/;
    return phonePa.test(phone);
}

// Function to validate email
function validEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}


// Function to clean the form fields
function cleanForm() {
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('message').value = 'insert your message';
    document.getElementById('email').value = '';
    document.getElementById('showOrder').innerHTML = '';
    document.getElementById('total').innerHTML = '0$';
    var selectIt = document.getElementById('day');
    selectIt.selectedIndex = 0;

    selectIt = document.getElementById('time');
    selectIt.selectedIndex = 0;

    selectIt = document.getElementById('item1');
    selectIt.selectedIndex = 0;
 
    selectIt = document.getElementById('item2');
    selectIt.selectedIndex = 0;

    selectIt = document.getElementById('item3');
    selectIt.selectedIndex = 0;

    selectIt = document.getElementById('item4');
    selectIt.selectedIndex = 0;

    selectIt = document.getElementById('item5');
    selectIt.selectedIndex = 0;

    selectIt = document.getElementById('item6');
    selectIt.selectedIndex = 0;

    selectIt = document.getElementById('item6');
    selectIt.selectedIndex = 0;

    selectIt = document.getElementById('item7');
    selectIt.selectedIndex = 0;

    selectIt = document.getElementById('item8');
    selectIt.selectedIndex = 0;

    selectIt = document.getElementById('item9');
    selectIt.selectedIndex = 0;

    selectIt = document.getElementById('item10');
    selectIt.selectedIndex = 0;

    selectIt = document.getElementById('item11');
    selectIt.selectedIndex = 0;

    selectIt = document.getElementById('item12');
    selectIt.selectedIndex = 0;

    selectIt = document.getElementById('item13');
    selectIt.selectedIndex = 0;

    selectIt = document.getElementById('item14');
    selectIt.selectedIndex = 0;

    selectIt = document.getElementById('item15');
    selectIt.selectedIndex = 0;


}

// Function to display orders in Admin mode
function ShowOrders() {
    var orders = ShowOrdersDB();
    var textPrint = '';
    // Generating text for each order
    for (var i = 0; i < orders.length; i++) {
        var order = orders[i];
        textPrint += 'Phone: ' + order[0] + '</br>' + 'Name: ' + order[1] + ' ' + order[2] + '</br>' + 'Email: ' + order[3] + '</br>';
        textPrint += ' chosen day: ' + order[4] + ',   ' + 'Hour: ' + order[5] + '</br>';
        if(order[6] == 'insert your message'){
            textPrint += ' No message ' + '</br>' + ' His total price: ' + order[7];
        }
        else{
        textPrint += ' His message is: ' + order[6] + '</br>' + ' His total price: ' + order[7];
        }
        textPrint += '</br> </br>';
    }
    // Displaying the orders
    document.getElementById('res').innerHTML = textPrint;
}

function admiPage(){
    var pageUrl = "Admi.html";
    window.location.href = pageUrl;
}


// function to verify admin login
function checkLogin() {
    // making a admin user
    const admin = UserSingleton.getInstance();
    //checks what the user inputted
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === admin.getUsername() && password === admin.getPassword()) {
        
        //hides the form page
        var displayChangeform = document.getElementById("loginForm");
        displayChangeform.style.display = "none"; 

        //shows the admin screen
        var adminScreenElement = document.querySelector('.wrapper .adminScreen');
        adminScreenElement.style.display = 'block';
    } else {
        //prints an alert
        alert("Incorrect username or password. only try to log in if you have admin access."); 
    }
}

// function to log out (goes back to homepage)
function logOut(){
    //goes back to homepage
    window.history.back();
}

function RemoveOrder(){
    var number = document.getElementById('PhoneNumber').value;
    RemoveOrderDB(number);
}