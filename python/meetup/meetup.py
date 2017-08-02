from datetime import date
def meetup_day(year, month, name_of_day, type_of_day, start=1):
    days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    end_with_teenth = [13, 19, 16]
    day = date(year,month, start)
    if type_of_day == 'teenth':
        if day.weekday() == days.index(name_of_day) and start in end_with_teenth:
            print(day)
            return day
        else:
            #print(year, month, type_of_day, start+1)
            return meetup_day(year, month, name_of_day ,type_of_day, start+1)

meetup_day(2013, 8, 'Monday', 'teenth')
