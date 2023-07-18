import React, { useState } from 'react';
import './styles/QuoteApp.css';
import QuotesForm from './components/QuotesForm';
import QuoteList from './components/QuoteList';
import QuoteData from './models/quote';

const QuoteApp = () => {

    const [quotes, setQuotes] = useState<QuoteData[]>([]);

    const addQuoteHandler = (quote: QuoteData): void => {
      setQuotes(prevState => {
        return [...prevState, quote];
      });
    };

    const removeQuoteHandler = (id: number): void => {
      setQuotes(prevState => {
        const newQuotes = prevState.filter(quote => quote.id !== id);
        return newQuotes;
      });
    };

    return (
      <div className="QuoteApp">
        <QuotesForm onAddQuote={addQuoteHandler} />
        <QuoteList quotes={quotes} onRemove={removeQuoteHandler} />
      </div>
    );
}
export default QuoteApp;