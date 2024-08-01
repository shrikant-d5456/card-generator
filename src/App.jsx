import React, { useEffect, useState } from 'react';
import './index.css';
import config from './config';


const App = ()=> {

    const [inputText, setInputText] = useState('');
    const [img, setImg] = useState('');

    const generateQRCode = () => {
        if (inputText === "") {
            alert("Enter text for QR code")
        }
        else {
        const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(inputText)}`;
        setImg(qrCodeUrl)
        }
    };

  return (
    <>
    
    <div className="inner1">
    <h1>Create Custom QR Codes</h1>
      <h2>You can create your own QR codes for free using online tools or software</h2>
      <p>QR codes are two-dimensional barcodes that can store various types of information, such as URLs, text, contact details, and more. They are widely used for marketing, advertising, and customer engagement purposes. </p>
    </div>
    <div className="inner2">
    <div className="input">
    <input className="form-control"
                    type="text"
                    placeholder="Enter text for QR code"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={e=>{
                      if(e.key === "Enter")
                      {
                        generateQRCode()
                      }
                    }}
                />
    <button className="btn btn-primary" type="button" onClick={generateQRCode}>Get QR</button>

    </div>
    <div className="output">
    <img src={img} alt="Generating.." />
    </div>
    </div>
    
    
    </>
  )
}


export default App;
