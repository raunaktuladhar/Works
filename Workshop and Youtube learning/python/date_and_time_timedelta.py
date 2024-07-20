import datetime as dt

current_time = dt.datetime.now()
next_new_year = dt.datetime(2024, 1, 1)

time_remaining = next_new_year - current_time

print(time_remaining)