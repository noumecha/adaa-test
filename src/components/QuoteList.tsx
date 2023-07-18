import React from 'react';
import '../styles/QuoteList.module.css';
import QuoteData from '../models/quote';

type QuoteProps = {
    quote: QuoteData,
    onRemove: (id: number) => void
};

type QuoteListProps = {
    quotes: QuoteData[],
    onRemove: (id: number) => void
}

const Quote: React.FC<QuoteProps> = ({quote, onRemove}) => {
    return (
        <div className='quote' onClick={onRemove.bind(null, quote.id)}>
            <p><i>{quote.body}</i></p>
            <p> -{quote.author}</p>
        </div>
    );
};

const QuoteList: React.FC<QuoteListProps> = ({quotes, onRemove}) => {
    const allQuotes = quotes.map(quote => {
        return <Quote quote={quote} key={quote.id} onRemove={onRemove} />
    });
    return (
        <div className='quoteContainer'>
            {allQuotes}
        </div>
    );
};

export default QuoteList;