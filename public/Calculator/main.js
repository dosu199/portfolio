
function sin(angle) {
    let result = Math.sin(eval(angle));
    return result;
}
function cos(angle) {
    let result = Math.cos(eval(angle));
    return result;
}
function sqrt(input) {
    let result = Math.sqrt(input);
    return result;
}

window.onload = () => {

    let buttons = document.getElementsByClassName("btn");
    let equals = document.getElementById("equals-btn");
    let display = document.getElementById("display");
    let clear = document.getElementById("clear");
    let clearOneVal = document.getElementById("clear-one-val");

    let input;
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", (e) => {
            display.innerHTML += e.target.value;
            input = display.innerHTML;
        });
    };

    equals.addEventListener("click", (e) => {
        try {
            let result = eval(input);
            display.innerHTML = result;
        }
        catch (err) {
            display.innerHTML = "";
        }
    });

    clearOneVal.addEventListener("click", (e) => {
        let inputs = display.innerHTML;
        let clearedInputs = inputs.slice(0, inputs.length - 1);
        display.innerHTML = clearedInputs;
    });

    clear.addEventListener("click", (e) => {
        display.innerHTML = "";
    });
};
