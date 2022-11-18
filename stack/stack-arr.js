class Stack {
	constructor() {
		this.items = []
	}
	push(element) {
		this.items.push(element)
	}
	pop() {
		this.items.pop()
	}
	peek() {
		return this.items[this.items
			.length - 1]
	}
	isEmpty() {
		return this.length == 0
	}
	clear() {
		this.items = []
	}
}

module.exports = StackArray
