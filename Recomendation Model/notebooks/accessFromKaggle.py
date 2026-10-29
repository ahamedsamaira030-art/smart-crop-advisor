import kagglehub

# Download latest version
# path = kagglehub.model_download("priyamai/crop-recomender/scikitLearn/default")
# print("Path to model files:", path)


# import shutil
# path = kagglehub.model_download(
#     "priyamai/crop-recomender/scikitLearn/default"
# )
# shutil.copy(
#     path + "/01_crop_model_rf.pkl",
#     r"D:\Final Year Project\Recomendation Model\models\model.pkl"
# )


import joblib 
import pandas as pd
model = joblib.load('models/model.pkl')
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