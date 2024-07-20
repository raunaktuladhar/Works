# # encapsulation -> bundling data and methods with in a single unit
# # class is an example of encapsulation as it binds all the data members and methods into a single unit

# # single underscore = protected data/can be accesed directly but cant be modified, 
# # =only through the methods or child class
# #  = means equivalent

# # CODE 1

# class encap():
#     def __init__(self) -> None:
#         self._price = 100       # price is a data

#     def show(self):
#         print("The value of a price is:", self._price)

#     def maximumprice(self):
#         print("The max price is {}".format(self._price))

#     def setprice(self, price):
#         self._price = price

# random = encap()
# print(random._price)   # prints 100
# random._price = 200
# print(random._price)   # prints 200

# random.maximumprice()
# # the max price is 200

# creating base class

class Base:
    def __init__(self) -> None:
        self.a = "YO"       # public data or member
        self._c = "Hello"   # protected but u can access


class Derived(Base):         # creating derived class
    def __init__(self) -> None:
        Base.__init__(self)  # calling of base which can access parameters of base class
        print("Calling private member of base class: ")
        print(self._c)

# driver code

obj1 = Base()
# print(obj1.a)
# print(obj1._c)

obj2 = Derived()
# print(obj2.a)