# abstraction involves simplifying complex systems by modeling classes based on the essential features and 
# hiding unnecessary details
# it allows programmers to focus on the relevant aspects of an object and ignore the irrelevant ones.
# abstract class ko taannw sak dai naw
# derived class bata milxw

# examples

# from abc import ABC, abstractmethod

# class Shape(ABC):
#     @abstractmethod
#     def area(self):
#         pass

# class Circle(Shape):
#     def __init__(self, radius) -> None:
#         self.radius = radius

#     def area(self):
#         return 3.14* self.radius**2
    
# class Rectangle(Shape):
#     def __init__(self, length, width) -> None:
#         self.length = length
#         self.width = width

#     def area(self):
#         return self.length * self.width

# a = Rectangle(5,6)
# a.area
# print("The area of rectangle is", a.length * a.width)    # return aayo bhaney return paxi j xw tei lekh ney

from abc import ABC, abstractmethod

class sushant(ABC):
    @abstractmethod

    def __init__(self, name, height) -> None:
        self.name = name
        self.height = height

    def buero(self):
        print("What up?")

kunwar = sushant("aasu", 5.3)
kunwar.buero()
print(kunwar.height)     # TypeError: Can't instantiate abstract class sushant without an implementation for abstract method '__init__'

