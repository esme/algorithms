MedianFinder.prototype.addNum = function(num) {
  this.max.push(-num);
  this.min.push(-this.max.pop());
  if (this.max.size() < this.min.size()) {
    this.max.push(-this.min.pop());
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.min.size() === this.max.size()) {
      return (-max.pop() + min.pop()) / 2;
    } else {
      return -this.max.pop();
    }
};

class Heap {
  constructor() {
    this.heap = [];
  }
  
  size() {
    return this.heap.length;
  }

  bubbleUp() {
    let idx = this.heap.length - 1;
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      if (this.heap[parentIdx] >= this.heap[idx]) break;
      [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];
      idx = parentIdx;
    }
  }

  sinkDown() {
    let idx = 0;
    while(true) {
      let left = idx * 2 + 1;
      let right = idx * 2 + 2;
      let swap = null;

      if (this.heap[left] > this.heap[idx]) {
        swap = left;
      } else if (this.heap[right] > this.heap[idx]) {
        swap = right;
      }

      if (this.heap[right] > this.heap[left]) {
        swap = right;
      }

      if (!swap) {
        break;
      }

      [this.heap[swap], this.heap[idx]] = [this.heap[idx], this.heap[swap]];
      idx = swap;
    }
  }

  push(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  pop() {
    let max = this.heap[0];
    let end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.sinkDown();
    }
    return max;
  }
}
