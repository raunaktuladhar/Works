import datetime as dt

current_datetime = dt.datetime.now()

print(current_datetime)

# string_date = current_datetime.strftime("%A, %B %d, %Y")   # long form

string_date = current_datetime.strftime("%b %d, %I%p")   # short form

print(string_date)