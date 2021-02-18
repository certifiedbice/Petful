class _Node {
	constructor(value) {
      this.value = value;
      this.next = null;
  }
}

class Queue {
	constructor() {
		// Set initial data.
		this.first = null;
		this.last = null;
		this.length = 0;
  }

	enqueue(data) {
		// Add some data to the queue.
		const node = new _Node(data);

		if (this.first === null) {
		this.first = node;
		}
		if(this.last) {
		this.last.next = node;
		}
		this.length = this.length + 1;
		//make the new node the last item in queue
		this.last = node;
  
	}

	dequeue() {
		// Remove some data from the queue.
		//if queue is empty, return nothin
		if (this.first === null) {
		return;
		}
		const node = this.first;
		this.first = this.first.next;
		//if this is the last item in the queue
		if (node === this.last) {
		this.last = null;
		}
		this.length = this.length - 1;
		return node.value;
  }

	show() {
		// Return the next item in the queue.
		return this.first.value;
	}

	all() {
		// Return all items in the queue.
		const results = [];
		let node = this.first;
		for (let i =0; i < this.length; i++) {
			results.push(node.value)
			node = node.next
		}
		return results;
	}
}

module.exports = Queue
