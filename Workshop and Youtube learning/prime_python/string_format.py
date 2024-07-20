# age = 36
# txt = "My name is John, I am " + age
# print(txt)

# {} -> placeholders and format()

age = 36
txt = "My name is John, and I am {}"
print(txt.format(age))

quantity = 3
itemno = 567
price = 49.95
myorder = "I want {} pieces of item {} for dollars."
print(myorder.format(quantity, itemno, price))

# gender = "gay"
# sentence = "Why are you {}?"
# print(sentence.format(gender))

# code

age = 20
name = "Raunak"
test = "My name is {} and I'm {} years old."
print(test.format(name, age))