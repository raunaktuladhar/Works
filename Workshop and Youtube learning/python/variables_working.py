a = [1, 2, 3]
b = a

a.append(4)

print("a = ", a)
print("b = ", b)

print(id(a))
print(id(b))
 
#  here eventhough changed we the value of a still a and b are equal. it is becoz a and b are referring to same object
# if we check id of a and b then it is also same
# thats why we use the copy method to copy one list to another if u dont want this kind of behaviour

a = [1, 2, 3]
b = a.copy()

a.append(4)

print("a = ", a)
print("b = ", b)

print(id(a))
print(id(b))
