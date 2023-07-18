import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/SearchBar"

const TestApp = () => {
    return (
        <div className="QuoteApp container">
          <SearchBar />
        </div>
      );
}

export default TestApp;