import React from 'react'
import ReactDOM from 'react-dom'

const Anecdote = (props) => {
    return (
        <div>
            <p>{props.text}</p>
            <p>has {props.voteCount} votes</p>
        </div>
    );
};

class App extends React.Component {
    constructor(props) {
        super(props);
        const voteCounts = {};
        for (let i = 0; i < props.anecdotes.length; i++) {
            voteCounts[i] = 0;
        }
        this.state = {
            selected: 0,
            voteCounts: voteCounts,
            winnerIndex: 0
        }
    }

    changeSelected = () => {
        this.setState({
            selected: this.getRandomInt(0, this.props.anecdotes.length - 1)
        });
    };

    getRandomInt = (min, max)=> {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    voteSelected = () => {
        this.setState((prevState) => {
            const newState = Object.assign({}, prevState);
            newState.voteCounts[this.state.selected]++;
            newState.winnerIndex = this.getWinnerIndex(newState.voteCounts);
            return newState;
        });
    };

    getWinnerIndex = (voteCounts) => {
        let winnerIndex = -1;
        let maxVoteCount = -1;
        for (let i = 0; i < this.props.anecdotes.length; i++) {
            if (voteCounts[i] > maxVoteCount) {
                maxVoteCount = voteCounts[i];
                winnerIndex = i;
            }
        }
        return winnerIndex;
    };

    render() {
        return (
            <div>
                <Anecdote text={this.props.anecdotes[this.state.selected]} voteCount={this.state.voteCounts[this.state.selected]}/>
                <button onClick={this.voteSelected}>vote</button>
                <button onClick={this.changeSelected}>next anecdote</button>
                <h3>anecdote with most votes:</h3>
                <Anecdote text={this.props.anecdotes[this.state.winnerIndex]} voteCount={this.state.voteCounts[this.state.winnerIndex]}/>
            </div>
        )
    }
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
);