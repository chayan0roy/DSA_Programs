let stack = [];
let currentSize = stack.length;
let maxSize = 5;

function push(newValue) {
    if(currentSize >= maxSize) {
        alert("Stack is full, you can not add "+newValue);
    } else {
        stack[currentSize] = newValue;
        currentSize++;
        console.log(stack);
    }
}

function pop() {
    if(currentSize > 0) {
        currentSize--;
        stack.length = currentSize;
        console.log(stack);
    } else {
        alert("Stack is empty");
    }
}

push(20);
push(30);
pop();