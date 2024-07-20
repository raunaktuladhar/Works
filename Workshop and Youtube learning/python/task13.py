def generate_odd():
    n1 = 1
    n2 = 3

    while True:
        yield n1
        n1, n2 = n2, n2 + 2

seq = generate_odd()

print(next(seq))
print(next(seq))
print(next(seq))
print(next(seq))
print(next(seq))