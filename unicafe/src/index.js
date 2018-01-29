import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
);

const Statistics = (props) => {
    const totalCount = props.hyva + props.neutraali + props.huono;
    if (totalCount > 0) {
        return (
            <table>
                <tbody>
                    <Statistic text="hyvä" value={props.hyva}/>
                    <Statistic text="neutraali" value={props.neutraali}/>
                    <Statistic text="huono" value={props.huono}/>
                    <Statistic text="keskiarvo" value={props.keskiarvo}/>
                    <Statistic text="positiivisia" value={props.positiivisia}/>
                </tbody>
            </table>
        )
    } else {
        return (
            <p>ei yhtään palautetta annettu</p>
        )
    }
};

const Statistic = (props) => (
    <tr><td>{props.text}</td><td>{props.value}</td></tr>
);

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            counts: {
                hyva: 0,
                neutraali: 0,
                huono: 0
            },
            keskiarvo: 0,
            positiivisia: 0
        }
    }
    createCounterIncrementer = (statisticId) => {
        return () => {
            this.setState((prevState) => {
                const newState = Object.assign({}, prevState);
                newState.counts[statisticId]++;
                newState.keskiarvo = this.calculateAverage(newState.counts);
                newState.positiivisia = this.calculatePositivePercentage(newState.counts);
                return newState;
            });
        };
    };
    calculateAverage = (counts) => {
        let totalCount = this.getTotalCount(counts);
        if (totalCount !== 0) {
            const scores = {
                'hyva': 1,
                'neutraali': 0,
                'huono': -1
            };
            let scoreSum = (counts.hyva * scores.hyva) + (counts.neutraali * scores.neutraali) + (counts.huono * scores.huono);
            return scoreSum / totalCount;
        } else {
            return 0;
        }
    };
    calculatePositivePercentage = (counts) => {
        let totalCount = this.getTotalCount(counts);
        if (totalCount !== 0) {
            return counts.hyva / totalCount * 100;
        } else {
            return 0;
        }
    };
    getTotalCount = (counts) => {
        return counts.hyva + counts.neutraali + counts.huono;
    };
    render() {
        return (
            <div>
                <h3>anna palautetta</h3>
                <Button handleClick={this.createCounterIncrementer('hyva')} text="hyvä"/>
                <Button handleClick={this.createCounterIncrementer('neutraali')} text="neutraali"/>
                <Button handleClick={this.createCounterIncrementer('huono')} text="huono"/>
                <h3>statistiikka</h3>
                <Statistics
                    hyva={this.state.counts.hyva}
                    neutraali={this.state.counts.neutraali}
                    huono={this.state.counts.huono}
                    keskiarvo={this.state.keskiarvo.toFixed(1)}
                    positiivisia={this.state.positiivisia.toFixed(1) + ' %'}
                    />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);