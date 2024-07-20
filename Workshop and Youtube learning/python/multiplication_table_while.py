number = int(input("Enter a number: "))
count = 1
while count <= 10:  # or count < 11
    product = number * count
    print(number, "X", count, "=", product)
    count = count + 1
