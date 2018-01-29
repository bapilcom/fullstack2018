import React from 'react'
import ReactDOM from 'react-dom'

const Kurssi = (props) => {
    return (
        <h1>{props.kurssi}</h1>
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
            <Osa nimi={props.osat[0].nimi} tehtavamaara={props.osat[0].tehtavia}/>
            <Osa nimi={props.osat[1].nimi} tehtavamaara={props.osat[1].tehtavia}/>
            <Osa nimi={props.osat[2].nimi} tehtavamaara={props.osat[2].tehtavia}/>
        </div>
    )
};

const Yhteensa = (props) => {
    return (
        <p>yhteensä {props.osat[0].tehtavia + props.osat[1].tehtavia + props.osat[2].tehtavia} tehtävää</p>
    )
};

const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys';
    const osat = [
        {
            nimi: 'Reactin perusteet',
            tehtavia: 10
        },
        {
            nimi: 'Tiedonvälitys propseilla',
            tehtavia: 7
        },
        {
            nimi: 'Komponenttien tila',
            tehtavia: 14
        }
    ];

    return (
        <div>
            <Kurssi kurssi={kurssi}/>
            <Sisalto osat={osat} />
            <Yhteensa osat={osat} />
        </div>
    )
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);