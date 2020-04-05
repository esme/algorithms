var findCheapestPrice = function(n, flights, src, dst, k) {
  let adj = {};
  let pq = new PriorityQueue();
  let visited = {};
  let res = -1;
  
  for (let f of flights) {
    const [start, end, price] = f;
    if (!adj[start]) adj[start] = [];
    adj[start].push([end, price]);
  }
  
  const bfs = (city, cost, stops) => {

    if (stops > k + 1) return;

    if (city === dst) {
      pq.enqueue(stops, cost);
      return;
    }

    adj[city].forEach(([end, price]) => {
      bfs(end, price + cost, stops + 1);
    })
  }
  bfs(src, 0, 0);
  
  const {element, priority} = pq.dequeue();
  res = priority;
  return res;
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


let n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1;
console.log(findCheapestPrice(n, flights, src, dst, k));