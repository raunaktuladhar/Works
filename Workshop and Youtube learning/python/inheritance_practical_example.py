class Polygon:
    def __init__(self, sides) -> None:
        self.sides = sides

    def display_info(self):
        print("A polygon is 2D shape with straight lines")

    def get_perimeter(self):
        perimeter = sum(self.sides)
        return perimeter
    
class Triangle(Polygon):
    def display_info(self):
        print("A triangle is a polygon with 3 edges")
        # Polygon.display_info(self)   # display_info() method of polygon class was called correctly
        # u can also use super().display_info() becoz we dont need to create an argument 'self' inside the parenthesis of display_info() method
        super().display_info()

class Quadrilateral(Polygon):
    def display_info(self):
        print("A quadrilateral is a polygon with 4 edges")

t1 = Triangle([5, 6, 7])
perimeter = t1.get_perimeter()
print("The perimeter of triangle is", perimeter)
t1.display_info()  # method override

# for quadrilateral

# q1 = Quadrilateral([1, 2, 3, 4])
# perimeter = q1.get_perimeter()
# print("The perimeter of quadrilateral is", perimeter)
