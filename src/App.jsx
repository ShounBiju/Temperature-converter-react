import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputScale, setInputScale] = useState('Celsius');
  const [outputScale, setOutputScale] = useState('Fahrenheit');
  const [convertedValue, setConvertedValue] = useState(null);

  // Handle conversion logic
  const handleConversion = () => {
    const value = parseFloat(inputValue);
    if (isNaN(value)) {
      setConvertedValue(null);
      return;
    }

    let result;
    if (inputScale === outputScale) {
      result = value;
    } else if (inputScale === 'Celsius' && outputScale === 'Fahrenheit') {
      result = (value * 9) / 5 + 32;
    } else if (inputScale === 'Fahrenheit' && outputScale === 'Celsius') {
      result = ((value - 32) * 5) / 9;
    }

    setConvertedValue(result.toFixed(2));
  };

  useEffect(() => {
    handleConversion();
  }, [inputValue, inputScale, outputScale]);

  // Clear all fields
  const clearFields = () => {
    setInputValue('');
    setInputScale('Celsius');
    setOutputScale('Fahrenheit');
    setConvertedValue(null);
  };

  return (
    <div className="app-container">
      <h1>Temperature Converter</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter temperature !! "
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <select value={inputScale} onChange={(e) => setInputScale(e.target.value)}>
          <option value="Celsius">Celsius</option>
          <option value="Fahrenheit">Fahrenheit</option>
        </select>

        <span>to</span>

        <select value={outputScale} onChange={(e) => setOutputScale(e.target.value)}>
          <option value="Celsius">Celsius</option>
          <option value="Fahrenheit">Fahrenheit</option>
        </select>
      </div>

      {convertedValue !== null && (
        <div className="result">
          <h2>Converted Value: {convertedValue} {outputScale}</h2>
        </div>
      )}

      <button className="clear-button" onClick={clearFields}>
        Clear
      </button>
    </div>
  );
};

export default App;
