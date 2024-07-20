# count()

# data1 = input("Enter name: ")
# print(data1.count("R"))

# temperature = float(input("Enter temperature: "))
# print(temperature)

name = "Ram"    # string
age = 17        # integer
gpa = 3.2       # float
student = True  # Boolean

print(type(name))
print(type(age))
print(type(gpa))
print(type(student))

# gpa  into int

gpa = int(gpa)
print(gpa)
print(type(gpa))

# boolean to string

student = str(student)
print(type(student))

# int to boolean

age = bool(age)
print(age)
print(type(age))

# implicit casting -> automatically convert
# above codes are explicit casting

x = 2
print(x)
print(type(x))
y = 2.0
print(y)
print(type(y))
x = x/y
print(x)