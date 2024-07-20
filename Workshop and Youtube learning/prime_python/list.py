# list is  a collection of elements and it is similar to an array
# list can be changed
# slicing ulto bata aaudai nw
# index always starts from 0

# Mountain = ['Sagarmatha', 'Dhaulagiri', 'Annapurna', 'Lhotse', 'Makalu']
# print(type(Mountain))
# print(Mountain)
# print(len(Mountain))

# indexing

# print(Mountain[2:])
# print(Mountain[:3])     # [:3] or [0:3]
# print(Mountain[-1])     # [-1] means last position and no list as well
# print(Mountain[-1:-3])  # ulto aaudainw
# print(Mountain[:])      # no output
# print(Mountain[-1:])

# listing methods

# append -> permanently add new elements in last position of a list, parenthesis bhitra haalney
# pop() -> permanently delete element from the last, nothing inside parenthesis
# sort -> sorts an item in any order (alphabetical or ascending), nothing inside parenthesis
# reverse -> used to do reverse all element in list

# append
# Mountain.append("Kilimanjaaro")
# print(Mountain)

# pop
# Mountain.pop()
# print(Mountain)

# Mountain.pop(2)  # used to remove the position 2 starting from last as 0, i.e. Annapurna
# print(Mountain)

# sort
# Mountain.sort()
# print(Mountain)

# reverse
# Mountain.reverse()
# print(Mountain)

# Nesting list -> list inside list

# Barcelona = ['messi', 'neymar', 'suarez']
# print(Barcelona)
# Barcelona.pop(1)
# print(Barcelona)

# PSG = ['messi', 'neymar', 'mbappe']
# print(PSG)

# matrix = [Barcelona,PSG]   # used to make a list of both variables 
# print(matrix)              # used to print the list of psg
# print(matrix[1])           # used to print the list of barcelona
# print(matrix[0])           # used to print list of barcelona
# print(matrix[1][0])        # used to print position of that variable

# code2

# city = ['ktm', 'pkr', 'npj', 'dhr']
# dist = ['ktm', 'kaski', 'banke', 'unknown']
# test = [city, dist]
# unknown matrai print garnus
# print(test[1][3])

list1 = ['one', 'two', 'three', 'four']
print(list1)
print(list1[:])   # same as line 71
print(list1[1:])
print(list1[:-2]) # prints one and two coz 0 is inclusive and -2 is exclusive
print(len(list1))

list1.sort()
print(list1)