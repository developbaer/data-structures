class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

/**
 * This is a singly-linked list implementation.
 * 
 * 
 */
class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  _get(index) {
    if (index >= this.length || index < 0) {
      return undefined
    }

    if (index === this.length - 1) {
      return this.tail
    }

    let node = this.head
    let count = 0
    while (count < index) {
      node = node.next
      count++
    }

    return node
  }

  get(index) {
    const result = this._get(index)

    if (!result) {
      return undefined
    }

    return result.value
  }

  append(value) {
    if (this.head === null) {
      this.head = new Node(value)
      this.tail = this.head
      this.length++
      return
    }

    const newTail = new Node(value)
    const oldTail = this.tail

    oldTail.next = newTail
    this.tail = newTail
    this.length++
  }

  prepend(value) {
    if (this.head === null) {
      this.head = new Node(value)
      this.tail = this.head
      this.length++
      return
    }

    const newHead = new Node(value)
    const oldHead = this.head

    newHead.next = oldHead
    this.head = newHead
    this.length++
  }

  add(value, index) {
    if (index < 0 || index > this.length) {
      return
    }

    if (index === 0) {
      return this.prepend(value)
    }

    if (index === this.length) {
      return this.append(value)
    }

    const middle = new Node(value)
    const before = this._get(index - 1)
    const after = before.next

    before.next = middle
    middle.next = after

    this.length++
  }

  removeFirst() {
    if (this.head === null) {
      return
    }

    const oldHead = this.head
    const newHead = this.head.next

    this.head = newHead
    oldHead.next = null
    this.length--
  }

  removeLast() {
    if (this.tail === null) {
      return
    }

    const oldTail = this.tail
    const newTail = this._get(this.length - 1)

    this.tail = newTail
    oldTail.next = null
    this.length--
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return
    }

    if (index === 0) {
      this.removeFirst()
      return
    }

    if (index === this.length - 1) {
      this.removeLast()
      return
    }

    const before = this._get(index - 1)
    const toRemove = before.next

    before.next = toRemove.next
    toRemove.next = null

    this.length--
  }

  contains(value) {
    let node = this.head

    while (node !== null) {
      if (node.value === value) {
        return true
      }

      node = node.next
    }

    return false
  }
}

export default LinkedList
