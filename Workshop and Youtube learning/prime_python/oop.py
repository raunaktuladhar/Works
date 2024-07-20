# OOP -> Object oriented Programming

# python is based on OOP whereas C# language is procedure oriented programming
# we determine the type of object using type() method

print(type(7))          # we get <class 'int'>

print(type([1,2,3]))    # we get <class 'list'>

# to create own objects use 'class' keyword
# class: user defined objeccts are created using keyword 'class'
# the class is a blueprint that defines the nature of future objects
# from classes , we can construct instances
# an instance is a specific object created from the particular class
# for eg: above we created the object list which was an instance of list object

# create a new object type called DEMO

class DEMO:         # while naming class, first letter always must be capital
    pass

# instance of DEMO
x = DEMO()
print(type(x))      # we get <class '__main__.DEMO'>