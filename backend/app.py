from flask import Flask, jsonify
app = Flask(__name__)

@app.route("/api/traffic")
def traffic():
    return jsonify({"status": "Heavy", "location": "Main Street"})

if __name__ == "__main__":
    app.run(debug=True)