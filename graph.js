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
}

Graph.prototype.addVertex = function(vertex) {
  this.vertices.push(vertex);
  this.edges[vertex] = [];
}

Graph.prototype.removeVertex = function(vertex) {
  var index = this.vertices.indexOf(vertex);
  if(~index) {
    this.vertices.splice(index, 1);
  }
  while(this.edges[vertex].length) {
    var adjacentVertex = this.edges[vertex].pop();
    this.removeEdge(adjacentVertex, vertex);
  }
}

Graph.prototype.addEdge = function(vertex1, vertex2) {
  this.edges[vertex1].push(vertex2);
  this.edges[vertex2].push(vertex1);
  this.numberOfEdges++;
}

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
}

Graph.prototype.size = function() {
  return this.vertices.length;
}