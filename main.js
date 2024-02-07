// Function to add value to the display
function addToDisplay(value) {
    if (value === "leftParenthesis") {
        value = "(";
    }
    if (value === "rightParenthesis") {
        value = ")";
    }

    document.getElementById("display").value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById("display").value = '';
    document.getElementById("displayResult").value = '';
}

// Function to calculate the result
function calculate() {
    // Check if the value contains '^'
    if (document.getElementById("display").value.includes('^')) {
        // Replace '^' with '**'
        document.getElementById("display").value =
            document.getElementById("display").value.replace(/\^/g, '**');
    }

    try {
        document.getElementById("displayResult").value =
            eval(document.getElementById("display").value);
    }
    catch (error) {
        document.getElementById("displayResult").value = 'Error';
    }
}

// Function to delete the last character from the display
function deleteDisplay() {
    document.getElementById("display").value =
        document.getElementById("display").value.slice(0, -1);
}

// დავალება
// Function to calculate the inverse of the value
function calculateInv() {
    // Get the value from the display element
    var inputValue = parseFloat(document.getElementById("display").value);

    // Check if the input is not zero
    if (inputValue !== 0) {
        // Calculate the inverse
        var result = 1 / inputValue;

        // Update the display with the result
        document.getElementById("displayResult").value = result;
    } else {
        // Display an error for division by zero
        document.getElementById("displayResult").value = 'Error: Division by zero';
    }
}

// Variable to track the current mode (default is 'radians')
var currentMode = 'radians';
// Function to switch between radians and degrees
function calculateRad() {
    // Get the value from the display element
    var inputValue = parseFloat(document.getElementById("display").value);

    // Check if the input is a valid number
    if (!isNaN(inputValue)) {
        // Convert the input based on the current mode
        if (currentMode === 'radians') {
            // Switching from radians to degrees
            inputValue = (inputValue * 180) / Math.PI;
            currentMode = 'degrees';
        } else {
            // Switching from degrees to radians
            inputValue = (inputValue * Math.PI) / 180;
            currentMode = 'radians';
        }

        // Update the display with the converted value
        document.getElementById("displayResult").value = inputValue;
    } else {
        // Display an error for invalid input
        document.getElementById("displayResult").value = 'Error';
    }
}

// Function to calculate sine
function calculateSin() {
    var value = document.getElementById("display").value;
    var result = Math.sin(parseFloat(value));
    document.getElementById("displayResult").value = result;
}

// Function to calculate cosine
function calculateCos() {
    var value = document.getElementById("display").value;
    var result = Math.cos(parseFloat(value));
    document.getElementById("displayResult").value = result;
}

// Function to calculate tangent
function calculateTan() {
    var value = document.getElementById("display").value;
    var result = Math.tan(parseFloat(value));
    document.getElementById("displayResult").value = result;
}

// Function to calculate natural logarithm
function calculateLn() {
    calculateLog();
}

// Function to calculate logarithm
function calculateLog() {
    // Get the value from the display element
    var inputValue = document.getElementById("display").value;

    // Check if the provided value is 'pi' or 'e'
    if (inputValue === 'Math.PI') {
        inputValue = Math.PI;
    } else if (inputValue === 'Math.E') {
        inputValue = Math.E;
    } else {
        // If not 'pi' or 'e', assume it's a user-provided number
        inputValue = parseFloat(inputValue);
}

  // Check if the input is a positive number
  if (!isNaN(inputValue) && inputValue > 0) {
      // Calculate the natural logarithm (base e)
      var result = Math.log(inputValue);

      // Update the display with the result
      document.getElementById("displayResult").value = result;
  } else {
      // Display an error for invalid input
      document.getElementById("displayResult").value = 'Error';
  }
}

// Function to calculate factorial
function calculateFact() {
    // Get the value from the display element
    var inputValue = parseFloat(document.getElementById("display").value);

    // Check if the input is a non-negative integer
    if (Number.isInteger(inputValue) && inputValue >= 0) {
        var result = 1;

        // Calculate factorial using a loop
        for (var i = 2; i <= inputValue; i++) {
            result *= i;
        }

        // Update the display with the result
        document.getElementById("displayResult").value = result;
    } else {
        // Display an error for invalid input
        document.getElementById("displayResult").value = 'Error';
    }
}

// Function to calculate square root
function calculateSqrt() {
    var value = document.getElementById("display").value;
    var result = Math.sqrt(parseFloat(value));
    document.getElementById("displayResult").value = result;
}