from datetime import datetime, timedelta
def add_gigasecond(date):
    secs=1000000000
    return date + timedelta(seconds=secs)

#add_gigasecond(datetime(2011, 4, 25))
