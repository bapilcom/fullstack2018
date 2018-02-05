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
                <Osa key={osa.id} nimi={osa.nimi} tehtavamaara={osa.tehtavia}/>
            )}
        </div>
    )
};

const Yhteensa = (props) => {
    const tehtavaSum = props.osat.reduce((accumulator, osa) => accumulator + osa.tehtavia, 0);
    return (
        <p>yhteensä {tehtavaSum} tehtävää</p>
    )
};

const App = () => {
    const kurssit = [
        {
            nimi: 'Half Stack -sovelluskehitys',
            id: 1,
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
                }
            ]
        },
        {
            nimi: 'Node.js',
            id: 2,
            osat: [
                {
                    nimi: 'Routing',
                    tehtavia: 3,
                    id: 1
                },
                {
                    nimi: 'Middlewaret',
                    tehtavia: 7,
                    id: 2
                }
            ]
        }
    ];

    return (
        <div>
            {kurssit.map(kurssi =>
                <Kurssi key={kurssi.id} kurssi={kurssi}/>
            )}
        </div>
    )
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);