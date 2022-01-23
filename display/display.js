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

    // Add a value to the front of the SLL
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

    // Remove a value from the front of the SLL
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

    // Return the value stored in the first entry of the SLL
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

    findSum() {
        if (this.head) {
            //We first have to tell our train attendant that we want them to start at the front of the train
            let runner = this.head
            let sum = 0
            //Since a Linked List does not know how many nodes is within it, we will not be able to use a for loop to             iterate, instead we'll use a while
            //Also we need to tell them when to stop otherwise they will just run off the end of the train
            while (runner !== null) {
                //Since the runner is set to the current node, its value will be equal to the value of the node they                 are currently on
                sum += runner.data
                //Tell our attendant to move to the next car
                runner = runner.next
            }
            return sum
        } else {
            return null;
        }
    }

    display() {
        if (this.head) {
            //We first have to tell our train attendant that we want them to start at the front of the train
            let runner = this.head
            // create an empty list
            let list = [];
            let idx = 0
            while (runner !== null) {
                // Add data from current node to list
                // list.push(runner.data);
                list.push("Node: " + idx + ", Value: " + runner.data);
                //Tell our attendant to move to the next car
                runner = runner.next
                idx++
            }
            //console.log(list)
            return list;
        } else {
            return null;
        }
    }
}
// Create new singly linked list
let foo = new SLL();

// Test functions
foo.addFront(3)
foo.addFront(2)
foo.addFront(1)
foo.addFront(3)
console.log(foo)
foo.removeFront()
console.log(foo.findSum())
console.log(foo.display())