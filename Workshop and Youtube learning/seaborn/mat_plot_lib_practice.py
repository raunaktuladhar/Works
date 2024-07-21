import matplotlib.pyplot as plt

# CODE 1: Line Charts

# 1-D
# data1 = [10,20,30,40,50,60,70,80,90]
# plt.plot(data1)
# plt.show()

# 2-D
# years = [1990,2000,2010,2020,2040]
# data2 = [0.8,0.3,0.5,0.2,0.1]
# plt.plot(years,data2)

# plt.xlabel('Year')
# plt.ylabel('Growth Rate')
# plt.show()

# # multiple lines
# import_goods = [0.96,0.84,0.76,0.66,0.53,0.43,0.33,0.21,0.19,0.09]
# export_goods = [0.04,0.13,0.27,0.34,0.49,0.52,0.66,0.71,0.85,0.97]
# years = range(2014,2024)
# plt.plot(years, import_goods)
# plt.plot(years,export_goods)
# plt.xlabel('Year')
# plt.ylabel('Rates')
# plt.title("IMPORT and EXPORT rates")
# plt.legend(['IMPORT GOODS', 'EXPORT GOODS'])
# plt.show()

# use of markers -> To show each data point on our graph, we can highight them with marker
# import_goods = [0.96,0.84,0.76,0.66,0.53,0.43,0.33,0.21,0.19,0.09]
# export_goods = [0.04,0.13,0.27,0.34,0.49,0.52,0.66,0.71,0.85,0.97]
# years = range(2014,2024)
# plt.plot(years, import_goods, marker = 'o')
# plt.plot(years,export_goods,marker = 'x')
# plt.xlabel('Year')
# plt.ylabel('Rates')
# plt.title("IMPORT and EXPORT rates")
# plt.legend(['IMPORT GOODS', 'EXPORT GOODS'])
# plt.show()

# CODE 2: Bar Graph
years = [1990,2000,2010,2020,2040]
data2 = [0.8,0.3,0.5,0.2,0.1]
plt.bar(years,data2)
# plt.bar(,); takes 2 positional argument
plt.xlabel('Year')
plt.ylabel('Growth Rate')

plt.show()
