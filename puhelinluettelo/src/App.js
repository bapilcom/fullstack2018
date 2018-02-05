import React from 'react';
import personService from './services/personService'

const Person = (props) => {
    return (<p key={props.person.name}>{props.person.name}</p>);
};

const PersonList = (props) => {
    return (
        <div>
            {props.persons
                .filter(person => {
                    return (person.name.indexOf(props.filterName) !== -1);
                })
                .map(person =>
                    (<Person key={person.name} person={person}/>)
                )}
        </div>
    )
};


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [],
            newName: '',
            newNumber: '',
            filterName: ''
        }
    }

    componentDidMount() {
        personService.getAll()
            .then(response => {
                this.setState({ persons: response.data })
            })
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
                number: this.state.newNumber,
                id: this.state.persons.length + 1
            };
            personService.create(personObject)
                .then(response => {
                    const persons = this.state.persons.concat(personObject);
                    this.setState({
                        persons: persons,
                        newName: '',
                        newNumber: ''
                    });
                });
        } else {
            alert('Henkilö ' + personName + ' on jo luettelossa');
        }
    };

    handlePersonNameChange = (event) => {
        this.setState({ newName: event.target.value });
    };

    handlePersonNumberChange = (event) => {
        this.setState({ newNumber: event.target.value });
    };

    handleFilterNameChange = (event) => {
        this.setState({ filterName: event.target.value });
    };

    render() {
        return (
            <div>
                <h2>Puhelinluettelo</h2>
                rajaa näytettäviä:
                <input
                    value={this.state.filterName}
                    onChange={this.handleFilterNameChange}
                />
                <h2>Lisää uusi</h2>
                <form onSubmit={this.addPerson}>
                    <div>
                        nimi:
                        <input
                            value={this.state.newName}
                            onChange={this.handlePersonNameChange}
                        />
                    </div>
                    <div>
                        numero:
                        <input
                            value={this.state.newNumber}
                            onChange={this.handlePersonNumberChange}
                        />
                    </div>
                    <div>
                        <button type="submit">lisää</button>
                    </div>
                </form>
                <h2>Numerot</h2>
                <PersonList persons={this.state.persons} filterName={this.state.filterName}/>
            </div>
        )
    }
}

export default App