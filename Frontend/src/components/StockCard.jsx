import {
  TrendingUp,
  Clock,
  Target
} from "lucide-react";

function StockCard({ stock }) {
  return (
    <div className="stock-card">

      <div className="stock-card-header">
        <div>
          <h3>{stock.symbol}</h3>
          {/* <p>{stock.name}</p> */}
        </div>

        <div className="signal" >
          {stock.signal}
        </div>
      </div>

      <div className="stock-price">
        ₹{stock.price.toLocaleString("en-IN", {
          minimumFractionDigits: 2
        })}
      </div>

      <div className="daily-change">
        {stock.change >= 0 ? "+" : ""}
        {stock.change}%
        <span> today</span>
      </div>

      <div className="prediction-box">

        <div className="prediction-title">
          <TrendingUp size={18} />
          AI Estimated Upside
        </div>

        <div className="upside">
          +{stock.upside}%
        </div>

      </div>

      <div className="stock-details">

        {/* <div>
          <Target size={16} />
          <span>
            Confidence
            <strong>{stock.confidence}%</strong>
          </span>
        </div> */}

        <div>
          <Clock size={15} />
          <span>
            Horizon:
            <strong>{stock.horizon}</strong>
          </span>
        </div>

      </div>

    </div>
  );
}

export default StockCard;