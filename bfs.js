// A Graph consists of a finite set of vertices(or nodes) and set of Edges which connect a pair of nodes.
// Breadth-first Search is searching for the shortest distance (less amount of nodes involved)

const graph = {};
graph.a = ["b", "c"];
graph.b = ["f"];
graph.c = ["d", "e"];
graph.d = ["f"];
graph.e = ["f"];
graph.f = ["g"];

let count = 0;

function breadthSearch(graph, start, end) {
  let queue = [];
  queue.push(start);
  while (queue.length > 0) {
    count += 1;
    const current = queue.shift();
    if (!graph[current]) {
      graph[current] = [];
    }
    if (graph[current].includes(end)) {
      return true;
    } else {
      queue = [...queue, ...graph[current]];
    }
  }
  count = 0;
  return false;
}

console.log(breadthSearch(graph, "a", "f"));
console.log("count: ", count);
