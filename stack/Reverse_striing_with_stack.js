let stack = [];
let currentSize = stack.length;
let removeValue;

function reverseStr() {
    let str = document.getElementById("inputValue").value;

    if(str.length > 0) {
        str = str.split("");
        for(let i = 0; i < str.length; i++) {
            push(str[i]);
        }
        for(let i = 0; i < str.length; i++) {
            str[i] = pop();
        }
        str = str.join("");
        console.log(str);
    } else {
        alert("Enter Value");
    }
    document.getElementById("inputValue").value = "";
}

function push(value) {
    stack[currentSize] = value;
    currentSize++;
}

function pop() {
    removeValue = stack[currentSize-1];
    currentSize--;
    stack.length = currentSize;
    return removeValue;
}