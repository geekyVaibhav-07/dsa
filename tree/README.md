Tree: DS that consist of nodes in parent/child relationship. Each parent (node) can have multiple ( 0 -n ) childe nodes. Eg. Singly linked list. The topmost node is called root. ALl the other nodes (other than root) should have only one parent node.
Binary Tree (BT): treen in which each node can have 0-2 nodes and not more than 2 node.
Binary Search Tree (BST): BT in which left child node value (if any) is always less tnan parent and right child node value (if any) is always greater than parent.

Heaps: heaps are Binary trees (max 2 child nodes) with few properties:
    - parent node is either greter (Max-heap) or less (Min-heap) than both of the child nodes
    - a parent to haev a right child, presence of left-child is must
    - tree needs to be as compact as possible meaning height shoudl be as less as possible
    - there is no relation between left and right child values if they are greater or less than each other
    - if stored in an array:
        - child for parent at index n can be found at 2n+1 and 2n+2 index
        - preant of node at index n can be found at Math.floor((n-1)/2)