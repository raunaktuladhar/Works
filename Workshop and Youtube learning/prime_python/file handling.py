# File I/O
'''
1. File is a named location on disk to store related information.
2. It is used to permanently store data when computer is turned off, we use files for future use of the data.
'''

# File operation:
'''
1. Open a file
2. Read oe Write
3. Close the file.'''

# File Handling:
'''
The key function for working with files in python is the open() function.
The open() function takes two parameters; filename and mode
There are four different methods(modes) for opening a file:
r -> Read; Default value. Opens a file for reading; error if the file doesnt exist
a -> Append; Opens a file for appending, creates the file if it doesnt exist
w -> Write; Opens a file for writing, creates the file if it doesnt exist
t -> opens in text mode
b -> opens in binary mode
+ -> opens a file for updating(reading & writing)'''

# syntax
# file1 = open('file.txt', 'r')      # FileNotFoundError: [Errno 2] No such file or directory: 'file.txt'
# file1 = open('file.txt', 'w')        # forms a new file
# file1 = open('file.txt', '+w')
# file1.write("Hello World")
# file1.read()

f = open('one.txt', "+w")
f.write("This is opening file")
f.close()

f = open('one.txt', '+a')   # append(a) adds more text
f.write("\nWelcome")

f = open('basics.py')
# not provided the mode coz the default mode is r

file_handling = open("First_file.txt", "+w")
file_handling.write('File named \n"First_File" has been created is same folder and \n')

file_handling.close()
file_handling = open("First_file.txt", '+a')
file_handling.write("Hello students, whats up?")
print("Content has been written in file")

file_handling = open("First_file.txt", 'r')

for line in file_handling:
    print("Line printed through loop is: ", line, end='')
file_handling.close()
print("\nthe file is closed")