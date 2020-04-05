/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */

var findCheapestPrice = function(n, flights, src, dst, k) {
  let prices = {};
  
  for (let f of flights) {
      let [start, end, price] = f;
      if (!prices[start]) prices[start] = [];
      prices[start].push([end, price]);
  }

  let pq = new PriorityQueue();
  pq.enqueue([0, src, k + 1], 0);

  while (pq.sizeOf()) {
      const top = pq.dequeue();
      const [price, city, stops] = top.element;
      if (city === dst) return price;
      if (stops > 0) {
          let adj = prices[city];
          if (adj) {
            for (let a of adj) {
                const [end, cost] = a;
                pq.enqueue([price + cost, end, stops - 1], price + cost);
            }
          }
      }
  }
  return -1;
};

class QElement { 
    constructor(element, priority) 
    { 
        this.element = element; 
        this.priority = priority; 
    } 
} 

class PriorityQueue { 

  constructor() 
  { 
      this.items = []; 
  } 
  
  sizeOf() {
      return this.items.length;
  }

  enqueue(element, priority) 
  { 
      var qElement = new QElement(element, priority); 
      var contain = false; 

      for (var i = 0; i < this.items.length; i++) { 
          if (this.items[i].priority > qElement.priority) { 
              this.items.splice(i, 0, qElement); 
              contain = true; 
              break; 
          } 
      } 

      if (!contain) { 
          this.items.push(qElement); 
      } 
  } 

  dequeue() 
  { 
      let a = this.items.shift();
      return a;
  } 
} 

let n = 5, edges = [[4,1,1],[1,2,3],[0,3,2],[0,4,10],[3,1,1],[1,4,3]], src = 2, dst = 1, k = 1;

console.log(findCheapestPrice(n, edges, src, dst, k));
