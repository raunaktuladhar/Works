try:
    numerator = int(input("Enter numberator: "))
    denominator = int(input("Enter denominator: "))
    result = numerator / denominator
    print(result)

except:
    print("Denominator can't be 0. Please try again")

print("Program ends")