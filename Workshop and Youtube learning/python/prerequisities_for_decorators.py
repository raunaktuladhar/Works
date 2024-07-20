# def inc(x):
#     return x + 1

# def operate(func, x):
#     result = func(x)
#     return result

# print(operate(inc, 3))

# u can also define a function inside a function

# def print_msg(message):
#     greeting = "Hello"

#     def printer():
#         print(greeting, message)

#     printer()

# print_msg("Python is awesome")

# a function can also return another function as a value

def print_msg(message):
    greeting = "Hello"

    def printer():
        print(greeting, message)

    return printer

func = print_msg("Python is awesome")
func()
