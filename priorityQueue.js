class QElement {
  constructor(el, priority) {
    this.el = el;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(item, priority) {
    const qElement = new QElement(item, priority);
    let contain = false;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > qElement.priority) {
        this.items.splice(i, 0, qElement);
        contain = true;
        break;
      }
    }
    if (!contain) this.items.push(qElement);
  }

  dequeue()

  front()

  isEmpty()

  printPQueue()
}