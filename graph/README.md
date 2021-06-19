Graph: Graph data structure consist of a finite set of vertices or nodes or points, togerher with a set of unordered pairs of these vertices for an unidirected graph or a set of ordered pais for a directed graph. Bottomo line, graph is nothing but the nodes and their connections to each other. 
Vertix: is a node
Edge: connection between nodes
Weighted/Unweighted: values assigned to the distance between vertices (Edge values)
Directional/Undirectional: direction assigned to the distanced vertices
Tree vs Graph: In trees, there will only be one path from a node to a different node but in graph, there can be many paths
Undirected Graph: connections are both way. Like if there is a undirected conection from A to B, it is A -> B and B -> A
Directed graph: connections are only in the directed way. suppose a directed connection is there from A to B but not from B to A then A -> B is true but B -> A is not tue
Unweighted: edges will not have value
Weighted: edges will have value
Ways to represent graph:
    - Adjancey Matrix: 
        - 2D matrix with all the nodes as columns as well as rows
        - 1 represet a connection
        - 0 represents no connection
        - example: 
                A   B   C   D
            A   0   1   1   1
            B   1   0   0   0
            C   1   0   0   0
            D   1   1   0   0
        - both directed and undirected graphs can be taken care with this method
        - If you focus on relation betwwen B and D and assume row as the source and columns as target, there is a connection from D to B (D -> B) but not from B to D
        - Time Complexity (V = number of vertices and E = number of edges)
            Add Vertex: O(V^2)
            Add Edge: O(1)
            Remove Vertex: O(V^2)
            Remove Edge: O(1)
            Query: O(1)
            Storage: O(V^2)
    - Adjancy List:
        - Represents in the form of nested array (depth = 2)
        - compared to above example
            {
                A: [B, C, D],
                B: [A]
                C: [A],
                D: [A, B]
            }
        - Time Complexity (V = number of vertices and E = number of edges)
            Add Vertex: O(1)
            Add Edge: O(1)
            Remove Vertex: O(V + E)
            Remove Edge: O(E)
            Query: O(V + E)
            Storage: O(V + E)
    - Conclusion: For most of the use cases, adjancyt list is better. Bottomline: if numebrs are edges are almost equal to number of vertices, go for matix else go for list
