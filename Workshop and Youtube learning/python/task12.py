class Triangle:
    def __init__(self, a, b, c) -> None:
        self.a = a
        self.b = b
        self.c = c

    def calculate_perimeter(self):
        perimeter = self.a + self.b + self.c
        return perimeter

t1 = Triangle(3, 4, 5)
perimeter = t1.calculate_perimeter()
print("The perimeter of triangle is", perimeter)