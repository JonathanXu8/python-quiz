from flask import Flask, render_template, request, redirect, url_for, session
import random
import math
from collections import defaultdict


app = Flask(__name__)
app.secret_key = "your_secret_key"


# ------------------ User History ------------------ #
question_stats = defaultdict(lambda: {"correct": 0, "incorrect": 0})

# ------------------ Question Generators ------------------ #

#  -- variables -- #
def generate_variable_question():
    val = random.choice([42, 0.5, '"hello"', "None"])
    return "generate_variable_question", f"Assign the value {val} to a variable named x.", f"x = {val}"

def generate_multiple_assign_question():
    a, b = random.randint(1, 9), random.choice(['"a"', '"b"', '"hello"'])
    return "generate_multiple_assign_question", f"Assign {a} to a and {b} to b in a single line.", f"a, b = {a}, {b}"

def generate_increment_question():
    var = random.choice(["n", "x", "count"])
    return "generate_increment_question", f"Increment {var} by 1 using the assignment operator.", f"{var} += 1"

# -- conditionals -- #

# -- if statements -- #
def generate_if_question():
    val = random.randint(1, 20)
    op = random.choice(["!=", "==", ">", "<", ">=", "<="])
    return "generate_if_question", f"Write an if-statement that checks if x {op} {val}.", f"if x {op} {val}:"

def generate_elif_else_question():
    a, b = random.randint(1, 5), random.randint(6, 10)
    return "generate_elif_else_question", "Write an if-elif-else block: if n > {}, elif n == {}, else.".format(a, b), (
        f"if n > {a}:\n\tpass\nelif n == {b}:\n\tpass\nelse:\n\tpass"
    )

# -- loops -- #
def generate_loop_question():
    start = random.randint(0, 3)
    end = start + random.randint(2, 5)
    return "generate_loop_question", f"Write a for loop from {start} to {end - 1}.", f"for i in range({start}, {end}):"

def generate_reverse_loop_question():
    start = random.randint(5, 10)
    end = random.randint(1, 4)
    return "generate_reverse_loop_question", f"Write a for loop that counts down from {start} to {end} inclusive.", f"for i in range({start}, {end-1}, -1):"

def generate_loop_arr():
    return "generate_loop_arr", "Loop through all the elements for list arr", "for x in arr:"

def generate_loop_arrindex():
    return "generate_loop_arrindex", "Loop through all the elements with their indices for list arr", "for x, i in enumerate(arr):"

def generate_loop_zip():
    return "generate_loop_zip", "Loop through arrays nums1 and nums2 simultaneously with unpacking", "for x, y in zip(nums1, nums2):"

def generate_loop_dict():
    return "generate_loop_dict", "Loop the keys of dictionary myMap ", "for key in myMap:"

def generate_loop_dictvalues():
    return "generate_loop_dictvalues", "Loop the values of dictionary myMap ", "for val in myMap.values():"

def generate_loop_dictkeyvalues():
    return "generate_loop_dictkeyvalues", "Loop the keys and values of dictionary myMap ", "for key, val in myMap.items():"

# -- math -- #
def generate_math_floor_question():
    a, b = random.randint(1, 9), random.randint(1, 9)
    return "generate_math_floor_question", f"Round down {a} divided by {b}.", f"math.floor({a} / {b})"

def generate_math_ceil_question():
    a, b = random.randint(1, 9), random.randint(1, 9)
    return "generate_math_ceil_question", f"Round up {a} divided by {b}.", f"math.ceil({a} / {b})"

def generate_math_sqrt_question():
    a = random.randint(1, 9)
    return "generate_math_sqrt_question", f"Find the square root of {a}.", f"math.sqrt({a})"

def generate_math_pow_question():
    a, b = random.randint(1, 9), random.randint(1, 9)
    return "generate_math_pow_question", f"Take {a} to the power of  {b}.", f"math.pow({a}, {b})"

def generate_math_mod_question():
    a, b = random.randint(1, 9), random.randint(1, 9)
    return "generate_math_mod_question", f"Take {a} to the modulo of {b}.", f"{a} % {b}"

def generate_math_fmod_question():
    a, b = -random.randint(5, 15), random.randint(1, 5)
    return "generate_math_fmod_question", f"Use math.fmod to compute {a} % {b}.", f"math.fmod({a}, {b})"

