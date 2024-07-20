class Complex:
    def __init__(self, real, imag) -> None:
        self.real = real
        self.imag = imag

    def add(self, number):   # self represents n1 and number represents n2
        real = self.real + number.real
        imag = self.imag + number.imag
        result = Complex(real, imag)
        return result   
    
n1 = Complex(5, 6)
n2 = Complex(-4, 2)
result = n1.add(n2)  # self represents n1 and number represents n2

print("real = ", result.real)
print("imaginary = ", result.imag)

# you can also write as the below print function
# print(result.real, "+", result.imag,"i")
