import React from 'react'
import ReactDOM from 'react-dom'

const Kurssi = (props) => {
    return (
        <div>
            <h1>{props.kurssi.nimi}</h1>
            <Sisalto osat={props.kurssi.osat} />
            <Yhteensa osat={props.kurssi.osat} />
        </div>
    )
};

const Osa = (props) => {
    return (
        <p>{props.nimi} {props.tehtavamaara}</p>
    )
};

const Sisalto = (props) => {
    return (
        <div>
            {props.osat.map(osa =>
                <Osa nimi={osa.nimi} tehtavamaara={osa.tehtavia}/>
            )}
        </div>
    )
};

const Yhteensa = (props) => {
    return (
        <p>yhteensä {props.osat[0].tehtavia + props.osat[1].tehtavia + props.osat[2].tehtavia} tehtävää</p>
    )
};

const App = () => {
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
            {
                nimi: 'Reactin perusteet',
                tehtavia: 10,
                id: 1
            },
            {
                nimi: 'Tiedonvälitys propseilla',
                tehtavia: 7,
                id: 2
            },
            {
                nimi: 'Komponenttien tila',
                tehtavia: 14,
                id: 3
            },
            {
                nimi: 'Redux',
                tehtavia: 7,
                id: 4
            }
        ]
    };

    return (
        <div>
            <Kurssi kurssi={kurssi}/>
        </div>
    )
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);