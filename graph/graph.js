const Stack = require('./../stack/stack');
const Queue = require('./../queue/queue');

class Graph {
    constructor({ directional = false, graph =  {} }) {
        this.graph = graph,
        this.directional = directional;
    }

    addVertex(vertex) {
        if (this.graph[vertex]) {

            /**
             * we might want to add some protection here and throw an error if requried
             */
            return this;
        }
        this.graph[vertex] = [];
        return this;
    }

    addEdge(vertex1, vertex2) {
        if (!this.graph[vertex1] || !this.graph[vertex2]) {
            return undefined;
        }
        if (!this.graph[vertex1].includes(vertex2)) {
            this.graph[vertex1].push(vertex2);
        }
        if (!this.directional && !this.graph[vertex2].includes(vertex1)) {
            this.graph[vertex2].push(vertex1);
        }
        return this;
    }

    removeEdge(vertex1, vertex2) {
        if (!this.graph[vertex1] || !this.graph[vertex2]) {
            return undefined;
        }
        if (this.graph[vertex1].includes(vertex2)) {
            this.graph[vertex1] = this.graph[vertex1].filter(vertex => vertex !== vertex2);
        }
        if (!this.directional && this.graph[vertex2].includes(vertex1)) {
            this.graph[vertex2] = this.graph[vertex2].filter(vertex => vertex !== vertex1);
        }
        return this;
    }

    removeVertex(vertex) {
        if (!this.graph[vertex]) {
            return this;
        }
        if (this.directional) {
            for (const iterator in this.graph) {
                this.graph[iterator] = this.graph[iterator].filter(connection => connection !== vertex);
            }
        }
        else {
            this.graph[vertex].forEach(connection => {
                this.graph[connection] = this.graph[connection].filter(el => el !== vertex);
            });
        }
        delete this.graph[vertex];
        return this;
    }

    depthFirstSearch({ startingVertex = Object.keys(this.graph)[0], iterative = false }) {
        if (iterative) {
            const vertices = [];
            const visited = {};
            const s = new Stack();
            const dfs = (vertex) => {
                if (!visited[vertex]) {
                    vertices.push(vertex);
                    visited[vertex] = true;
                    this.graph[vertex].forEach(neighbour => {
                        s.push(neighbour);
                    })
                };
                while(s.getSize() > 0) {
                    dfs(s.pop());
                }
            }
            dfs(startingVertex);
            return vertices;
        }
        else {
            // recursive: result will be slightely different
            const vertices = [];
            const visited = {};
            const dfs = (vertex) => {
                if (visited[vertex]) {
                    return;
                }
                vertices.push(vertex);
                visited[vertex] = true;
                this.graph[vertex].forEach(neighbour => {
                    dfs(neighbour);
                })
            }
            dfs(startingVertex);
            return vertices;
        }
    }

    breadthFirstSearch({ startingVertex = Object.keys(this.graph)[0] }) {
        const vertices = [];
        const visited = {};
        const q = new Queue();
        const dfs = (vertex) => {
            if (!visited[vertex]) {
                vertices.push(vertex);
                visited[vertex] = true;
                this.graph[vertex].forEach(neighbour => {
                    q.enQueue(neighbour);
                })
            };
            while(q.getSize() > 0) {
                dfs(q.deQueue());
            }
        }
        dfs(startingVertex);
        return vertices;
    }
}

module.exports = Graph;