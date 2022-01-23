class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class SLL {
    constructor() {
        this.head = null;
    }

    // Add a value to the front of hte SLL
    addFront(val) {
        // Creating a new node object with the value provided
        let new_node = new Node(val);
        // Checking to see if the current list does not have a head node (if the list is empty)
        // If the list is empty, place the new node as the head
        if (!this.head) {
            this.head = new_node;
            return this;
        }
        // If the list is not empty, assign the head to be the next node to the new node (Blue Arrow in picture above)
        new_node.next = this.head;
        // Then finally assign the new_node to be the new head of the list (Red Arrow in picture above)
        this.head = new_node;
        return this;
    }

    removeFront() {
        //Check to see if the current list is empty
        if (this.head) {
            // Store next node from current head
            let newHead = this.head.next;
            // Set head to current head.next
            this.head = newHead;
            return this;
        } else {
            return null;
        }
    }

    front() {
        // Check to see if the current list is emptys
        if (this.head) {
            // Assign head data to a var
            let val = this.head.data;
            return val;
        } else {
            return null;
        }
    }
}

let foo = new SLL();

foo.addFront(3)
foo.addFront(2)
foo.addFront(1)
foo.addFront(3)

//console.log(foo)
foo.removeFront()
//console.log(foo)
console.log(foo.front())
