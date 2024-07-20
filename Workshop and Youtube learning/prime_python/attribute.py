# inside above class DEMO in oop.py, we only use pass
# but there we can also define class attributes and methods

# attribute -> features
# method -> function

# Examples:
# WAP1: create a class dog. an attribute of a dog may be its breed or its name
# while a dog method maybe defined
# by...the way he/she bark(), method which return the sound.

# the syntax for creating an attibute is
# 1. self.attribute = something
# there is a special method called:
# __init__() -> constructor 


class Dog:
    def __init__(self, breed) -> None:
        self.name = breed

x = Dog(breed="German shephard")
print(x)

# __init__() : this is a special method which is called automatically right after an object has been created
# def __init__(self, breed)
# each attribute in a class definition begins with a reference to the instance of object.
#  By convention named self., the breed is an argument, the value is passed during class instant.
# self.breed = breed
# we created instance of Dog class and can access these atrributes from class like this:

print(x.name)  
# name is breed now