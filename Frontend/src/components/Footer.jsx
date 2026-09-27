function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div>
          <div className="footer-logo">
            ShubhCode
          </div>

          <p>
            AI-powered insights for short-term
            market analysis.
          </p>
        </div>

        <div className="footer-links">

          <span>Market Resources</span>

          <a
            href="https://www.nseindia.com/"
            target="_blank"
            rel="noreferrer"
          >
            NSE
          </a>

          <a
            href="https://www.bseindia.com/"
            target="_blank"
            rel="noreferrer"
          >
            BSE
          </a>

        </div>

      </div>

      <div className="copyright">
        Copyright © 2026 ShubhCode. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;