# analyzing dataaframes

import pandas as pd
test = pd.read_csv(r'E:\pandas\csv sample\data.csv',encoding='unicode_escape')
# print(test.to_string())    # print in string ; use to_string() to print entire dataframe
# print(test)                # print in list; pandas will only return the first 5 rows and the last 5 rows

# viewing the data: one of the most used method for quick overview of the dataframe

# head() method
# print(test.head(10))    # prints first 10 samples in list
# print(test.tail(5))       # prints last 5 samples in list
# print(test.head())      # prints first 5 samples by default
# print(test.tail())      # prints last 5 samples by default
# print(test.info())     # prints detail information

# print(pd.options.display.max_rows)
# pd.options.display.max_rows = 75
# print(pd.options.display.max_rows)