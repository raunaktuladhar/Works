# methods -> function defined inside body of class
# they are used to perform operation with attributes of our objects.
# methods are the key concepts of OOP paradign. For a large application methods are essential

# class circle:
#     PI = 3.14

# # circle get instantiated with a radius (default 1)
#     def __init__(self, radius = 5) -> None:
#         self.leng = radius
#         self.area = self.PI*radius**2
#         # or we can write self.area = circle.pi * radius **2

#     def setRadius(self, newRadius):
#         self.radius1 = newRadius
#         self.area1 = self.PI*newRadius**2
#         self.circum = self.PI*2*newRadius

#     def circum2(self, radius3):
#         self.radius3 = radius3
#         self.circum = 2*circle.PI*radius3

# a = circle()
# print("radius", a.leng)
# print("Area", a.area)

# a.setRadius(7)
# print("new radius", a.radius1)

# a.circum2(10)
# print("Circum radius: ",a.radius3)
# print("Circumference", a.circum)

# Create a classs cylinder

class Cylinder:
    PI = 3.14

    radius = 5
    height = 2

    def TSA(self):
        print("TSA of cylinder", 2*self.PI*Cylinder.radius*(Cylinder.radius+Cylinder.height))
    
    def CSA(self):
        print("CSA of cylinder", 2*self.PI*Cylinder.radius*Cylinder.height)

    def Volume(self):
        print("Volume of cylinder", self.PI*Cylinder.radius**2*Cylinder.height)

c = Cylinder()
c.TSA()
c.CSA()
c.Volume()

