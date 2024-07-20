try:
    numerator = int(input("Enter numerator: "))
    denominator = int(input("Enter denominator: "))
    result = numerator / denominator
    print(result)

    my_list = [1, 2, 3]
    i = int(input("Enter index: "))
    print(my_list[i])

except ZeroDivisionError:
    print("Denominator can't be 0. Please try again.")

except IndexError:
    print("Index can't be greater than the size of list.")

print("Program ends")