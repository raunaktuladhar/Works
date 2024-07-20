from math import sqrt
number = sqrt(64)
print(number)

from math import pi, sin
value = sin(pi/2)
print(value)

# instead of manually importing pi, sin and sqrt, we can use *

from math import *
value = sin(pi/2)
print(value)