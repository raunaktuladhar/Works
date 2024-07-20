animals = {"dog", "cat", "tiger", "elephant"}
animals.discard("cat")  # u can use remove as well 
# if the item we are trying to remove is not in the set then discard returns none whereas remove returns error
print(animals)

animals1 = {"dog", "cat", "tiger", "elephant"}
animals1.discard("parrot")
print(animals1)

animals2 = {"dog", "cat", "tiger", "elephant"}
animals2.clear()   # clear returns empty set
print(animals2)