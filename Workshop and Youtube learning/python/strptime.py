import datetime as dt

date_string = "21 November, 2023"

date_object = dt.datetime.strptime(date_string, "%d %B, %Y")

print("Date object:", date_object)