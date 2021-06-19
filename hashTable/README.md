The idea is to write our own data structure which similar to Javascript objects or Java hash table
Hash table is a collection of key value pairs with faster (constant time of) access, deletion and insertion. We use a big array to store the data and apply some logic to make the opertaion faster
The logic is pretty simple:
    - Write a hash function which takes a string ( for simplicity) and generates a hash. The hash function should be fast ( constant time) as we will be using it a lot.
    - Hash function return charecters to be limited as per the requirement. Using a hash function which returns 100 chareacter will aslo do the trick but is an overkill. 
    - Create an array and store the value part of the key: value pair at index = hash(key)
    - While reading, retirieve the element from index = hash(key)
    - All the other idnexes will have value as undefiend
    - Size should return total number of defined values
What makes a good hash function:
    - Constant time performance
    - Deterministic as in same input should yield same output
    - use of prime number in hash function reduces the collision (but, how?)
How to deal with collision:
    - Separate chaining
        - At each index in our array, we store values in another data structure such as list or array
        - It will allow us to store multiple key - values pairs at at the same index
        - Data stored at an idnex might look like [['key1', 'V1], ['Key2', 'V2']]
        - Notice, we are still using arrays to store the data, we just have to loop through to find the right data in such structure
        - Since the data is hashed before, the complexity will be less as we will only have to loop through multiple items in the cases where collision has occured
    -Linear probing:
        - If we find the collision, we will search thorugh the array to find next empty slot
        - Suppose 1st Key1 hash has resulted in 4 and we stored it at 4
        - Next Key2 hash has resulted in 4 again, we will look into the array, if occupied, recursively find the next empty slot and put the value there
        - The value format here is ['key1', 'V1']
        - While extracting the data, once we getv the hash index, we also need to compare the keys. If keys are not matching, look for the value at the next index recursively to find a match of key