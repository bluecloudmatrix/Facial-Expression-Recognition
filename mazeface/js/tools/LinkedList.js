/**
 * LinkedList
 * 2013/7/11
 * 
 */
var LinkedList = function() {

	function Node(data, next) {
		this.data = data || null;
		this.next = next || null;
	}
	Node.prototype = {
		getValue: function() {
			return this.data;
		},
		setValue: function(obj) {
			this.data = obj;
		},
		getNext: function() {
			return this.next;
		},
		setNext: function(node) {
			this.next = node;
		}
	};
	Node.prototype.constructor = Node;

	function nodeByIndex(index, head) {
		var node = head;
		var i = 0;
		// 
		if (index === 0) {
			return node;
		}
		while (node.next) {
			if (i === index) {
				return node;
			}
			node = node.next && node.next;
			i++;
		}
		// 
		return node;

	}

	// 
	function nodeByData(data, list) {
		var prev = null,
		node = list.head;
		while (node.next) {
			if (node.data == data) {
				if (node == list.head) {
					return {
						prev: null,
						curr: node
					};
				} else {
					return {
						prev: prev,
						curr: node
					};
				}
			}
			prev = node;
			node = node.next;
		}
		if (node.data == data) {
			// 
			if (list.size() === 1) {
				return {
					prev: null,
					curr: node
				};
			}
			// 
			else {
				return {
					prev: prev,
					curr: node
				};
			}
		}
		// 
		return null;
	}

	function LinkedList() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	LinkedList.prototype = {
		add: function(index, obj) {
			if (obj === undefined || obj === null || typeof index != 'number') {
				throw new Error('add failed, invalid param');
			}
			//
			if (index < 0) {
				index = this.length + index;
			}
			// 
			if (index < 0 || index > this.length) {
				throw new Error('add failed, invalid index');
			}

			var newNode = new Node(obj);
			if (index == 0) {
				if (this.head) {
					newNode.setNext(this.head);
					this.head = newNode;
				} else {
					this.head = this.tail = newNode;
				}
			} else {
				var node = nodeByIndex(index - 1, this.head),
				next = node.next;
				node.setNext(newNode);
				newNode.setNext(next);
			}
			this.length++;

		},
		get: function(index) {
			if (typeof index !== 'number') {
				throw new Error('get failed, invalid param');
			}
			//
			if (index < 0) {
				index = this.length + index;
			}
			// 
			if (this.isEmpty() || index < 0 || index >= this.length) {
				throw new Error('Index: ' + index + ', Size: ' + this.length);
			}

			var node = nodeByIndex(index, this.head);

			return node.data;
		},
		getFirst: function() {
			return this.get(0);
		},
		getLast: function() {
			return this.get(this.length - 1);
		},
		set: function(index, obj) {

			// 
			if (index < 0) {
				index = this.length + index;
			}
			// 
			if (this.isEmpty() || index < 0 || index >= this.length) {
				throw new Error('Index: ' + index + ', Size: ' + this.length);
			}

			var node = nodeByIndex(index, this.head);

			node.data = obj;

		},
		size: function() {
			return this.length;
		},
		clear: function() {
			this.head.next = null;
			this.head = null;
		},
		remove: function(obj) {
			var nodes = nodeByData(obj, this);

			if (nodes === null) {
				throw new Error('remove failed, the node does not exist');
			}

			var curr = nodes.curr,
			prev = nodes.prev;

			// 
			if (prev === null) {
				this.head = curr.next;
				curr.next = null;
				curr = null;
			} else {
				prev.setNext(curr.next);
				curr.next = null;
				curr = null;
			}
			this.length--;
			// 
			//this.tail = nodeByIndex(this.length-1, this.head);
		},
		isEmpty: function() {
			return this.head === null;
		},
		addLast: function(obj) {
			this.add(this.length, obj);
		},
		addFirst: function(obj) {
			this.add(0, obj);
		},
		contains: function(obj) {
			var node = this.head;
			if (this.isEmpty()) {
				return false;
			}
			while (node.next) {
				if (node.data == obj) {
					return true;
				}
				node = node.next;
			}
			//
			if (node.data == obj) {
				return true;
			}
			return false;
		},
		toString: function() {
			var str = '',
			node = this.head;

			if (this.isEmpty()) {
				return '[]';
			}
			str = '[' + node.data;
			while (node.next) {
				node = node.next;
				str += ',' + node.data;
			}
			str += ']';

			return str;
		}

	};

	LinkedList.prototype.constructor = LinkedList;

	return LinkedList;

} ();