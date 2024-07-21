# matplotlib
'''matplotlib is an easy-to-use, low level data visualization library that is built on Numpy arrays. 
It consists of various plots like scatter plot, line plot, histogram, etc. Matlablib provides a lot of flexibility'''

# import pandas as pd

# # reading the database
# data = pd.read_csv(r"E:\seaborn\sample\tips.csv", encoding='unicode_escape')

# # printing the top 10 rows
# print(data.head(10))

# to install
'''pip install matplotlib'''

# scatter plot
'''Scatter plots are used to observe relationships between variables and uses dots to repesent the relationship
between them. The scatter() method in the matplotlib library is used to draw a scatter plot'''

# import pandas as pd
# import matplotlib.pyplot as plt

# # reading the database
# data = pd.read_csv(r"E:\seaborn\sample\tips.csv")

# # scatter plot with day against tip
# plt.scatter(data['day'], data['tip'])      # (x,y)

# # adding title to the plot
# plt.title("Scatter Plot")

# # setting the X and Y labels
# plt.xlabel('Day')
# plt.ylabel('Tip')
# plt.show()

'''This is graph can be more meaningful if we can add colors and also
change the size of the points. We can do this by using the c and s parameter
respectively of the scatter functiom.
We can also show the color bar using the colorbar() method'''

# import pandas as pd
# import matplotlib.pyplot as plt

# # reading the database
# data = pd.read_csv(r"E:\seaborn\sample\tips.csv")

# # scatter plot with day against tip
# plt.scatter(data['day'], data['tip'], c = data['size'], s = data['total_bill'])

# # adding title tot the plot
# plt.title("RBST")

# # setting the x and y labels
# plt.xlabel('Day')
# plt.ylabel('Tip')

# plt.colorbar()

# plt.show()

# Line Chart


import pandas as pd
import matplotlib.pyplot as plt

# reading database
data = pd.read_csv(r"E:\seaborn\sample\tips.csv")

# scatter plot with day against tip
plt.plot(data['tip'])
plt.plot(data['size'])

# adding title tot the plot
plt.title("RBST")

plt.xlabel('Size')
plt.ylabel('Tip')

plt.show()