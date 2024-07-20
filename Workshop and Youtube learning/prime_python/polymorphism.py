# polymorphism -> It means having many forms

class Bird:
    def intro(self):
        print("Introduction")

    def fly(self):
        print("Flying")

class Pigeon(Bird):
    def fly(self):
        # method overriding (overloading doesnt support in python)
        print("Pigeons can fly")

class Penguin(Bird):
    def fly(self):
        print("Penguins can't fly")

x = Bird()
x.intro()
x.fly()

y = Pigeon()
y.intro()
y.fly()

x = Penguin()
x.intro()
x.fly()