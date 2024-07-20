# tuple are similar to list but are immutable i.e. elements cant be changed
# methods of list cant be runned

# place = ('nepalgunj', 'pyuthan', 'bardiya', 'jomson')
# print(type(place))
# print(place)
# print(place[0])   # points that index

# print(len(place)) # length of a tuple

# place.append("ktm")
# print(place) 
# output: error

# print(place.index('pyuthan'))    # index() returns index no. of element

# print(place.count('nepalgunj'))  # count() is used to count the number of elements in a tuple


aayan = ('sushant', 'aayan', 'RBST')
# print(type(aayan))
# print(len(aayan))
# print(aayan[-1])
# print(aayan.count('me'))
# print(aayan.index('me'))

# for

# for x in aayan:
#     print(x)

# for x in aayan:
#     print(x, end=' ')    # 'end' keyword helps to terminate in single line in for loop

if 'me' in aayan:
    print('yes')
else:
    print('no')

# while loop

# while(0):
#     if 'me' in aayan:
#         print('yes')
#     else:
#         print('no')