from flask import Flask, render_template, request, url_for
from flask_pymongo import PyMongo

app = Flask(__name__)

# MongoDB URI
app.config["MONGO_URI"] = "mongodb+srv://SB063:1234@cluster0.kkpo7.mongodb.net/taskdb?retryWrites=true&w=majority&appName=Cluster0"

# Initialize PyMongo
mongo = PyMongo(app)

@app.route('/')
def welcome():
    return render_template('index1.html')

@app.route('/submit', methods=['POST', 'GET'])
def submit():
    if request.method == 'POST':
        # try:
        #     # Test the MongoDB connection by accessing a collection
        #     mongo.db.test_collection.find_one()  # Attempt to query a test collection
        #     return "MongoDB connected successfully!"
        # except Exception as e:
        #     return f"Failed to connect to MongoDB: {str(e)}"
    
      return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
