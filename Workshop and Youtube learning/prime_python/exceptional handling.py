# python errors & built in exception
'''
1. when writing a program, we more often not encounter errors
2. error caused by not following the proper structure(syntax) of the language is called syntax error or parssing error
3. error can also occur at runtime & these are called exceptions
Eg: file not found error, dividing by zero, import module error.'''

# python exception handling -> try, except & finally
'''
1. Python has many built-in exceptions which forces your program to output an error when smth in it goes wrong
2. when these exceptions occurs, it causes the current process to stop & passes it to the calling process until it is handled
3. if not handled, our program will crash, an error message is spit out & our program to a sudden, unexpected event.'''

# catching exceptions in python:
'''
1. in python, exception can be handled using a try statement
2. a critical operation which can raise exception is placed inside the try clause and the code that handles exception is placed inside the try clause and the code that handles exception is written in except clause.'''


# a = "one"
# print(a)
# try:
#     print(a+5)
# except:
#     print("An error occured")

# a = "one"
# print(a)
# try:
#     print(a)
# except:
#     print("An error occured")

# many exceptions

# b = 5
# try:
#     print(b) # this will print

# except NameError:
#     print("Variable name b is not defined")
# except:
#     print("Something went wrong")

# try:
#     print("This is exception handling") # this will print

# except:
#     print("sometihng is wrong")
# else:
#     print("there is no any error") # this will print


# finally

# try:
#     print(x)
# except:
#     print("Something went wrong")            # this will print
# finally:
    # print("try except execution completed") # this will print



# try:
#     file = open('one.txt', 'w')
#     try:
#         file.write("Wrong")
#     except:
#         print("Something is wrong")
#     finally:
#         file.close()
#         print("File is closed")
# except:
#     print("File not found")     # this will be printed

# raise exception

y = -5
if(y>0):
    raise Exception("Number should be greater than zero")

z = 'python'
if not type(z) is int:
    raise TypeError("only integers are allowed")
else:
    print('no')