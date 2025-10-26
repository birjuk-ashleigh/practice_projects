// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    const validExpression = /^[0-9+\-*/.\s()]+$/;
    if (!validExpression.test(display.value)) {
      throw new Error("Invalid characters");
    }

    const result = new Function("return " + display.value)(); // Added space after 'return'

    if (!isFinite(result)) {
      throw new Error("Invalid calculation");
    }

    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}
