function displayConfirmationMessage() {
    // Fetch name from input field
    var name = document.getElementById("name").value;

    // Fetch selected timing from radio buttons
    var timingElements = document.getElementsByName("timing");
    var selectedTiming = "";

    // Find the checked radio button
    for (var i = 0; i < timingElements.length; i++) {
        if (timingElements[i].checked) {
            selectedTiming = timingElements[i].value;
            break;
        }
    }

    // Display confirmation message in the result div
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Hi " + name + " your table has been booked between " + selectedTiming;
}