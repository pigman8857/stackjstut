
//tutorial from https://www.geeksforgeeks.org/stack-data-structure-introduction-program/
class Stack {

    constructor(size) {
        this.ele = new Array(size);
        this.top = -1;//pointer
        this.max = size;
    }

    push(item) {
        if (this.top == this.max - 1) {
            console.log('Stack overflow');
            return;
        }
        else {
            this.ele[this.top + 1] = item;
            this.top++;
        }
    }

    pop() {
        if (this.top != -1) {
            var topEle = this.ele[this.top];
            this.ele[this.top] = null;
            this.top--;
            return topEle;
        } else {
            console.log('Stack empty');
        }
    }

    peek() {
        if (this.top == -1) {
            console.log('Stack empty');
            return -1;
        }
        else {
            console.log(`${this.ele[this.top]}peek from stack`);
            return this.ele[this.top];
        }
    }
}

module.exports = Stack;