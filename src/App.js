import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./App.css";

const App = () => {
  const [url, setUrl] = useState("");
  const [showQRCode, setShowQRCode] = useState(false);

  const handleChange = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (url) {
      setShowQRCode(true);
    }
  };

  return (
    <div className="container">
      <h1>Gerador de QR Code</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o link aqui"
          value={url}
          onChange={handleChange}
          className="input"
        />
        <button type="submit" className="button">
          Gerar QR Code
        </button>
      </form>
      {showQRCode && (
        <div className="qr-code">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <QRCodeCanvas value={url} />
          </a>
        </div>
      )}
    </div>
  );
};

export default App;