def genereate_math_inf_question():
    return "genereate_math_inf_question" , "Set a variable x to infinity", 'x = float("inf")'

def genereate_math_neginf_question():
    return "genereate_math_neginf_question" , "Set a variable x to -infinity", 'x = float("-inf")'

def generate_math_min():
    return "generate_math_min", "take the min of variables a and b", "min(a, b)"

def generate_math_min():
    return "generate_math_max", "take the max of variables a and b", "max(a, b)"

# -- arrays -- #
def generate_list_empty():
    return "generate_list_empty", "Create an empty list named arr", "arr = []"

def generate_list_question():
    size = random.randint(3, 4)  # this picks either 3 or 4
    values = random.sample(range(1, 10), size)
    return "generate_list_question", f"Create a list named arr with values {values}.", f"arr = {values}"

def generate_list_filled():
    n, val = random.randint(10, 99), random.randint(10, 99)
    return "generate_list_filled", f"Initialize list arr of size {n} with a default value of a {val}.", f"arr = [{val}] * {n}"

def generate_list_add():
    val = random.randint(10, 99)
    return "generate_list_add", f"Add {val} to the end of list arr.", f"arr.append({val})"

def generate_list_insert_question():
    index, val = random.randint(0, 3), random.randint(10, 99)
    return "generate_list_insert_question", f"Insert {val} at index {index} of arr.", f"arr.insert({index}, {val})"

def generate_list_unpack_question():
    values = random.sample(range(1, 10), 3)
    return "generate_list_unpack_question", f"Unpack {values} into a, b, c.", f"a, b, c = {values}"

def generate_list_element():
    val = random.randint(10, 99)
    return "generate_list_element", f"Get the {val}th element from list arr", f"arr[{val}]"

def generate_list_last():
    return "generate_list_last", f"Get the last element from list arr", "arr[-1]"

def generate_list_range():
    n = random.randint(3, 10)
    return "generate_list_last", f"Get the first {n} elements from list arr", f"arr[0:{n}]"

def generate_list_reverse():
    return "generate_list_reverse", f"Reverse list arr", "arr.reverse()"

def generate_list_sortasc():
    lst = random.choice([[5, 4, 7, 3, 9], ["bob", "alice", "jane", "doe"]])
    return "generate_list_sortasc", f"Sort list arr = {lst} in ascending order", "arr.sort()"

def generate_list_sortdes():
    lst = random.choice([[5, 4, 7, 3, 9], ["bob", "alice", "jane", "doe"]])
    return "generate_list_sortdes", f"Sort list arr = {lst} in descending order", "arr.sort(reverse=True)"

def generate_list_customsort():
    lst =  ["bob", "alice", "jane", "doe"]
    return "generate_list_customsort", f"Sort list arr = {lst} by length of strings", "arr.sort(key=lambda x: len(x))"

def generate_list_len():
    return "generate_list_len", "Get the length of list arr", "len(arr)"

def generate_list_comprehension():
    start, end = random.randint(0, 3), random.randint(5, 10)
    return "generate_list_comprehension", f"Use list comprehension to create a list arr of elements {start} to {end}", f"arr = [i for i in range({start}, {end+1})]"

def generate_list_2d():
    n, m = random.randint(2, 10), random.randint(2, 10)
    return "generate_list_2d", f"Create a {n} x {m} list named arr filled with zeros", f"arr = [[0] * {m} for i in range({n})]"

def generate_list_2dget():
    n, m = random.randint(2, 10), random.randint(2, 10)
    return "generate_list_2dget", f"Get the {n}, {m} element from the 2d list named arr", f"arr[{n}][{m}]"


# -- stacks -- #
def generate_stack_empty():
    return "generate_stack_empty", "Create an stack named s", "s = []"

def generate_stack_push():
    val = random.randint(10, 99)
    return "generate_stack_push", f"Push {val} to the end of stack s.", f"s.append({val})"

def generate_stack_pop():
    val = random.randint(10, 99)
    return "generate_stack_pop", f"Pop the top value off stack s.", f"s.pop()"

# -- strings -- #
def generate_string_slice_question():
    return "generate_string_slice_question", "Print the first two characters of string s.", "print(s[0:2])"

