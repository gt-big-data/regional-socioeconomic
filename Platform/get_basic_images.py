# Dependencies - install serpapi with 'pip3 install google-search-results'
from serpapi import GoogleSearch
import requests

# The API key to access the API - change this to the correct one
API_KEY = ''

# This requests the Serpapi API for images. It actually returns data about the
# images rather than the images themselves (thus why we need the download_image
# function below). The request will return 100 entries - just what we want :)
def search_request(query):
    params = {
        "q": query,
        "tbm": "isch",
        "ijn": 0,
        "api_key": API_KEY,
        
    }
    search = GoogleSearch(params)
    results = search.get_dict()
    return results['images_results']

# Converts the API response from search_request into a list of image links. These
# links will be used to download the images
def get_image_links_from_response(response):
    links = []
    for item in response:
        links.append(item['thumbnail'])
    return links

# Downloads an image from a source url (an item of the return value of
# get_image_links_from_response) and places it in the current folder
# with a specified name (written_image_name). For the name, include
# the ending and any location specification (for example, 'images/img1.png')
def download_image_from_url(src_url, written_image_name):
    img_data = requests.get(src_url).content
    with open(written_image_name, 'wb') as handler:
        handler.write(img_data)