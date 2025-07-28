export const questions = [
    // Variables
    {
        category: "variables",
        question: "Assign the value 42 to a variable named x.",
        answer: "x = 42",
        hint: "Use the equals sign to assign a value to a variable.",
        alternatives: []
    },
    {
        category: "variables",
        question: "Assign 3 to a and 'hello' to b in a single line.",
        answer: "a, b = 3, 'hello'",
        hint: "Use comma-separated assignment.",
        alternatives: ["a, b = 3, \"hello\""]
    },
    {
        category: "variables",
        question: "Increment count by 1 using the assignment operator.",
        answer: "count += 1",
        hint: "Use += to add and assign in one step.",
        alternatives: []
    },

    // Strings
    {
        category: "strings",
        question: "Print the first two characters of string s.",
        answer: "print(s[0:2])",
        hint: "Use string slicing with s[start:end].",
        alternatives: []
    },
    {
        category: "strings",
        question: "Append 'xyz' to string s using +=.",
        answer: "s += 'xyz'",
        hint: "Use += for string concatenation.",
        alternatives: []
    },
    {
        category: "strings",
        question: "Get the ASCII value of 'a'.",
        answer: "ord('a')",
        hint: "Use ord() to convert characters to ASCII.",
        alternatives: []
    },
    {
        category: "strings",
        question: "Join ['a', 'b', 'c'] into a single string.",
        answer: "''.join(['a', 'b', 'c'])",
        hint: "Use ''.join(list) to concatenate strings.",
        alternatives: []
    },

    // Tuples
    {
        category: "tuples",
        question: "Create a tuple tup with values (1, 4, 6).",
        answer: "tup = (1, 4, 6)",
        hint: "Use parentheses to define a tuple.",
        alternatives: []
    },
    {
        category: "tuples",
        question: "Use tuple (2, 5) as a key with value 3 at initialize myMap.",
        answer: "myMap = {(2, 5): 3}",
        hint: "Tuples can be used as dictionary keys if immutable.",
        alternatives: []
    },
    {
        category: "tuples",
        question: "Given the tuple `tup = (1, 2, 3)`, unpack it into variables a, b, and c.",
        answer: "a, b, c = tup",
        hint: "Use multiple assignment to unpack.",
        alternatives: ["a, b, c = (1, 2, 3)", "(a, b, c) = (1, 2, 3)"]
    },

    // Heaps
    {
        category: "heaps",
        question: "Import heaps.",
        answer: "import heapq",
        hint: "heapq is part of the standard library.",
        alternatives: []
    },
    {
        category: "heaps",
        question: "Create an empty min heap named `minHeap`.",
        answer: "minHeap = []",
        hint: "Min heaps are built using lists with heapq.",
        alternatives: []
    },
    {
        category: "heaps",
        question: "Push 7 into minHeap.",
        answer: "heapq.heappush(minHeap, 7)",
        hint: "Use heappush() to insert into heap.",
        alternatives: []
    },
    {
        category: "heaps",
        question: "Push 10 into maxHeap.",
        answer: "heapq.heappush(maxHeap, -10)",
        hint: "Use negative values to simulate a max heap.",
        alternatives: []
    },
    {
        category: "heaps",
        question: "Given a min heap named `minHeap` containing the values [3, 4, 5, 6], get the smallest value without removing it (peek).",
        answer: "minHeap[0]",
        hint: "Peek the root of the heap.",
        alternatives: []
    },
    {
        category: "heaps",
        question: "Given a max heap named `maxHeap` containing the values [6, 5, 4, 3], get the largest value without removing it (peek).",
        answer: "-1 * maxHeap[0]",
        hint: "Remember the values are stored as negatives.",
        alternatives: []
    },
    {
        category: "heaps",
        question: "Given a heap named `h` containing the values [1, 3, 5, 7], write a line of code that removes and returns the top value (pop).",
        answer: "heapq.heappop(h)",
        hint: "Use heappop() to remove the root.",
        alternatives: []
    },
    {
        category: "heaps",
        question: "Turn arr into a heap in-place.",
        answer: "heapq.heapify(arr)",
        hint: "Use heapify() to transform a list into a heap.",
        alternatives: []
    },


    // Loops
    {
        category: "loops",
        question: "Write a for loop header that iterates from 0 to 4 (inclusive):",
        answer: "for i in range(5):",
        hint: "Use range(5) to get numbers 0-4. Don't forget the colon!",
        alternatives: ["for i in range(0, 5):"]
    },
    {
        category: "loops",
        question: "Write a for loop header that iterates from 2 to 8 (inclusive), stepping by 2:",
        answer: "for i in range(2, 9, 2):",
        hint: "Use range(start, stop, step). Remember that stop is exclusive!",
        alternatives: ["for i in range(2, 10, 2):"]
    },
    {
        category: "loops",
        question: "Write a while loop header that would count down from 5 to 1:",
        answer: "while i >= 1:",
        hint: "Check if i is greater than or equal to 1. Don't forget the colon!",
        alternatives: ["while i > 0:"]
    },
    {
        category: "loops",
        question: "Write a for loop that counts down from 9 to 2 inclusive.",
        answer: "for i in range(9, 1, -1):",
        hint: "Use range(start, stop-1, -1) for reverse.",
        alternatives: []
    },
    {
        category: "loops",
        question: "Loop through all the elements for list arr",
        answer: "for x in arr:",
        hint: "Use for-in syntax to iterate over a list.",
        alternatives: []
    },
    {
        category: "loops",
        question: "Loop through all the elements with their indices for list arr",
        answer: "for x, i in enumerate(arr):",
        hint: "Use enumerate to get index and value.",
        alternatives: ["for i, x in enumerate(arr):"]
    },
    {
        category: "loops",
        question: "Loop through arrays nums1 and nums2 simultaneously into x and y with unpacking",
        answer: "for x, y in zip(nums1, nums2):",
        hint: "zip() combines elements from multiple lists.",
        alternatives: []
    },
    {
        category: "loops",
        question: "Loop the keys (into var key) of dictionary myMap",
        answer: "for key in myMap:",
        hint: "Iterating a dict gives keys by default.",
        alternatives: ["for key in myMap.keys():"]
    },
    {
        category: "loops",
        question: "Loop the values (into var val) of dictionary myMap",
        answer: "for val in myMap.values():",
        hint: "Use .values() to access dict values.",
        alternatives: []
    },
    {
        category: "loops",
        question: "Loop the keys (key) and values (val) of dictionary myMap",
        answer: "for key, val in myMap.items():",
        hint: "Use .items() for key-value pairs.",
        alternatives: []
    },
    
    // Lists
    {
        category: "lists",
        question: "Create an empty list named arr",
        answer: "arr = []",
        hint: "Use square brackets with nothing inside.",
        alternatives: []
    },
    {
        category: "lists",
        question: "Create a list named arr with values [3, 5, 7].",
        answer: "arr = [3, 5, 7]",
        hint: "Use square brackets to enclose comma-separated values.",
        alternatives: []
    },
    {
        category: "lists",
        question: "Initialize list arr of size 5 with a default value of 0.",
        answer: "arr = [0] * 5",
        hint: "Multiply a list by a number to repeat the value.",
        alternatives: []
    },
    {
        category: "lists",
        question: "Add 42 to the end of list arr.",
        answer: "arr.append(42)",
        hint: "Use append() to add to the end.",
        alternatives: []
    },
    {
        category: "lists",
        question: "Insert 77 at index 2 of arr.",
        answer: "arr.insert(2, 77)",
        hint: "Use insert(index, value) to add at a specific position.",
        alternatives: []
    },
    {
        category: "lists",
        question: "Unpack [4, 5, 6] into a, b, c.",
        answer: "a, b, c = [4, 5, 6]",
        hint: "Unpack using multiple assignment.",
        alternatives: ["a, b, c = (4, 5, 6)"]
    },
    {
        category: "lists",
        question: "Get the 3rd element from list arr",
        answer: "arr[2]",
        hint: "Indexing starts from 0.",
        alternatives: []
    },
    {
        category: "lists",
        question: "Get the last element from list arr",
        answer: "arr[-1]",
        hint: "Use negative indexing to count from the end.",
        alternatives: []
    },
    {
        category: "lists",
        question: "Get the first 4 elements from list arr",
        answer: "arr[0:4]",
        hint: "Use slicing with arr[start:end].",
        alternatives: []
    },
    {
        category: "lists",
        question: "Reverse list arr",
        answer: "arr.reverse()",
        hint: "Use reverse() to modify the list in place.",
        alternatives: []
    },
    {
        category: "lists",
        question: "Sort list arr = [5, 4, 7, 3, 9] in ascending order",
        answer: "arr.sort()",
        hint: "Use sort() to sort in place.",
        alternatives: []
    },
    {
        category: "lists",
        question: "Sort list arr = ['bob', 'alice', 'jane', 'doe'] in descending order",
        answer: "arr.sort(reverse=True)",
        hint: "Pass reverse=True to sort in descending order.",
        alternatives: []
    },
    {
        category: "lists",
        question: "Sort list arr = ['bob', 'alice', 'jane', 'doe'] by length of strings",
        answer: "arr.sort(key=lambda x: len(x))",
        hint: "Use a lambda for custom sort key.",
        alternatives: []
    },
    {
        category: "lists",
        question: "Get the length of list arr",
        answer: "len(arr)",
        hint: "Use len() to count the number of elements.",
        alternatives: []
    },
    {
        category: "lists",
        question: "Use list comprehension to create a list arr of elements 1 to 5",
        answer: "arr = [i for i in range(1, 6)]",
        hint: "List comprehension syntax is [expression for item in iterable].",
        alternatives: []
    },
    {
        category: "lists",
        question: "Create a 3 x 4 list named arr filled with zeros",
        answer: "arr = [[0] * 4 for i in range(3)]",
        hint: "Use nested list comprehension to build a 2D list.",
        alternatives: []
    },
    {
        category: "lists",
        question: "Get the 2, 3 element from the 2d list named arr",
        answer: "arr[2][3]",
        hint: "Use row index first, then column index.",
        alternatives: []
    },
    {
        category: "lists",
        question: "Insert 2 into list named arr at index 3",
        answer: "arr.insert(3, 2)",
        hint: "Use the insert() method",
        alternatives: []
    },
    {
        category: "lists",
        question: "Add the number 6 to the end of a list called 'nums':",
        answer: "nums.append(6)",
        hint: "Use the append() method to add an element to the end of a list.",
        alternatives: []
    },
    {
        category: "lists",
        question: "Get the length of a list called 'my_list':",
        answer: "len(my_list)",
        hint: "Use the len() function to get the number of elements in a list.",
        alternatives: []
    },
    {
        category: "lists",
        question: "Get the max element in a list called 'arr'",
        answer: "max(arr)",
        hint: "Use max function.",
        alternatives: []
    },
    
    // Dictionaries
    {
        category: "dictionaries",
        question: "Create a dictionary with keys 'name' and 'age', with values 'Alice' and 25:",
        answer: "my_dict = {'name': 'Alice', 'age': 25}",
        hint: "Use curly braces {} with key: value pairs separated by commas.",
        alternatives: ["person = {'name': 'Alice', 'age': 25}", "my_dict = {\"name\": \"Alice\", \"age\": 25}"]
    },
    {
        category: "dictionaries",
        question: "Add a new key-value pair 'city': 'New York' to a dictionary called 'person':",
        answer: "person['city'] = 'New York'",
        hint: "Use square bracket notation to add or update dictionary values.",
        alternatives: ["person[\"city\"] = \"New York\""]
    },
    {
        category: "dictionaries",
        question: "Get all keys from a dictionary called 'data':",
        answer: "data.keys()",
        hint: "Use the keys() method to get all dictionary keys.",
        alternatives: ["list(data.keys())"]
    },
    {
        category: "dictionaries",
        question: "Check if a key 'score' exists in a dictionary called 'student':",
        answer: "'score' in student",
        hint: "Use the 'in' operator to check if a key exists in a dictionary.",
        alternatives: ["\"score\" in student"]
    },

    // Stacks
    {
        category: "stacks",
        question: "Create an empty stack using a list.",
        answer: "stack = []",
        hint: "Stacks can be represented by lists.",
        alternatives: []
    },
    {
        category: "stacks",
        question: "Push 5 onto stack using list.",
        answer: "stack.append(5)",
        hint: "Use append to push onto the stack.",
        alternatives: []
    },
    {
        category: "stacks",
        question: "Pop the top element from the stack using list.",
        answer: "stack.pop()",
        hint: "Use pop() to remove the top of the stack.",
        alternatives: []
    },
    {
        category: "stacks",
        question: "Peek at the top of the stack without removing it.",
        answer: "stack[-1]",
        hint: "Use indexing to see the last element.",
        alternatives: []
    },
    {
        category: "stacks",
        question: "Check if the stack is empty.",
        answer: "len(stack) == 0",
        hint: "Check the stack’s length.",
        alternatives: ["not stack"]
    },
    {
        category: "stacks",
        question: "Import deque from collections for a stack.",
        answer: "from collections import deque",
        hint: "deque can also be used as a stack.",
        alternatives: []
    },
    {
        category: "stacks",
        question: "Create an empty stack using deque.",
        answer: "stack = deque()",
        hint: "Initialize a deque for stack operations.",
        alternatives: []
    },
    {
        category: "stacks",
        question: "Push 10 onto a deque stack.",
        answer: "stack.append(10)",
        hint: "Use append() just like with lists.",
        alternatives: []
    },
    {
        category: "stacks",
        question: "Pop the top element from a deque stack.",
        answer: "stack.pop()",
        hint: "Use pop() for LIFO behavior with deque.",
        alternatives: []
    },

    // Queues
    {
        category: "queues",
        question: "Import deque from collections.",
        answer: "from collections import deque",
        hint: "Use collections for efficient queue implementation.",
        alternatives: []
    },
    {
        category: "queues",
        question: "Initialize an empty queue using deque.",
        answer: "q = deque()",
        hint: "Call deque() to make a queue.",
        alternatives: []
    },
    {
        category: "queues",
        question: "Add value 5 to the end of queue q.",
        answer: "q.append(5)",
        hint: "Use append() to add to the back of deque.",
        alternatives: []
    },
    {
        category: "queues",
        question: "Remove and return the front value from queue q.",
        answer: "q.popleft()",
        hint: "Use popleft() for FIFO behavior.",
        alternatives: []
    },
    {
        category: "queues",
        question: "Check if queue q is empty.",
        answer: "len(q) == 0",
        hint: "Check the length of the queue.",
        alternatives: ["not q"]
    },
    {
        category: "queues",
        question: "Peek at the front of the queue without removing it.",
        answer: "q[0]",
        hint: "Use indexing to access the front element.",
        alternatives: []
    },
    {
        category: "queues",
        question: "Get the length of the queue q.",
        answer: "len(q)",
        hint: "Use len() to get the number of elements.",
        alternatives: []
    },
    {
        category: "queues",
        question: "Add 10 to the front of the deque queue q.",
        answer: "q.appendleft(10)",
        hint: "appendleft adds to the front of the deque.",
        alternatives: []
    },
    {
        category: "queues",
        question: "Remove and return the last element of queue q.",
        answer: "q.pop()",
        hint: "Use pop() to remove from the back.",
        alternatives: []
    },
    {
        category: "queues",
        question: "Import the standard thread-safe FIFO queue.",
        answer: "from queue import Queue",
        hint: "Use the queue module for thread-safe FIFO.",
        alternatives: []
    },
    {
        category: "queues",
        question: "Create a Queue object named q.",
        answer: "q = Queue()",
        hint: "Call Queue() to make a thread-safe FIFO queue.",
        alternatives: []
    },
    {
        category: "queues",
        question: "Add 42 to the queue q using put.",
        answer: "q.put(42)",
        hint: "Use put() to enqueue.",
        alternatives: []
    },
    {
        category: "queues",
        question: "Remove and return the front of queue q using get.",
        answer: "q.get()",
        hint: "Use get() to dequeue from a thread-safe queue.",
        alternatives: []
    },
    {
        category: "queues",
        question: "Check if queue q is empty using Queue class.",
        answer: "q.empty()",
        hint: "Use empty() method from queue.Queue.",
        alternatives: []
    },

    
    // Strings
    {
        category: "strings",
        question: "Split a string 'hello world python' by spaces:",
        answer: "'hello world python'.split()",
        hint: "Use the split() method. Without arguments, it splits by whitespace.",
        alternatives: ["'hello world python'.split(' ')", "\"hello world python\".split()"]
    },
    {
        category: "strings",
        question: "Join a list of strings ['a', 'b', 'c'] with commas:",
        answer: "','.join(['a', 'b', 'c'])",
        hint: "Use the join() method on the separator string.",
        alternatives: ["\",\".join(['a', 'b', 'c'])", "','.join([\"a\", \"b\", \"c\"])"]
    },
    {
        category: "strings",
        question: "Convert a string 'Hello World' to lowercase:",
        answer: "'Hello World'.lower()",
        hint: "Use the lower() method to convert to lowercase.",
        alternatives: ["\"Hello World\".lower()"]
    },
    
    // Functions
    {
        category: "functions",
        question: "Define a function called multiply that takes a and b.",
        answer: "def multiply(a, b):",
        hint: "Use def to declare a function.",
        alternatives: []
    },
    {
        category: "functions",
        question: "Define a function called 'add_numbers' that takes two parameters and returns their sum:",
        answer: "def add_numbers(a, b):\n    return a + b",
        hint: "Use 'def' keyword, followed by function name, parameters in parentheses, colon, and indented body.",
        alternatives: ["def add_numbers(x, y):\n    return x + y"]
    },
    {
        category: "functions",
        question: "Define a function with a default parameter value. Function 'greet' with parameter 'name' defaulting to 'World':",
        answer: "def greet(name='World'):\n    print(f'Hello, {name}!')",
        hint: "Set default values in the parameter list using = operator.",
        alternatives: ["def greet(name=\"World\"):\n    print(f\"Hello, {name}!\")"]
    },
    
    // Conditionals
    {
        category: "conditionals",
        question: "Write an if-elif-else statement that checks if a number 'x' is positive, negative, or zero:",
        answer: "if x > 0:\n    print('positive')\nelif x < 0:\n    print('negative')\nelse:\n    print('zero')",
        hint: "Use if, elif, and else with proper indentation. Check x > 0, x < 0, and the remaining case.",
        alternatives: ["if x > 0:\n    print(\"positive\")\nelif x < 0:\n    print(\"negative\")\nelse:\n    print(\"zero\")"]
    },
    {
        category: "conditionals",
        question: "Write a conditional expression (ternary operator) that assigns 'even' or 'odd' to a variable 'result' based on if number 'n' is even:",
        answer: "result = 'even' if n % 2 == 0 else 'odd'",
        hint: "Use the format: value_if_true if condition else value_if_false",
        alternatives: ["result = \"even\" if n % 2 == 0 else \"odd\""]
    },

    // Classes
    {
        category: "classes",
        question: "Define a class named Dog.",
        answer: "class Dog:",
        hint: "Use class followed by name and colon.",
        alternatives: []
    },
    {
        category: "classes",
        question: "Write an __init__ method that takes self and nums.",
        answer: "def __init__(self, nums):",
        hint: "__init__ is the constructor method in Python.",
        alternatives: []
    },

    // Sets
    {
        category: "sets",
        question: "Create a set containing the numbers 1, 2, 3:",
        answer: "my_set = {1, 2, 3}",
        hint: "Use curly braces {} with elements separated by commas.",
        alternatives: ["s = {1, 2, 3}", "numbers = {1, 2, 3}"]
    },
    {
        category: "sets",
        question: "Add the number 4 to a set called 'my_set':",
        answer: "my_set.add(4)",
        hint: "Use the add() method to add an element to a set.",
        alternatives: []
    },
    {
        category: "sets",
        question: "Remove the number 2 from a set called 'my_set' (assuming it exists):",
        answer: "my_set.remove(2)",
        hint: "Use remove() to delete an element. It raises an error if element doesn't exist.",
        alternatives: ["my_set.discard(2)"]
    },
    {
        category: "sets",
        question: "Check if the number 5 is in a set called 'my_set':",
        answer: "5 in my_set",
        hint: "Use the 'in' operator to check membership in a set.",
        alternatives: []
    },
    
    // Deque
    {
        category: "deque",
        question: "Import deque from collections:",
        answer: "from collections import deque",
        hint: "Import deque from the collections module.",
        alternatives: []
    },
    {
        category: "deque",
        question: "Create a deque with elements [1, 2, 3]:",
        answer: "dq = deque([1, 2, 3])",
        hint: "Pass a list to the deque constructor.",
        alternatives: ["my_deque = deque([1, 2, 3])", "d = deque([1, 2, 3])"]
    },
    {
        category: "deque",
        question: "Add element 4 to the right end of a deque called 'dq':",
        answer: "dq.append(4)",
        hint: "Use append() to add to the right end of a deque.",
        alternatives: []
    },
    {
        category: "deque",
        question: "Add element 0 to the left end of a deque called 'dq':",
        answer: "dq.appendleft(0)",
        hint: "Use appendleft() to add to the left end of a deque.",
        alternatives: []
    },
    {
        category: "deque",
        question: "Remove and return the rightmost element from a deque called 'dq':",
        answer: "dq.pop()",
        hint: "Use pop() to remove from the right end of a deque.",
        alternatives: []
    },
    {
        category: "deque",
        question: "Remove and return the leftmost element from a deque called 'dq':",
        answer: "dq.popleft()",
        hint: "Use popleft() to remove from the left end of a deque.",
        alternatives: []
    },
    
    // Heaps
    {
        category: "heaps",
        question: "Import the heapq module:",
        answer: "import heapq",
        hint: "Import the entire heapq module.",
        alternatives: []
    },
    {
        category: "heaps",
        question: "Convert a list 'nums' into a heap in-place:",
        answer: "heapq.heapify(nums)",
        hint: "Use heapify() to convert a list into a heap structure.",
        alternatives: []
    },
    {
        category: "heaps",
        question: "Push element 5 onto a heap called 'heap':",
        answer: "heapq.heappush(heap, 5)",
        hint: "Use heappush() to add an element to the heap.",
        alternatives: []
    },
    {
        category: "heaps",
        question: "Pop and return the smallest element from a heap called 'heap':",
        answer: "heapq.heappop(heap)",
        hint: "Use heappop() to remove and return the smallest element.",
        alternatives: []
    },
    {
        category: "heaps",
        question: "Get the 3 smallest elements from a list 'nums' without modifying it:",
        answer: "heapq.nsmallest(3, nums)",
        hint: "Use nsmallest() to get the n smallest elements from an iterable.",
        alternatives: []
    },
    {
        category: "heaps",
        question: "Get the 2 largest elements from a list 'nums' without modifying it:",
        answer: "heapq.nlargest(2, nums)",
        hint: "Use nlargest() to get the n largest elements from an iterable.",
        alternatives: []
    },

    // Math
    {
        category: "math",
        question: "Round down 7 divided by 2.",
        answer: "math.floor(7 / 2)",
        hint: "Use math.floor() for rounding down.",
        alternatives: ["7 // 2"]
    },
    {
        category: "math",
        question: "Round up 5 divided by 3.",
        answer: "math.ceil(5 / 3)",
        hint: "Use math.ceil() for rounding up.",
        alternatives: []
    },
    {
        category: "math",
        question: "Find the square root of 9.",
        answer: "math.sqrt(9)",
        hint: "Use math.sqrt() to compute square roots.",
        alternatives: []
    },
    {
        category: "math",
        question: "Take 2 to the power of 3.",
        answer: "math.pow(2, 3)",
        hint: "Use math.pow(base, exponent).",
        alternatives: []
    },
    {
        category: "math",
        question: "Take 7 to the modulo of 4.",
        answer: "7 % 4",
        hint: "Use % to get remainder.",
        alternatives: []
    },
    {
        category: "math",
        question: "Set a variable x to infinity.",
        answer: "x = float(\"inf\")",
        hint: "Use float('inf') for infinity.",
        alternatives: []
    },
    {
        category: "math",
        question: "Set a variable x to -infinity.",
        answer: "x = float(\"-inf\")",
        hint: "Use float('-inf') for negative infinity.",
        alternatives: []
    },
    {
        category: "math",
        question: "Take the min of variables a and b.",
        answer: "min(a, b)",
        hint: "Use min() to find the smaller of two values.",
        alternatives: []
    },
    {
        category: "math",
        question: "Take the max of variables a and b.",
        answer: "max(a, b)",
        hint: "Use max() to find the larger of two values.",
        alternatives: []
    },
];