def generate_string_add_question():
    suffix = random.choice(["'xyz'", "'123'", "'abc'"])
    return "generate_string_add_question", f"Append {suffix} to string s using +=.", f"s += {suffix}"

def generate_ord_question():
    char = random.choice(['a', 'b', 'c', 'z'])
    return "generate_ord_question", f"Get the ASCII value of '{char}'.", f"ord('{char}')"

def generate_join_question():
    parts = ["'a'", "'b'", "'c'"]
    return "generate_join_question", "Join ['a', 'b', 'c'] into a single string.", "''.join(['a', 'b', 'c'])"

############### ADD THE FANCY STRING TO TUPLE CHAR FREQUENCIES STUFF HERE ##########################

# -- queues -- #

def generate_deque_init_question():
    return "generate_deque_init_question", "Import deque.", "from collections import deque"

def generate_deque_create():
    return "generate_deque_create", "Initialize a deque named q", "q = deque()"

def generate_deque_appendright():
    val = random.randint(1, 9)
    return "generate_deque_appendright", f"Append {val} to the right of deque q.", f"q.append({val})"

def generate_deque_appendleft_question():
    val = random.randint(1, 9)
    return "generate_deque_appendleft_question", f"Append {val} to the left of deque q.", f"q.appendleft({val})"

def generate_deque_popright():
    return "generate_deque_popright", "Pop the right value from deque q", "q.pop()"

def generate_deque_popleft():
    return "generate_deque_popleft", "Pop the left value from deque q", "q.popleft()"

# -- hashsets -- #

def generate_set_init():
    return "generate_set_init", "Initialize a set named mySet", "mySet = set()"

def generate_set_add_question():
    val = random.randint(1, 9)
    return "generate_set_add_question", f"Add {val} to set mySet.", f"mySet.add({val})"

def generate_set_remove():
    val = random.randint(1, 9)
    return "generate_set_remove", f"Remove {val} from set mySet.", f"mySet.remove({val})"

def generate_set_contains():
    val = random.randint(1, 9)
    return "generate_set_contains", f"Check if set mySet contains {val}.", f"{val} in mySet"

def generate_set_fromlst():
    lst =  random.sample(range(1, 10), 3)
    return "generate_set_fromlst", f"convert list {lst} to a set", f"set({lst})"

def generate_set_comp_question():
    end = random.randint(3, 6)
    return "generate_set_comp_question", f"Create a set with values from 0 to {end - 1} using set comprehension.", f"{{i for i in range({end})}}"

def generate_set_to_graph():
    return "generate_set_to_graph", "Convert set mySet to a list", "list(mySet)"


# -- hashmaps -- #

def generate_hashset_init():
    return "generate_hashset_init", "Initialize an empty dictionary named myMap", "myMap = {}"

def generate_hashset_filled():
    key = ['"bob"', '"alice"']
    val = [random.randint(1, 10), random.randint(50, 100)]
    return "generate_hashset_filled", f"Initialize a dictiony named myMap with the key value pairs ({key[0]}, {val[0]}), ({key[1]}, {val[1]})", f"myMap = {{{key[0]}: {val[0]}, {key[1]}: {val[1]}}}"

def generate_dict_add_question():
    key = random.choice(['"bob"', '"alice"'])
    val = random.randint(50, 100)
    return "generate_dict_add_question", f"Add key {key} with value {val} to dict myMap.", f"myMap[{key}] = {val}"

def generate_hashset_remove():
    key = random.choice(['"bob"', '"alice"'])
    return "generate_hashset_remove", f"Remove {key} from dictionary myMap.", f"myMap.pop({key})"

def generate_hashset_contains():
    key = random.choice(['"bob"', '"alice"'])
    return "generate_hashset_contains", f"Check if dictionary myMap contains key {key}.", f"{key} in myMap"

def generate_dict_comp_question():
    end = random.randint(3, 5)
    return "generate_dict_comp_question", f"Create a dict mapping i to 2*i for i in 0 to {end - 1}.", f"{{i: 2*i for i in range({end})}}"

def generate_dict_equals():
    return "generate_dict_equals", "Compare 2 dictionaries a and b for equality", "a == b"

# -- tuples -- #
def generate_tuple_question():
    values = tuple(random.sample(range(1, 9), 3))
    return "generate_tuple_question", f"Create a tuple tup with values {values}.", f"tup = {values}"

