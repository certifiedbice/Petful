class _Node {
	constructor(data, next, prev) {
		this.data = data;
		this.next = next;
		this.prev = prev;
	}
}

class Queue {
	constructor() {
		// Set initial data.
		this.top=null;
		this.bottom=null;
	}

	enqueue(data) {
		// Add some data to the queue.

		/* If the queue is empty, then the node will be the top of the stack */
			if(this.top===null){
				this.top=new _Node(data,null,null);
				this.bottom=this.top;
				return this.top;
			}

			/* If the queue already has something, then create a new node,
			add data to the new node, and change the pointers */
			const node=new _Node(data,this.top,null);
			this.top.prev=node;
			this.top=node;
	}

	dequeue() {
		// Remove some data from the queue.

		/* Remove from the bottom of the queue and then update the pointers */
			const node = this.bottom;
			this.bottom = node.prev;
			return node.data;
	}

	show() {
		// Return the next item in the queue.
		return this.bottom;
	}

	all() {
		// Return all items in the queue.
		if(this.top===null){throw new Error('Empty Queue');}
		let node=this.top;
		let queue=[];
		while(node!==null){
			queue.push(node.data);
			node=node.next;
		}
		return queue;
	}
}

module.exports = Queue
