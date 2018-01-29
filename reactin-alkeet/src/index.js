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
    const osa1 = 'Reactin perusteet';
    const tehtavia1 = 10;
    const osa2 = 'Tiedonvälitys propseilla';
    const tehtavia2 = 7;
    const osa3 = 'Komponenttien tila';
    const tehtavia3 = 14;

    return (
        <div>
            <Kurssi kurssi={kurssi}/>
            <Sisalto osa1={osa1} osa2={osa2} osa3={osa3} tehtavia1={tehtavia1} tehtavia2={tehtavia2} tehtavia3={tehtavia3}/>
            <Yhteensa lkm={tehtavia1 + tehtavia2 + tehtavia3}/>
        </div>
    )
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);