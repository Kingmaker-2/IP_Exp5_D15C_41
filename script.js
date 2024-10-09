// Function to perform the calculation using promises
function calculate(num1, num2, operation) {
  return new Promise((resolve, reject) => {
    if (operation === "+") {
      resolve(num1 + num2);
    } else if (operation === "-") {
      resolve(num1 - num2);
    } else if (operation === "*") {
      resolve(num1 * num2);
    } else if (operation === "/") {
      if (num2 === 0) {
        reject("Error: Cannot divide by zero");
      } else {
        resolve(num1 / num2);
      }
    } else {
      reject("Error: Invalid operation");
    }
  });
}

// Variables to hold the selected operation
let selectedOperation = "";

// Function to handle button clicks
function handleCalculation() {
  const num1 = parseFloat(document.getElementById("number1").value);
  const num2 = parseFloat(document.getElementById("number2").value);
  const resultOutput = document.getElementById("result-output");
  const errorMessage = document.getElementById("error-message");

  // Reset previous results and errors
  resultOutput.innerHTML = "";
  errorMessage.innerHTML = "";

  if (!selectedOperation) {
    errorMessage.innerHTML = "Please select an operation!";
    return;
  }

  if (isNaN(num1) || isNaN(num2)) {
    errorMessage.innerHTML = "Please enter valid numbers!";
    return;
  }

  calculate(num1, num2, selectedOperation)
    .then((result) => {
      resultOutput.innerHTML = result;
    })
    .catch((error) => {
      errorMessage.innerHTML = error;
    });
}

// Event listeners for operator buttons
document
  .getElementById("add")
  .addEventListener("click", () => (selectedOperation = "+"));
document
  .getElementById("subtract")
  .addEventListener("click", () => (selectedOperation = "-"));
document
  .getElementById("multiply")
  .addEventListener("click", () => (selectedOperation = "*"));
document
  .getElementById("divide")
  .addEventListener("click", () => (selectedOperation = "/"));

// Event listener for result button
document
  .getElementById("checkResult")
  .addEventListener("click", handleCalculation);

// Clear the input fields
document.getElementById("clear").addEventListener("click", () => {
  document.getElementById("number1").value = "";
  document.getElementById("number2").value = "";
  document.getElementById("result-output").innerHTML = "";
  document.getElementById("error-message").innerHTML = "";
  selectedOperation = ""; // Reset the operation
});
