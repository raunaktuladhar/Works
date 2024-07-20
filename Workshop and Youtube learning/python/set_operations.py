# union

domestic_animals = {"dog", "cat", "elephant"}
wild_animals = {"lion", "tiger", "elephant"}
animals = domestic_animals | wild_animals
# u can also use '|' (pipe) symbol instead of .union
print(animals)

# intersection

domestic_animals = {"dog", "cat", "elephant"}
wild_animals = {"lion", "tiger", "elephant"}
animals = domestic_animals.intersection(wild_animals)
# u can also use '&' (ampersand) symbol instead of .intersection
print(animals)