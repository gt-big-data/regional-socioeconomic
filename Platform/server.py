from flask import Flask
from flask_restful import Api, Resource
app = Flask(__name__)
api = Api(app)

class FindImages(Resource):
    def get(self):
        return {"test": "success"}

api.add_resource(FindImages, "/images")

def main():
    app.run(debug=True)

if __name__ == "__main__":
    main()