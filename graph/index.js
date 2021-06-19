const Graph = require('./graph');

// const graphValue = {
//     'A': [ 'B', 'C' ],
//     'B': [ 'A', 'D' ],
//     'C': [ 'A', 'E' ],
//     'D': [ 'B', 'E', 'F' ],
//     'E': [ 'C', 'D', 'F' ],
//     'F': [ 'D', 'E' ]
// };
// const graph = new Graph({ directional: false, graph: graphValue });

// graph.addVertex('Delhi').addVertex('Mumbai').addVertex('Kolkata').addVertex('Chennai').addVertex('Varanasi').addVertex('Deharadun').addVertex('Shimala')
//     .addEdge('Delhi', 'Chennai').addEdge('Delhi', 'Varanasi').addEdge('Delhi', 'Mumbai').addEdge('Delhi', 'Mumbai').addEdge('Mumbai', 'Chennai').addEdge('Delhi', 'Shimala').addEdge('Delhi', 'Deharadun')
//     .addEdge('Delhi', 'Kolkata').addEdge('Kolkata', 'Mumbai').addEdge('Kolkata', 'Chennai').addEdge('Kolkata', 'Varanasi');
// console.log(graph.graph);
// graph.removeEdge('Varanasi', 'Kolkata');
// console.log(graph.graph);
// graph.removeVertex('Kolkata');
// console.log(graph.graph);
// console.log(graph.depthFirstSearch({}));
// console.log(graph.depthFirstSearch({ iterative: true }));
// console.log(graph.breadthFirstSearch({}));

module.exports = Graph;