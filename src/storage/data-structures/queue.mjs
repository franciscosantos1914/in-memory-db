export class Queue {
  #data

  constructor() {
    this.#data = []
  }

  enqueue(value) {
    this.#data.push(value)
  }

  dequeue() {
    return this.#data.shift()
  }

  clear() {
    this.#data = []
  }

  get size() {
    return this.#data.length
  }
}