import requests
import csv

BASE_URL = 'http://127.0.0.1:5000/image/'

# This goes through all the countries in countries.csv and calls the API for them
with open ('countries.csv', 'r') as country_file:
    reader = csv.reader(country_file)
    header = True
    for row in reader:
        if header:
            header = False
            continue
        url = BASE_URL + row[1] + '/' + row[2] + '/5/' + row[3]
        requests.get(url)
    country_file.close()