function checkUglyNumber(num) {
    // If number is 1, it's considered an ugly number
    if (num === 1) {
        return true;
    }
    
    // Check divisibility by 2, 3, and 5
    var factors = [2, 3, 5];
    
    // Divide by each factor as many times as possible
    for (var i = 0; i < factors.length; i++) {
        while (num % factors[i] === 0) {
            num /= factors[i];
        }
    }
    
    // If the number reduces to 1, it's an ugly number
    return num === 1;
}

function display() {
    // Get the input number
    var number = document.getElementById("ugly").value;
    
    // Check if input is specified
    if (number === "") {
        alert("Please, specify an input");
        return;
    }
    
    // Convert to number
    number = parseInt(number);
    
    // Check if number is positive
    if (number <= 0) {
        alert("Invalid Input");
        return;
    }
    
    // Check if it's an ugly number
    if (checkUglyNumber(number)) {
        alert(number + " is an ugly number");
    } else {
        alert(number + " is not an ugly number");
    }
}