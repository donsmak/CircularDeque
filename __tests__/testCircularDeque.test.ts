/// <reference types="jest" />

import { MyCircularDeque } from "../designCircularDeque";

describe("MyCircularDeque", () => {
  let deque: MyCircularDeque;

  beforeEach(() => {
    deque = new MyCircularDeque(3); // Initialize with size 3
  });

  test("should insert elements at the front", () => {
    // Check if insertFront is implemented correctly
    expect(deque.insertFront(1)).toBe(true);
    expect(deque.getFront()).toBe(1);
    expect(deque.insertFront(2)).toBe(true);
    expect(deque.getFront()).toBe(2);
  });

  test("should insert elements at the rear", () => {
    // Check if insertLast is implemented correctly
    expect(deque.insertLast(1)).toBe(true);
    expect(deque.getRear()).toBe(1);
    expect(deque.insertLast(2)).toBe(true);
    expect(deque.getRear()).toBe(2);
  });

  test("should delete elements from the front", () => {
    // Ensure deleteFront works as expected
    deque.insertFront(1);
    deque.insertFront(2);
    expect(deque.deleteFront()).toBe(true);
    expect(deque.getFront()).toBe(1);
  });

  test("should delete elements from the rear", () => {
    // Ensure deleteLast works as expected
    deque.insertLast(1);
    deque.insertLast(2);
    expect(deque.deleteLast()).toBe(true);
    expect(deque.getRear()).toBe(1);
  });

  test("should return -1 for getFront and getRear when empty", () => {
    // Check behavior when deque is empty
    expect(deque.getFront()).toBe(-1);
    expect(deque.getRear()).toBe(-1);
  });

  test("should return true for isEmpty and false for isFull initially", () => {
    // Check initial state of the deque
    expect(deque.isEmpty()).toBe(true);
    expect(deque.isFull()).toBe(false);
  });

  test("should return false when trying to insert into a full deque", () => {
    // Test behavior when deque is full
    deque.insertFront(1);
    deque.insertFront(2);
    deque.insertLast(3);
    expect(deque.insertFront(4)).toBe(false); // Should be full
  });

  test("should return true for isFull after filling", () => {
    // Check if isFull works after filling the deque
    deque.insertFront(1);
    deque.insertFront(2);
    deque.insertLast(3);
    expect(deque.isFull()).toBe(true);
  });
});
