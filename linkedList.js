class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class linkedList {
    constructor(head = null){
        this.head = head;
    }

    printList(){
        let printValue = this.head;
        while(printValue != null){
            console.log(printValue.data);
            printValue = printValue.next;
        }
    }

    insertNodeAtStart(data){
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    insertNodeAtEnd(data){
        let newNode = new Node(data);
        let lastNode = this.head;
        while(lastNode.next){
            lastNode = lastNode.next;
        }
        lastNode.next = newNode;
    }

    delete(data){
        let prev = null;
        let head = this.head;
        if(head != null){
            if(head.data == data){
                this.head = head.next;
                head = null;
                return;
            }
        }
        while(head != null){
            if(head.data == data){
                break;
            }
            prev = head;
            head = head.next;
        }
        if(head == null){
            return
        }
        prev.next = head.next;
        head = null;
    }

}


let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

let list = new linkedList(node1);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

//console.log(list.head.next);
list.insertNodeAtStart(0);
list.insertNodeAtEnd(6);
list.delete(3);
list.printList();