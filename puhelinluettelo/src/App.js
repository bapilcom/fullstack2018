import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [
                {
                    name: 'Arto Hellas'
                },
                {
                    name: 'Esko Kukkonen'
                }
            ],
            newName: ''
        }
    }

    addPerson = (event) => {
        event.preventDefault();
        const personObject = {
            name: this.state.newName,
            id: this.state.persons.length + 1
        };
        const persons = this.state.persons.concat(personObject);
        this.setState({
            persons: persons,
            newName: ''
        });
    };

    handlePersonNameChange = (event) => {
        console.log(event.target.value);
        this.setState({ newName: event.target.value });
    };

    render() {
        return (
            <div>
                <h2>Puhelinluettelo</h2>
                <form onSubmit={this.addPerson}>
                    <div>
                        nimi:
                        <input
                            value={this.state.newName}
                            onChange={this.handlePersonNameChange}
                        />
                    </div>
                    <div>
                        <button type="submit">lisää</button>
                    </div>
                </form>
                <h2>Numerot</h2>
                <div>
                    {this.state.persons.map(person =>
                        (<p key={person.name}>{person.name}</p>)
                    )}
                </div>
            </div>
        )
    }
}

export default App