# data cleaning means fixing bad data in your data set
# bad data could be
# empty cells
# data in wrong format
# wrong data
# duplicates
# empty cell:

'''It will give you wrong results always, we will have to remove the rows always that contain the bad data'''

import pandas as pd
# df = pd.read_csv(r'C:\Users\Lenovo\Desktop\pandas\csv sample\data.csv', encoding='unicode_escape')

# never work on original file,
# print(df.to_string())
# new_result = df.dropna();       # dropna doesnt affect the contents of fileS, will remove empty rows or nan rows
# print(new_result.to_string())
# print(df.to_string())

# TO change the original dataframe use, inplace = True argument
# df.dropna(inplace= True)
# print(df.to_string())

# df = pd.read_csv(r'C:\Users\Lenovo\Desktop\pandas\csv sample\data.csv', encoding='unicode_escape')
# # to replace empty cells with a value, use fillina()

# df.fillna(100, inplace=True)
# print(df.to_string())

# print(df.to_string())


# note: now the dropna(inplace=True) wont return a new dataframe
# but it will remove all rows containing NUL(Nan) values from the original dataframe.

# replace specified column -> column name: Calories; fillna() fills up the data
# df = pd.read_csv(r'C:\Users\Lenovo\Desktop\pandas\csv sample\data.csv', encoding='unicode_escape')

# df['Calories'].fillna(50,inplace=True)
# print(df.to_string())

# replace using mean, median and mode

# mean

# df = pd.read_csv(r'C:\Users\Lenovo\Desktop\pandas\csv sample\data.csv', encoding='unicode_escape')
# mean_value = df['Pulse'].mean()
# print(mean_value)       # 107.46153846153847
# df['Pulse'].fillna(mean_value,inplace=True)
# print(df.to_string())

# median

# df = pd.read_csv(r'C:\Users\Lenovo\Desktop\pandas\csv sample\data.csv', encoding='unicode_escape')
# median_value = df['Pulse'].median()
# print(median_value)    # 105.0
# df['Pulse'].fillna(median_value,inplace=True)
# print(df.to_string())

# mode

# df = pd.read_csv(r'C:\Users\Lenovo\Desktop\pandas\csv sample\data.csv', encoding='unicode_escape')
# mode_value = df['Pulse'].mode()
# print(mode_value)    # 0    100.0
# df['Pulse'].fillna(mode_value,inplace=True)
# print(df.to_string())

# remove wrong format
# cells with data of wrong format can make it difficult or even impossible to analyze data
# t fix it, you have two options: remove the rows or convert all cells
# in the columns into the same format
# remove duplicated
# remove wrong data

# correcting date format
df = pd.read_csv(r'C:\Users\Lenovo\Desktop\pandas\csv sample\data.csv', encoding='unicode_escape')
# print(df.to_string())

# df['date'] = pd.to_datetime(df['date'])
# print(df.to_string())

# removing the rows with a null value in the date column
df.dropna(subset = ['Calories'], inplace =True)
print(df.to_string())
print(df.dtypes)
df = pd.read_csv(r'C:\Users\Lenovo\Desktop\pandas\csv sample\data.csv', encoding='unicode_escape')
print(df.dtypes)
