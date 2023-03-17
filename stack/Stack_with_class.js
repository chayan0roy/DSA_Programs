class stack {
    stack = [];
    currentSize;
    maxSize;

    constructor(size) {
        this.maxSize = size;
        this.currentSize = this.stack.length;
    }

    push(newValue) {
        if(this.currentSize >= this.maxSize) {
            alert("Stack is Full");
        } else {
            this.stack[this.currentSize] = newValue;
            this.currentSize++;
        }
    }

    pop() {
        if(this.currentSize > 0) {
            this.currentSize--;
            this.stack.length = this.currentSize;
        } else {
            alert("Stack is already empty");
        }
    }

    display() {
        console.log(this.stack);
    }
}

st1 = new stack();

st1.push(20);
st1.push(30);
st1.display();
st1.pop();
st1.display();