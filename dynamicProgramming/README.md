Dynamic Programming: A method to solve a complex problem by breaking it down to a collection of simpler sub-problems, solving each those sub-problems just once and storing their solutions.
Overlapping Sub-problem: A problem is said to have oevrlapping sub-problems if it can be broken into multiple sub-problems and those sub-problems are not unique meaning they are re-occuring at multiple plcaes and needed to be solved at multiple places.
Optimal Sub-structure: A problem is said to have optimal sub-structure if an optimal solution can be costructed from the optimal solution of its sub-problems.
A problem can be solved using dynamic programming if the problem has both oevrlapping sub-problem and optimal sub-structure.
Memoization: Stroing the result of expensive function calls and returning the cached result when the same input occure again.
Tabulation: Stroing the result of previous result in a table (usually an array). Usually done using iteration. Better space complexity can be achieved using tabulation.
The section is suppose to be used as a learning experience and not as a resuable library