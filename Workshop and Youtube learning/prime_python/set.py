# sets are arranged in random order
# sets are unordered, unchangeable* and unindexed
# *set items are unchangeable, but you can remove items and add new items
# items dont replicate

# set1 = {'hello', 'namaste', 'lhaso'}
# print(set1)
# print(type(set1))

# typecasting list to set

# set2 = set(['kathmandu', 'nepal', 'delhi'])
# print(set2)

# adding elements to the set


# add() -> adds new element in set ; parenthesis bhitrw

# set2.add(['denmark', 'US'])    # unhashable type: 'list'
# set2.add({'denmark', 'US'})    # unhashable type: 'set'

# set2.add('new york')
# print(set2)

# a set cant duplicate
# set3 = {'noob', 'always', 'noob'}
# print(set3)

# values of a set cant be changed
# set3[1] = 'sorry bro'   # 'set' object does not support item assignment because set is unordered
# print(set3)

# set can store heterogeneous elements i.e. a set can store a mixture of string, integer, float, boolean, etc.
# set4 = {'namaste', 5, 2.5, False}
# print(set4)

# union
player = {'subash', 'santosh', 'ram'}
film = {'karan', 'anupam'}
man = {'dipesh', 'ram'}

# union using union()
# aswell = player.union(film)
# print(aswell)

# also union using "|" operator
# aswell = player | man

# intersection using intersection()
# all = man.intersection(player)
# print(all)

# also intersection using "&" operator
# all = man & player
# print(all)

# x = {'apple', 'banana', 'cherry'}
# y = {'google', 'microsoft', 'apple'}
# x.intersection_update(y)
# print(x)
# # use above code only if u want to store in one of the given variables

# # update() -> updates a set
# set1 = {'a', 'b', 'c'}
# set2 = {1, 2, 3}
# set1.update(set2)
# print(set1)



# symmetric_difference_update() or symmetric_difference() -> cancels out common elements in two sets n returns all remaining elements in both sets
# symmetric_difference_update() -> no new variable needed
# symmetric_difference() -> new variable needed
# x = {'apple', 'banana', 'cherry'}
# y = {'google', 'microsoft', 'apple'}
# z = x.symmetric_difference_update(y)
# print(z)

# range()
# set_first = set()
# set_second = set()
# set_third = set()

# for i in range(5):         # 5 is exclusive i.e. range is from 0 to 4
#     set_first.add(i)

# for i in range(3, 9):      # 3 is inclusive and 9 is exclusive
#     set_second.add(i)

# for i in range(3, 9, 2):   # 3 is inclusive and 9 is exclusive and 2 is difference of range
#     set_third.add(i)

# print(set_first)
# print(set_second)
# print(set_third)

# difference of two sets using difference() or '-' operator

set5 = {0, 1, 2, 3, 4}
set6 = {3, 4, 5, 6, 7, 8}
set_diff = set5 - set6
print(set_diff)

# clearing set

set7 = {1, 2, 3, 4, 5}

# clear() -> clears all data in a set

set7.clear()
print(set7)