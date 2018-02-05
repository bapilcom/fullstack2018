import React from 'react'

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

export default Kurssi