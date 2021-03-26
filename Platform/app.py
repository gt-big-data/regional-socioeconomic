from flask import Flask
from flask_restful import Api, Resource
import os
from dotenv import load_dotenv
import mercantile
import requests
import shutil

load_dotenv()

app = Flask(__name__)
api = Api(app)

# Retrieves the API key as an environment variable. Make sure there is a .env file
# in the Platform folder with the API_KEY variable set
API_KEY = os.getenv('API_KEY')
BASE_URL = 'https://api.mapbox.com/v4/mapbox.satellite/'

'''
    This retrieves and downloads a satellite image for a specified set of coordinates
    and for a specified zoom level. The zoom level is an integer between 1 and 15,
    where 1 is as far as possible and 15 is as close as possible. Right now, the image
    is automatically downloaded into ./images as "test.png". There is also no error
    handling logic, so any faulty request is an internal server error.
'''
class FindImage(Resource):
    def get(self, lat, long, zoom):
        tile = mercantile.tile(float(long), float(lat), int(zoom))
        url = BASE_URL + zoom + '/' + str(tile.x) + '/' + str(tile.y)
        url += '@2x.pngraw?access_token=' + API_KEY
        req = requests.get(url, stream=True)

        with open('./images/test.png','wb') as f:
            req.raw.decode_content = True
            shutil.copyfileobj(req.raw, f)

        return [{"result": "Successfully downloaded image"}]

# Example request (Georgia Tech): http://127.0.0.1:5000/image/33.7756/-84.3963/15
api.add_resource(FindImage, "/image/<lat>/<long>/<zoom>")

def main():
    app.run(debug=True)

if __name__ == "__main__":
    main()