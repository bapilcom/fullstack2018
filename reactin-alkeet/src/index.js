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
            <Osa nimi={props.osa1} tehtavamaara={props.tehtavia1}/>
            <Osa nimi={props.osa2} tehtavamaara={props.tehtavia2}/>
            <Osa nimi={props.osa3} tehtavamaara={props.tehtavia3}/>
        </div>
    )
};

const Yhteensa = (props) => {
    return (
        <p>yhteensä {props.lkm} tehtävää</p>
    )
};

const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys';
    const osa1 = {
        nimi: 'Reactin perusteet',
        tehtavia: 10
    };
    const osa2 = {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
    };
    const osa3 = {
        nimi: 'Komponenttien tila',
        tehtavia: 14
    };

    return (
        <div>
            <Kurssi kurssi={kurssi}/>
            <Sisalto osa1={osa1.nimi} osa2={osa2.nimi} osa3={osa3.nimi} tehtavia1={osa1.tehtavia} tehtavia2={osa2.tehtavia} tehtavia3={osa3.tehtavia}/>
            <Yhteensa lkm={osa1.tehtavia + osa2.tehtavia + osa3.tehtavia}/>
        </div>
    )
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);