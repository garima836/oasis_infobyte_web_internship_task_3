let expression = "";
let lastAnswer = 0;

const expressionDisplay = document.getElementById("expression");
const resultDisplay = document.getElementById("result");

document.querySelectorAll(".buttons button").forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "clear") {
      expression = "";
      resultDisplay.textContent = "";
    } 
    else if (value === "del") {
      expression = expression.slice(0, -1);
    } 
    else if (value === "ans") {
      expression += lastAnswer;
    } 
    else if (value === "√") {
      expression += "Math.sqrt(";
    } 
    else if (value === "±") {
      if (expression) {
        expression = `-(${expression})`;
      }
    } 
    else if (value === "ENTER") {
      try {
        const safeExpression = expression.replace(/%/g, "/100");
        let result = eval(safeExpression);
        lastAnswer = result;
        resultDisplay.textContent = result;
      } catch {
        resultDisplay.textContent = "Error";
      }
    } 
    else {
      if (expression === "0") expression = "";
      expression += value;
    }

    expressionDisplay.textContent = expression || "0";
  });
});
