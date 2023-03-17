let stack = [];
let currentSize = stack.length;
let maxSize = 5;

function push() {
    let inputValue = document.getElementById("inputValue").value;
    if(currentSize >= maxSize) {
        alert("Stack is full, you can not add "+inputValue);
    } else {
        stack[currentSize] = inputValue;
        currentSize++;
        console.log(inputValue+" Element Added");
        document.getElementById("inputValue").value = "";
    }
}

function pop() {
    if(currentSize > 0) {
        currentSize--;
        stack.length = currentSize;
    } else {
        alert("Stack is empty");
    }
}

function display() {
    if(currentSize > 0) {
        console.log("Value of stack is "+stack);
        console.log("currentSize of stack is "+currentSize);
    } else {
        console.log("Stack is empty");
        console.log("currentSize of stack is "+currentSize);
    }
}