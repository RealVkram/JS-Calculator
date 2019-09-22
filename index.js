const calculator = (first, second) => {
        let sum = first + second
        let subtract = first - second
        let multiply = first * second
        let division = first / second

    if (!Number.isNaN(first) && !Number.isNaN(second)) {
        switch (operator) {
            case "+":
            alert(sum)
            break
            case "-":
            alert(subtract)
            break
            case "*":
            alert(multiply)
            break
            case "/":
            alert(division)
            break
            default:
            alert("enter a valid math operator")		
        }
    } else {
        alert("enter number digit(s) only")
        }
}
let firstNumber = +(prompt("enter first number"));
let operator = prompt("enter a math operator like +, /, *. -")
let secondNumber = +(prompt("enter second number"))
calculator(firstNumber, secondNumber);