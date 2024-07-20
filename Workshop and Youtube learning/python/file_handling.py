# reading files in python

f = open("message.txt", "r") 

content = f.read(6)  # reading certain number of characters from a file

print(content)

more_content = f.read(12)  # reading next characters
print(more_content)

f.close()