# numbers = [1, 4, 9]
# value = numbers.__iter__()

# item1 = value.__next__()
# print(item1)

# item2 = value.__next__()
# print(item2)

# item3 = value.__next__()
# print(item3)

# or

numbers = [1, 4, 9]
value = iter(numbers)

item1 = next(value)
print(item1)

item2 = next(value)
print(item2)

item3 = next(value)
print(item3)

# stop iteration

# item4 = next(value)
# print(item4)