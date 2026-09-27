import Header from "./components/Header";
import StockCarousel from "./components/StockCarousel";
import Footer from "./components/Footer";
import mockStocks from "./data/mockStocks";

function App() {
  return (
    <div className="app">

      <Header />

      <main>

        <section className="hero" id="home">

          <div className="hero-badge">
            AI-Powered Market Intelligence
          </div>

          <h1>
            Discover Short-Term
            <span> Stock Potential</span>
          </h1>

          <p>
            Analyze market data with AI-powered insights
            to identify stocks with potential short-term upside.
          </p>

        </section>

        <section className="stocks-section">

          <div className="section-heading">

            <div>
              <h2>Market Opportunities</h2>

              <p>
                AI estimated short-term upside
              </p>
            </div>

          </div>

          <StockCarousel stocks={mockStocks} />

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default App;