class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Queue {
  constructor() {
    // Set initial data.
	this.top=null;
  }

  enqueue(data) {
    // Add some data to the queue.

	/* If the stack is empty, then the node will be the
           top of the stack */
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        /* If the stack already has something, 
           then create a new node,
           add data to the new node, and
           have the pointer point to the top */
        const node = new _Node(data, this.top);
        this.top = node;
  }

  dequeue() {
    // Remove some data from the queue.

	/* In order to remove the top of the stack, you have to point
           the pointer to the next item and that next item becomes the
           top of the stack */
        const node = this.top;
        this.top = node.next;
        return node.data;
  }

  show() {
    // Return the next item in the queue.
  }

  all() {
    // Return all items in the queue.
  }
}

module.exports = Queue
