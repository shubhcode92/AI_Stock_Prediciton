import StockCard from "./StockCard";

function StockCarousel({ stocks }) {
  return (
    <div className="carousel-wrapper">
      <div className="stock-track">

        {/* First group */}
        <div className="stock-group">
          {stocks.map((stock) => (
            <StockCard
              key={`first-${stock.symbol}`}
              stock={stock}
            />
          ))}
        </div>

        {/* Duplicate group for seamless loop */}
        <div className="stock-group" aria-hidden="true">
          {stocks.map((stock) => (
            <StockCard
              key={`second-${stock.symbol}`}
              stock={stock}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default StockCarousel;