import React from 'react'
import ReactDOM from 'react-dom'

const createCounterIncrementer = (spanId) => {
    return () => {
        const spanElement = document.getElementById(spanId);
        let count = Number(spanElement.textContent);
        count++;
        spanElement.textContent = count;
    };
};

const App = () => {

    return (
        <div>
            <h3>anna palautetta</h3>
            <button onClick={createCounterIncrementer('counter-hyva')}>hyvä</button>
            <button onClick={createCounterIncrementer('counter-neutraali')}>neutraali</button>
            <button onClick={createCounterIncrementer('counter-huono')}>huono</button>
            <h3>statistiikka</h3>
            <p>hyvä <span id="counter-hyva">0</span></p>
            <p>neutraali <span id="counter-neutraali">0</span></p>
            <p>huono <span id="counter-huono">0</span></p>
        </div>
    )
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);