class Animal:
    def __init__(self) -> None:
        print("Animal class created")

    def WhoIs(self):
        print("Animal")

    def eat(self):
        print("Animal who eats")

class Dog(Animal):
    def __init__(self) -> None:
        Animal.__init__(self)       # child ko through parent class ko element call garney
        # print("Dog is created")
        # pass

    def WhoIs(self):
        print("Type of animal")

    def speak(self):
        print("Dog is barking")

# a = Animal()
# print(a)         # <__main__.Animal object at 0x0000012DE98B6390>

# a.WhoIs()
# a.eat()
# a.speak()        # attribute error

b =Dog()
b.eat()