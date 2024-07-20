def printer():
    print("Hello World")

def display_info(func):

    def inner():
        print("Executing", func.__name__, "function")
        func()
        print("Finished execution")

    return inner

decorated_func = display_info(printer)
decorated_func()