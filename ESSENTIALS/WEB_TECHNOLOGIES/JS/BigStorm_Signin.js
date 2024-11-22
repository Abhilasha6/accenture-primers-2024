function signIn() {
    // Get name and password elements
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;

    // Get the demo div for displaying messages
    var demoDiv = document.getElementById("demo");

    // Validate password
    if (passwordValidate(password)) {
        // If password is valid, show success message
        demoDiv.innerHTML = "Sign In successful!!! Welcome " + name + " Learn More with BigStorm";
    } else {
        // If password is invalid, show error message
        demoDiv.innerHTML = "Please enter a valid password (password should be of minimum 8 characters having at least 1 small letter(a-z),1 capital letter(A-Z), 1 digit(0-9), 1 special character)";
    }
}

function passwordValidate(password) {
    // Check if password is at least 8 characters long
    if (password.length < 8) {
        return false;
    }

    // Regular expressions to check for different password requirements
    var hasLowerCase = /[a-z]/.test(password);
    var hasUpperCase = /[A-Z]/.test(password);
    var hasDigit = /[0-9]/.test(password);
    var hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

    // Return true only if all conditions are met
    return hasLowerCase && hasUpperCase && hasDigit && hasSpecialChar;
}