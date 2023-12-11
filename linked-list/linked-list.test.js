import test from "node:test"
import assert from "assert"
import LinkedList from "./linked-list.js"

test('returns undefined if the index is greather then the length of the list', () => {
  // given
  const list = new LinkedList()

  // when
  const value = list.get(100)

  // then
  assert.strictEqual(value, undefined);
})

test('returns undefined if the index is smaller than 0', () => {
  // given
  const list = new LinkedList()

  // when
  const value = list.get(-1)

  // then
  assert.strictEqual(value, undefined);
})

test('returns the first value of a list', () => {
  // given
  const list = new LinkedList()
  list.append(1)

  // when
  const value = list.get(0)

  // then
  assert.strictEqual(value, 1);
})

test('returns the second value of a list', () => {
  // given
  const list = new LinkedList()
  list.append(1)
  list.append(2)

  // when
  const value = list.get(1)

  // then
  assert.strictEqual(value, 2);
})

test('appends a value to an empty list', () => {
  // given
  const list = new LinkedList()

  // when
  list.append(1)

  // then
  assert.strictEqual(list.get(0), 1);
})

test('appends a value to the end of the list', () => {
  // given
  const list = new LinkedList()
  list.append(1)

  // when
  list.append(2)

  // then
  assert.strictEqual(list.get(1), 2);
})

test('prepends a value to an empty list', () => {
  // given
  const list = new LinkedList()

  // when
  list.prepend(1)

  // then
  assert.strictEqual(list.get(0), 1);
})

test('prepends a value to the end of the list', () => {
  // given
  const list = new LinkedList()
  list.append(1)

  // when
  list.prepend(2)

  // then
  assert.strictEqual(list.get(0), 2);
})

test('adds a value to an empty list', () => {
  // given
  const list = new LinkedList()

  // when
  list.add(1, 0)

  // then
  assert.strictEqual(list.get(0), 1);
})

test('adds a value to the end of the list', () => {
  // given
  const list = new LinkedList()
  list.append(1)

  // when
  list.add(2, 1)

  // then
  assert.strictEqual(list.get(1), 2);
})

test('adds a value to the beginning of the list', () => {
  // given
  const list = new LinkedList()
  list.append(1)

  // when
  list.add(2, 0)

  // then
  assert.strictEqual(list.get(0), 2);
})

test('adds a value in the middle of the list', () => {
  // given
  const list = new LinkedList()
  list.append(1)
  list.append(2)

  // when
  list.add(3, 1)

  // then
  assert.strictEqual(list.get(1), 3);
})

test('removes nothing from an empty list', () => {
  // given
  const list = new LinkedList()

  // when
  list.removeFirst()

  // then
  assert.strictEqual(list.length, 0);
})

test('removes the first element when list contains only one element', () => {
  // given
  const list = new LinkedList()
  list.append(1)

  // when
  list.removeFirst()

  // then
  assert.strictEqual(list.get(0), undefined);
})

test('removes the first element when list contains more than one element', () => {
  // given
  const list = new LinkedList()
  list.append(1)
  list.append(2)

  // when
  list.removeFirst()

  // then
  assert.strictEqual(list.get(0), 2);
})

test('removes no element when removing the last element', () => {
  // given
  const list = new LinkedList()

  // when
  list.removeLast()

  // then
  assert.strictEqual(list.length, 0);
})

test('removes last element when list contains one element', () => {
  // given
  const list = new LinkedList()
  list.append(1)

  // when
  list.removeLast()

  // then
  assert.strictEqual(list.get(0), undefined);
})

test('removes last element when list contains more than one element', () => {
  // given
  const list = new LinkedList()
  list.append(1)
  list.append(2)

  // when
  list.removeLast()

  // then
  assert.strictEqual(list.get(1), undefined);
})

test('removes the first element', () => {
  // given
  const list = new LinkedList()
  list.append(1)
  list.append(2)

  // when
  list.remove(0)

  // then
  assert.strictEqual(list.get(0), 2);
})

test('removes an element between to other elements', () => {
  // given
  const list = new LinkedList()
  list.append(1)
  list.append(2)
  list.append(3)

  // when
  list.remove(1)

  // then
  assert.strictEqual(list.get(1), 3);
})

test('finds the value 3', () => {
  // given
  const list = new LinkedList()
  list.append(1)
  list.append(2)
  list.append(3)

  // when
  const isInsideList = list.contains(3)

  // then
  assert.strictEqual(isInsideList, true);
})

test('finds not the value 4', () => {
  // given
  const list = new LinkedList()
  list.append(1)
  list.append(2)
  list.append(3)

  // when
  const isInsideList = list.contains(4)

  // then
  assert.strictEqual(isInsideList, false);
})
