function calculateStrikeRate() {
    // Fetch player name, runs scored, and balls faced
    var playerName = document.getElementById("playerName").value;
    var runsScored = parseFloat(document.getElementById("runsScored").value);
    var ballsFaced = parseFloat(document.getElementById("ballsFaced").value);

    // Calculate strike rate
    var strikeRate = (runsScored / ballsFaced) * 100;

    // Get the result div
    var resultDiv = document.getElementById("result");

    // Display the output with formatted strike rate (two decimal places)
    resultDiv.innerHTML = "Name : " + playerName + "<br>" +
                          "Runs Scored : " + runsScored + "<br>" +
                          "Balls Faced : " + ballsFaced + "<br>" +
                          "Strike Rate : " + strikeRate.toFixed(2);
}