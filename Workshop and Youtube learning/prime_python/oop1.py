# CODE 1

# class lab():
#     def display(self):
#         print("Good morning")

#     def warn(self):
#         print("Please no 'N' word")

# h1 = lab()
# h1.display()
# h1.warn()

# make class cineplex with methods

# class Cineplex:
#     def hall1(self):
#         print("Krish 3 is been shown here.")

#     def hall2(self):
#         print("Dhoom 5 is been shown here.")

#     def hall3(self):
#         print("Animal is been shown here.")

# h1 = Cineplex()
# h2 = Cineplex()
# h3 = Cineplex()
# h1.hall1()
# h2.hall2()
# h3.hall3()
# for eg: 3 jana friends different movies hernw gayo bhaney


# # create a class
# class Room:
#     length = 0.0
#     breadth = 0.0

#     # method to calculate area
#     def calculate_area(self):
#         print("Area of room:",self.length * self.breadth)

# # create object of Room class
# study_room = Room()

# # assign values to all the attributes
# study_room.length = 42.5
# study_room.breadth = 30.8

# # access method inside class
# study_room.calculate_area()

# define a class
class Bike:
    name = ""
    gear = 0

# create object of a class
bike1 = Bike()
bike2 = Bike()

# access attributes and assign new values
bike1.gear = 6
bike2.name = "Pulsar"

bike1.name = "BMW"
bike2.gear = 15

print(f"{bike1.name} has {bike1.gear} gears.")
print("{} has {} gears".format(bike2.name, bike2.gear))

# both line 70 and 71 are same but only format is different