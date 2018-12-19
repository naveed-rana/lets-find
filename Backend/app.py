from flask import Flask

app = Flask(__name__)

#server route
@app.route('/')
def index():
    return "Lets find server, up and running"

if __name__ == "__main__":
    app.run(port='8080', debug=True)