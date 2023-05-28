let first = '';
let second = '';
let operator = '';
let finish = false;

const numberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const operatorAll = ["/", "-", "+", "X"];

const inputCalc = document.querySelector(".calc_input p");

document.querySelector(".calc_btns").addEventListener("click", (event) => {
    if (!event.target.classList.contains("btn")) return;
    if (event.target.classList.contains("ac")) {
        first = '';
        second = '';
        operator = '';
        finish = false;
        inputCalc.textContent = 0;
        return;
    };

    inputCalc.textContent = "";
    const btnText = event.target.textContent;
    if (numberArr.includes(btnText)) {
        if (second === "" && operator === "") {
            first += btnText;
            inputCalc.textContent = first;
        } else if (first !== "" && second !== "" && finish) {
            second = btnText;
            finish = false;
            inputCalc.textContent = second;
        } else {
            second += btnText;
            inputCalc.textContent = second;
        }
        return;
    }
    if (operatorAll.includes(btnText)) {
        operator = btnText;
        inputCalc.textContent = operator;
        return
    }
    if (btnText === "=") {
        if (first === "" && second === "") {
            inputCalc.textContent = 0;
            return;
        }
        if (second === "") second = first;
        switch (operator) {
            case "+": first = (+first) + (+second);
                break;
            case "-": first = first - second;
                break;
            case "X": first = first * second;
                break;
            case "/": if (second === "0") {
                inputCalc.textContent = "Ошибка!";
                first = "";
                second = "";
                operator = "";
                return;
            }
                first = first / second;
                break;
        }
        finish = true;
        inputCalc.textContent = first;
    }
})