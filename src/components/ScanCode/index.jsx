import React, { useState } from 'react';
import QrReader from 'react-qr-scanner';

function ScanCode() {
    const [result, setResult] = useState('');
    const [isScanOn, setScanOn] = useState(false)
    function handleScan(data) {
        data && setResult(data.text)
    }
    const delay = 100;
    function handleError(err) {
        console.log(err.message)
    }
    const previewStyle = {
        height: 240,
        width: 320,
    }
    function switchScan () {
        setScanOn(!isScanOn)
    }
    
    return (
        <>
            <p>Hello to scanCode</p>
            <button type = "button" onClick={switchScan} >switch</button>
            {isScanOn && <QrReader
                delay={delay}
                style={previewStyle}
                onError={handleError}
                onScan={handleScan}
            />}
            <p>{result}</p>
        </>
    )
}

export default ScanCode;