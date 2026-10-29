import joblib
import pandas as pd
model = joblib.load('models/01_crop_model_rf.pkl')

data = pd.DataFrame([{
    "N": 90,
    "P": 42,
    "K": 43,
    "temperature": 25.5,
    "humidity": 80.0,
    "ph": 6.5,
    "rainfall": 200.0
}])

prediction = model.predict(data)

print(prediction[0])