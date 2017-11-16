// implement a graph

// Adjacency list: for every vertex a list of adjacent vertices is stored.
// This can be viewed as storing the list of edges. This data structure allows
// the storage of additional data on teh vertices and edges

// Time Complexity
// storage: O(|V| + |E|)
// add vertex: O(1)
// add edge: O(1)
// query: O(1)

class Graph {
  constructor() {
    this.vertices = [];
    this.edges = [];
    this.numberOfEdges = 0;
  }
};

Graph.prototype.addVertex = function(vertex) {
  this.vertices.push(vertex);
  this.edges[vertex] = [];
};

Graph.prototype.removeVertex = function(vertex) {
  var index = this.vertices.indexOf(vertex);
  if(~index) {
    this.vertices.splice(index, 1);
  }
  while(this.edges[vertex].length) {
    var adjacentVertex = this.edges[vertex].pop();
    this.removeEdge(adjacentVertex, vertex);
  }
};

Graph.prototype.addEdge = function(vertex1, vertex2) {
  this.edges[vertex1].push(vertex2);
  this.edges[vertex2].push(vertex1);
  this.numberOfEdges++;
};

Graph.prototype.removeEdge = function(vertex1, vertex2) {
  var index1 = this.edges[vertex1] ? this.edges[vertex1].indexOf(vertex2) : -1;
  var index2 = this.edges[vertex2] ? this.edges[vertex2].indexOf(vertex1) : -1;

  if(~index1) {
    this.edges[vertex1].splice(index1, 1);
    this.numberOfEdges--;
  }
  if(~index2) {
    this.edges[vertex2].splice(index2, 1);
  }
};

Graph.prototype.size = function() {
  return this.vertices.length;
};

Graph.prototype.toString = function() {
  let str = '';
  for(let i = 0; i < this.vertices.length; i++) {
    str += vertices[i] + ' => ';
    let neighbors = this.edges[this.vertices[i]];
    for(let j = 0; j < neighbors.length; j++) {
      str += neighbors[j] + ' ';
    }
    str += '\n';
  }
  return str;
};

// Breadth-First Traversal =>  Queue
// Create a Queue, Q.
// Mark u as discovered
// Enqueue all unvisited neighbors of vertex;
// Mark u as explored
Graph.prototype.color = function() {
  let color = [];
  for(let i = 0; i < vertices.length; i++) {
    color[vertices[i]] = 'white';
  }
  return color;
}


Graph.prototype.bFS = function(v, cb) {
  let color = this.color(),
    queue = new Queue();

  queue.enqueue(v);
  while(!queue.isEmpty()) {
    let u = queue.dequeue(),
      neighbors = this.edges[u];

    color[u] = 'grey';
    for(let i = 0; i < neighbors.length; i++) {
      let w = neighbors[i];
      if(color[w] === 'white') {
        color[w] = 'grey';
        queue.enqueue(w);
      }
    }
    color[u] = 'black';
    if(cb) {
      cb(u);
    }
  }
};


// Depth-First Traversal => Stack