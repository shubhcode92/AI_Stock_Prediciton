from fastapi import FastAPI

# VPQFEUT4SHI7BU9Y
# https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=infy&apikey=VPQFEUT4SHI7BU9Y
app = FastAPI(title="Stock Prediction API")

url = '/'
@app.get('/')
def Home():
    return {
        "message": "Stock Prediction API is now running!"
    }