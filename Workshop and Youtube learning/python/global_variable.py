message = "how you doing?"
def greet():
    message = "How are you?"
    print("message inside function", message)

greet()
print("Message outside function", message)    


# code using global keyword
# message = "how you doing?"
# def greet():
#     global message
#     message = "How are you?"
#     print("message inside function", message)

# greet()
# print("Message outside function", message)    
# u can use above code or this code
# just try to avoid global keyword inside a function whenever possible as it makes our code hard to understand