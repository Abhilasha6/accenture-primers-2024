function displayFeedbackMessage() {
    // Fetch name and range values
    var name = document.getElementById("name").value;
    var range = parseInt(document.getElementById("rate").value);

    // Get the result div
    var resultDiv = document.getElementById("result");

    // Check range and set appropriate message
    if (range >= 1 && range <= 5) {
        resultDiv.innerHTML = "Hi " + name + "Thank you for your valuable feedback. Sorry for the inconvenience. You will be contacted by our customer care officer soon";
    } else if (range > 5 && range <= 8) {
        resultDiv.innerHTML = "Hi " + name + "Thank you for your valuable feedback. You can post your complaints on customercare@gmail.com";
    } else if (range > 8) {
        resultDiv.innerHTML = "Hi " + name + "Thank you for your valuable feedback. Happy customers are our only asset";
    }
}