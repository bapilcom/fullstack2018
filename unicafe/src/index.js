import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0
        }
    }
    createCounterIncrementer = (statisticId) => {
        return () => {
            const newState = Object.assign({}, this.state);
            newState[statisticId] = this.state[statisticId] + 1;
            this.setState(newState);
        };
    }
    render() {
        return (
            <div>
                <h3>anna palautetta</h3>
                <button onClick={this.createCounterIncrementer('hyva')}>hyvä</button>
                <button onClick={this.createCounterIncrementer('neutraali')}>neutraali</button>
                <button onClick={this.createCounterIncrementer('huono')}>huono</button>
                <h3>statistiikka</h3>
                <p>hyvä {this.state.hyva}</p>
                <p>neutraali {this.state.neutraali}</p>
                <p>huono {this.state.huono}</p>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);