def generate_tuple_key_question():
    key = (random.randint(1, 3), random.randint(4, 6))
    return "generate_tuple_key_question", f"Use tuple {key} as a key with value 3 at initialize myMap.", f"myMap = {{{key}: 3}}"

def generate_tuple_unpack_question():
    values = random.sample(range(1, 10), 3)
    prompt = f"Given the tuple `tup = {tuple(values)}`, unpack it into variables a, b, and c."
    correct_answers = [
        f"a, b, c = tup",
        f"a, b, c = {tuple(values)}",
        f"(a, b, c) = {tuple(values)}"
    ]
    return "generate_tuple_unpack_question", prompt, correct_answers[0]

# -- heaps -- #

def generate_heapq_import_question():
    return "generate_heapq_import_question", "Import heaps.", "import heapq"

def generate_heap_init_question():
    prompt = "Create an empty min heap named `minHeap`."
    correct_answers = [
        "minHeap = []",
        "minHeap=[]"
    ]
    return "generate_heap_init_question", prompt, correct_answers[0]

def generate_heap_push_question():
    val = random.randint(1, 20)
    return "generate_heap_push_question", f"Push {val} into minHeap.", f"heapq.heappush(minHeap, {val})"

def generate_maxheap_push_question():
    val = random.randint(1, 20)
    return "generate_maxheap_push_question", f"Push {val} into maxHeap.", f"heapq.heappush(maxHeap, -{val})"

def generate_minheap_peek_question():
    values = sorted(random.sample(range(1, 20), 4))
    prompt = (
        f"Given a min heap named `minHeap` containing the values {values}, "
        f"get the smallest value without removing it (peek)."
    )
    correct_answers = [
        "minHeap[0]"
    ]
    return "generate_minheap_peek_question", prompt, correct_answers[0]

def generate_maxheap_peek_question():
    values = sorted(random.sample(range(1, 20), 4))
    prompt = (
        f"Given a max heap named `maxHeap` containing the values {values}, "
        f"get the largest value without removing it (peek)."
    )
    correct_answers = [
        "-1 * maxHeap[0]"
    ]
    return "generate_minheap_peek_question", prompt, correct_answers[0]

def generate_minheap_pop_question():
    values = sorted(random.sample(range(1, 20), 4))
    prompt = (
        f"Given a heap named `h` containing the values {values}, "
        f"write a line of code that removes and returns the top value (pop)."
    )
    correct_answers = [
        "heapq.heappop(h)"
    ]
    return "generate_minheap_pop_question", prompt, correct_answers[0]

def generate_heapify_question():
    return "generate_heapify_question", "Turn arr into a heap in-place.", "heapq.heapify(arr)"

# -- functions -- #
def generate_function_question():
    name = random.choice(["multiply", "add", "process"])
    return "generate_function_question", f"Define a function called {name} that takes a and b.", f"def {name}(a, b):"

# -- classes -- #
def generate_class_question():
    cls = random.choice(["MyClass", "Dog", "Car"])
    return "generate_class_question", f"Define a class named {cls}.", f"class {cls}:"

def generate_class_init_question():
    var = random.choice(["nums", "values"])
    return "generate_class_init_question", f"Write an __init__ method that takes self and {var}.", f"def __init__(self, {var}):"

