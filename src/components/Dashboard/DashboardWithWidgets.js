import React from 'react';
import './DashboardWithWidgets.css';

const DashboardWithWidgets = () => (
  <div className="tv-dashboard">
    {/* Forex Section */}
    <section className="tv-section">
      <h2>Forex Screener</h2>
      <div className="tv-widget-box">
        {/* Forex Screener Widget */}
        <iframe
          title="Forex Screener"
          src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_12345&symbol=FX:EURUSD&interval=1D&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=[]&theme=light&style=1&timezone=Etc/UTC&withdateranges=1&hideideas=1&widgetbar=show&showpopupbutton=1&locale=en#"
          width="100%"
          height="400"
          frameBorder="0"
          allowtransparency="true"
          scrolling="no"
        ></iframe>
      </div>
      <div className="tv-charts-row">
        {/* Major Forex Pairs Live Charts */}
        <div className="tv-chart">
          <h4>EURUSD</h4>
          <div className="tv-widget-box">
            <iframe
              title="EURUSD Chart"
              src="https://s.tradingview.com/widgetembed/?symbol=FX:EURUSD&interval=15&hidesidetoolbar=1&theme=light&style=1&timezone=Etc/UTC&studies=[]&hideideas=1&locale=en"
              width="100%"
              height="300"
              frameBorder="0"
              allowtransparency="true"
              scrolling="no"
            ></iframe>
          </div>
        </div>
        <div className="tv-chart">
          <h4>GBPUSD</h4>
          <div className="tv-widget-box">
            <iframe
              title="GBPUSD Chart"
              src="https://s.tradingview.com/widgetembed/?symbol=FX:GBPUSD&interval=15&hidesidetoolbar=1&theme=light&style=1&timezone=Etc/UTC&studies=[]&hideideas=1&locale=en"
              width="100%"
              height="300"
              frameBorder="0"
              allowtransparency="true"
              scrolling="no"
            ></iframe>
          </div>
        </div>
        <div className="tv-chart">
          <h4>XAUUSD</h4>
          <div className="tv-widget-box">
            <iframe
              title="XAUUSD Chart"
              src="https://s.tradingview.com/widgetembed/?symbol=OANDA:XAUUSD&interval=15&hidesidetoolbar=1&theme=light&style=1&timezone=Etc/UTC&studies=[]&hideideas=1&locale=en"
              width="100%"
              height="300"
              frameBorder="0"
              allowtransparency="true"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    {/* Crypto Section */}
    <section className="tv-section">
      <h2>Crypto Screener</h2>
      <div className="tv-widget-box">
        {/* Crypto Screener Widget */}
        <iframe
          title="Crypto Screener"
          src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_cryptoscreener&symbol=BINANCE:BTCUSDT&interval=1D&hidesidetoolbar=1&theme=light&style=1&timezone=Etc/UTC&studies=[]&hideideas=1&widgetbar=show&showpopupbutton=1&locale=en#"
          width="100%"
          height="400"
          frameBorder="0"
          allowtransparency="true"
          scrolling="no"
        ></iframe>
      </div>
      <div className="tv-charts-row">
        {/* Major Crypto Coins Live Charts */}
        <div className="tv-chart">
          <h4>BTCUSD</h4>
          <div className="tv-widget-box">
            <iframe
              title="BTCUSD Chart"
              src="https://s.tradingview.com/widgetembed/?symbol=BINANCE:BTCUSDT&interval=15&hidesidetoolbar=1&theme=light&style=1&timezone=Etc/UTC&studies=[]&hideideas=1&locale=en"
              width="100%"
              height="300"
              frameBorder="0"
              allowtransparency="true"
              scrolling="no"
            ></iframe>
          </div>
        </div>
        <div className="tv-chart">
          <h4>ETHUSD</h4>
          <div className="tv-widget-box">
            <iframe
              title="ETHUSD Chart"
              src="https://s.tradingview.com/widgetembed/?symbol=BINANCE:ETHUSDT&interval=15&hidesidetoolbar=1&theme=light&style=1&timezone=Etc/UTC&studies=[]&hideideas=1&locale=en"
              width="100%"
              height="300"
              frameBorder="0"
              allowtransparency="true"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    {/* Commodities & Futures Section */}
    <section className="tv-section">
      <h2>Commodities & Futures Screener</h2>
      <div className="tv-widget-box">
        {/* Commodities Screener Widget */}
        <iframe
          title="Commodities Screener"
          src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_commoditiesscreener&symbol=OANDA:XAUUSD&interval=1D&hidesidetoolbar=1&theme=light&style=1&timezone=Etc/UTC&studies=[]&hideideas=1&widgetbar=show&showpopupbutton=1&locale=en#"
          width="100%"
          height="400"
          frameBorder="0"
          allowtransparency="true"
          scrolling="no"
        ></iframe>
      </div>
      <div className="tv-charts-row">
        {/* Major Commodities Live Charts */}
        <div className="tv-chart">
          <h4>Gold (XAUUSD)</h4>
          <div className="tv-widget-box">
            <iframe
              title="Gold Chart"
              src="https://s.tradingview.com/widgetembed/?symbol=OANDA:XAUUSD&interval=15&hidesidetoolbar=1&theme=light&style=1&timezone=Etc/UTC&studies=[]&hideideas=1&locale=en"
              width="100%"
              height="300"
              frameBorder="0"
              allowtransparency="true"
              scrolling="no"
            ></iframe>
          </div>
        </div>
        <div className="tv-chart">
          <h4>Oil (USOIL)</h4>
          <div className="tv-widget-box">
            <iframe
              title="Oil Chart"
              src="https://s.tradingview.com/widgetembed/?symbol=TVC:USOIL&interval=15&hidesidetoolbar=1&theme=light&style=1&timezone=Etc/UTC&studies=[]&hideideas=1&locale=en"
              width="100%"
              height="300"
              frameBorder="0"
              allowtransparency="true"
              scrolling="no"
            ></iframe>
          </div>
        </div>
        <div className="tv-chart">
          <h4>S&P 500 (SPX)</h4>
          <div className="tv-widget-box">
            <iframe
              title="SPX Chart"
              src="https://s.tradingview.com/widgetembed/?symbol=SP:SPX&interval=15&hidesidetoolbar=1&theme=light&style=1&timezone=Etc/UTC&studies=[]&hideideas=1&locale=en"
              width="100%"
              height="300"
              frameBorder="0"
              allowtransparency="true"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default DashboardWithWidgets;