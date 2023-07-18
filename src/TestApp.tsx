import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./components/ProductList"

const TestApp = () => {
    return (
        <div className="QuoteApp container">
          <ProductList />
        </div>
      );
}

export default TestApp;