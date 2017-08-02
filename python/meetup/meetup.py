from datetime import date
import calendar
def meetup_day(year, month, name_of_day, type_of_day, start=1, nd=0):
    days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    end_with_teenth = [13, 19, 16]
    day = date(year,month, start)
    if type_of_day == 'teenth':
        if day.weekday() == days.index(name_of_day) and start in end_with_teenth:
            return day
        else:
            return meetup_day(year, month, name_of_day ,type_of_day, start+1)
    elif type_of_day == "1st":
        if day.weekday() == days.index(name_of_day):
            return day
        else:
            return meetup_day(year, month, name_of_day ,type_of_day, start+1)
    elif type_of_day == '2nd':
        if day.weekday() == days.index(name_of_day):
            nd += 1
        if day.weekday() == days.index(name_of_day) and nd == 2:
            return day
        else:
            return meetup_day(year, month, name_of_day ,type_of_day, start+1, nd)
    elif type_of_day == '3rd':
        if day.weekday() == days.index(name_of_day):
            nd += 1
        if day.weekday() == days.index(name_of_day) and nd == 3:
            return day
        else:
            return meetup_day(year, month, name_of_day ,type_of_day, start+1, nd)
    elif type_of_day == '4th':
        if day.weekday() == days.index(name_of_day):
            nd += 1
        if day.weekday() == days.index(name_of_day) and nd == 4:
            return day
        else:
            return meetup_day(year, month, name_of_day ,type_of_day, start+1, nd)
    elif type_of_day == '5th':
        if day.weekday() == days.index(name_of_day):
            nd += 1
        if day.weekday() == days.index(name_of_day) and nd == 5:
            return day
        else:
            return meetup_day(year, month, name_of_day ,type_of_day, start+1, nd)
    elif type_of_day == 'last':
        if day.weekday() == days.index(name_of_day) and calendar.monthrange(year, month)[1] <= start + 6:
            return day
        else:
            return meetup_day(year, month, name_of_day ,type_of_day, start+1, nd)

meetup_day(2013, 12, 'Friday', '2nd')
