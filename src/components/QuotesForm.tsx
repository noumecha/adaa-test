import React, {useRef} from 'react';
import '../styles/QuotesForm.module.css';
import QuoteData from '../models/quote';

type QuotesFormProps = {
    onAddQuote: (quote: QuoteData) => void
};

const QuotesForm: React.FC<QuotesFormProps> = ({onAddQuote}) => {

    const authorRef = useRef<HTMLInputElement>(null);
    const quoteRef = useRef<HTMLTextAreaElement>(null);

    const addButtonClickHandler = (event: React.FormEvent): void => {
        event.preventDefault();

        const quote = new QuoteData(
            Math.floor(Math.random() *100000 + 1),
            quoteRef.current ? quoteRef.current.value : '',
            authorRef.current ? authorRef.current.value: ''
        )

        onAddQuote(quote);
    };

    return (
        <form className="quotesForm" onSubmit={addButtonClickHandler}>
            <div className='inputSection'>
                <label htmlFor="author">Author</label>
                <input type="text" id="author" placeholder="Name" ref={authorRef} />
            </div>
            <div className='inputSection'>
                <label htmlFor="quote">Quote</label>
                <textarea id="quote" placeholder="Quote body" ref={quoteRef}/>
            </div>
            <button type='submit'>Add</button>
        </form>
    );
}

export default QuotesForm;