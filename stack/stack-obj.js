class StackObject {
	#count
	#items
	constructor() {
		this.#count = 0
		this.#items = {}
	}
	push(element) {
		this.#items[this.#count] = element
		this.#count++
	}
	size() {
		return this.#count
	}
	isEmpty() {
		return this.#count === 0
	}
	pop() {
		if(this.isEmpty()) {
			return undefined
		}
		this.#count--
		const result = this.#items[this.#count]
		delete this.#items[this.#count]
		return result
	}
	peek() {
		return this.#items
	}
	clear() {
		while(!this.isEmpty()) {
			this.pop()
		}
	}
	toString() {
		if(this.isEmpty()){
			return ''
		}
		let objString = `${this.#items[0]}`
		for(let i = 1; i < this.#count; i++) 
		{ 
			objString = `${objString},${this.#items[i]}`
		}
			return objString
	}

}

module.exports = StackObject
