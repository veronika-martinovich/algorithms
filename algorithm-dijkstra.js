// A Graph consists of a finite set of vertices(or nodes) and set of Edges which connect a pair of nodes.
// In Dijkstra's algorithm Edges have weight/distance. And the algorithms is searching for the shortest AND cheapest distance (less amount of nodes AND cheapest edges)

const graph = {};
graph.a = { b: 2, c: 1 };
graph.b = { f: 7 };
graph.c = { d: 5, e: 2 };
graph.d = { f: 2 };
graph.e = { f: 1 };
graph.f = { g: 1 };
graph.g = {};

let count = 0;

function shortPathDijkstra(graph, start, end) {
  let costs = {};
  let processed = [];
  let neighbors = {};

  Object.keys(graph).forEach((node) => {
    if (node !== start) {
      let value = graph[start][node];
      costs[node] = value || 1000000;
    }
  });

  let node = findNodeLowestCost(costs, processed);

  while (node) {
    const cost = costs[node];
    neighbors = graph[node];
    Object.keys(neighbors).forEach((neighbor) => {
      let newCost = cost + neighbors[neighbor];
      if (newCost < costs[neighbor]) {
        costs[neighbor] = newCost;
      }
    });
    processed.push(node);

    node = findNodeLowestCost(costs, processed);
  }
  return costs;
}

function findNodeLowestCost(costs, processed) {
  let lowestCost = 1000000;
  let lowestNode;
  Object.keys(costs).forEach((node) => {
    let cost = costs[node];
    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost;
      lowestNode = node;
    }
  });
  return lowestNode;
}

console.log(shortPathDijkstra(graph, "a", "g"));
