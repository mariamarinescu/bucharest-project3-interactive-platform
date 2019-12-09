import React from 'react';
import * as data from './my_fake_db/my_fake_db.json';
import Question from './Question'



class Quiz extends React.Component {
    constructor(props) {
        super(props);
    }




    render() {
        return(
            <div>
                <h1>Concurs Techir</h1>
                <h6>Participa, raspunzand la doua intrebari si poti castiga reduceri la produsele tale favorite.</h6>
                <Question/>
            </div>
        )
    }
}


export default Quiz