# Register generators
generators = [
    generate_variable_question,
    generate_multiple_assign_question,
    generate_increment_question,
    generate_if_question,
    #generate_elif_else_question,
    generate_loop_question,
    generate_reverse_loop_question,
    generate_loop_arr,
    generate_loop_arrindex,
    generate_loop_zip,
    generate_loop_dict,
    generate_loop_dictvalues,
    generate_loop_dictkeyvalues,
    generate_math_floor_question,
    generate_math_ceil_question,
    generate_math_sqrt_question,
    generate_math_pow_question,
    generate_math_mod_question,
    generate_math_fmod_question,
    genereate_math_inf_question,
    genereate_math_neginf_question,
    generate_list_empty,
    generate_list_question,
    generate_list_filled,
    generate_list_add,
    generate_list_insert_question,
    generate_list_unpack_question,
    generate_list_element,
    generate_list_last,
    generate_list_range,
    generate_list_reverse,
    generate_list_sortasc,
    generate_list_sortdes,
    generate_list_customsort,
    generate_list_len,
    generate_list_comprehension,
    generate_list_2d,
    generate_list_2dget,
    generate_stack_empty,
    generate_stack_push,
    generate_stack_pop,
    generate_string_slice_question,
    generate_string_add_question,
    generate_ord_question,
    generate_join_question,
    generate_deque_init_question,
    generate_deque_create,
    generate_deque_appendright,
    generate_deque_appendleft_question,
    generate_deque_popright,
    generate_deque_popleft,
    generate_set_init,
    generate_set_add_question,
    generate_set_remove,
    generate_set_contains,
    generate_set_fromlst,
    generate_set_comp_question,
    generate_hashset_init,
    generate_hashset_filled,
    generate_dict_add_question,
    generate_hashset_remove,
    generate_hashset_contains,
    generate_dict_comp_question,
    generate_tuple_question,
    generate_tuple_key_question,
    generate_tuple_unpack_question,
    generate_heapq_import_question,
    generate_heap_init_question,
    generate_heap_push_question,
    generate_maxheap_push_question,
    generate_minheap_peek_question,
    generate_maxheap_peek_question,
    generate_minheap_pop_question,
    generate_heapify_question,
    generate_function_question,
    generate_class_question,
    generate_class_init_question,
]

# ------------------ Routes ------------------ #
@app.route("/", methods=["GET", "POST"])
def quiz():
    if request.method == "POST":
        user_answer = request.form["answer"].strip()
        
        # If showing solution and user clicks OK, clear all relevant session keys
        if session.get("show_solution", False):
            session.pop("last_answer", None)
            session.pop("last_expected", None)
            session.pop("feedback", None)
            session["show_solution"] = False
            return redirect(url_for("quiz"))

        expected_answers = session.get("expected_answers", [])
        question_key = session.get("question_key")
        session["total"] = session.get("total", 0) + 1

        if any(user_answer == ans for ans in expected_answers):
            session["score"] = session.get("score", 0) + 1
            question_stats[question_key]["correct"] += 1
            session["feedback"] = "✅ Correct!"
            # Clear previous answer & expected because answer was correct
            session.pop("last_answer", None)
            session.pop("last_expected", None)
            session["show_solution"] = False
        else:
            question_stats[question_key]["incorrect"] += 1
            session["feedback"] = "❌ Incorrect."
            session["last_answer"] = user_answer
            session["last_expected"] = expected_answers[0] if expected_answers else ""
            session["show_solution"] = True
            return redirect(url_for("quiz"))

        return redirect(url_for("quiz"))

    # GET request: render page with current or new question

    # If currently showing solution (user must click OK)
    if session.get("show_solution", False):
        return render_template(
            "quiz.html",
            question=session.get("last_prompt", ""),
            user_answer=session.get("last_answer", ""),
            expected=session.get("last_expected", ""),
            show_solution=True,
            feedback=session.get("feedback", ""),
            score=session.get("score", 0),
            total=session.get("total", 0)
        )

    # Otherwise pick new question weighted by past results
    def weighted_choice():
        weights = []
        for gen in generators:
            key = gen.__name__
            stats = question_stats[key]
            wrong = stats["incorrect"] + 1
            right = stats["correct"] + 1
            weights.append(wrong / right)
        total_weight = sum(weights)
        r = random.uniform(0, total_weight)
        upto = 0
        for i, weight in enumerate(weights):
            if upto + weight >= r:
                return generators[i]
            upto += weight
        return random.choice(generators)

    gen = weighted_choice()
    key, prompt, answers = gen()
    # Normalize answers to list
    answers = answers if isinstance(answers, list) else [answers]

    session["expected_answers"] = answers
    session["expected_answer"] = answers[0]
    session["question_key"] = key
    session["last_prompt"] = prompt
    session["show_solution"] = False

    return render_template(
        "quiz.html",
        question=prompt,
        user_answer="",
        expected="",
        show_solution=False,
        feedback=session.pop("feedback", ""),
        score=session.get("score", 0),
        total=session.get("total", 0)
    )

@app.route("/reset")
def reset():
    session.clear()  # Clears all session data for this user
    return redirect(url_for("quiz"))


if __name__ == "__main__":
    app.run(debug=True)