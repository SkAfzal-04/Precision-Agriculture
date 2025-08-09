from flask import Flask, request, jsonify
import Prediction_Model as ml
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json

    try:
        user_crop = data["crop"].lower()
        user_region = data["region"].title()
        N = float(data["nitrogen"])
        P = float(data["phosphorous"])
        K = float(data["potassium"])
        ph = float(data["ph"])
        area = float(data["area"])
    except KeyError as e:
        return jsonify({"error": f"Missing field: {e}"}), 400

    weather = ml.fetch_weather(user_region)
    if not weather:
        return jsonify({"error": "Failed to fetch weather data"}), 500

    prediction = ml.predict_production(user_crop, user_region, N, P, K, ph, area, weather)
    return jsonify({"weather": weather,"prediction": prediction
    })

@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "message": "Crop Yield Prediction API is running",
    })

if __name__ == "__main__":
    ml.init_model()
    print("🚀 Starting Flask API on http://127.0.0.1:7860")
    app.run(debug=True,port=7860)
