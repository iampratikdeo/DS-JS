class Stack{
    constructor(){
        this.stack = [];
    }

    push(data){
        if(this.stack.includes(data)){
            return false;
        }
        else{
            this.stack.push(data);
            return true;
        }
    }

    pop(data){
        if(this.stack.length <= 0){
            return false;
        }
        else{
            this.stack.pop(data)
        }
    }
    printStack(){
        console.log(this.stack);
    }
}

let Astack = new Stack();
console.log(Astack.push(5));
console.log(Astack.push(1));
Astack.printStack();
console.log(Astack.pop(5));
Astack.printStack();