import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
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

    personExists = (name) => {
        return this.state.persons.some((person) => {
            return person.name.toLowerCase() === name.toLowerCase();
        });
    };

    addPerson = (event) => {
        event.preventDefault();
        let personName = this.state.newName;
        if (!this.personExists(personName)) {
            const personObject = {
                name: personName,
                id: this.state.persons.length + 1
            };
            const persons = this.state.persons.concat(personObject);
            this.setState({
                persons: persons,
                newName: ''
            });
        } else {
            alert('Henkilö ' + personName + ' on jo luettelossa');
        }
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