import React from 'react';
import Person from './Person';

function NameList() {
    //const names = ['Malik', 'Souheib', 'Mack'];

    const persons = [
        {
            id: 1,
            name: 'Malik',
            age: 24,
            skill: 'Goalkeeping'
        },
        {
            id: 2,
            name: 'Souheib',
            age: 24,
            skill: 'Footballing'
        },
        {
            id: 3,
            name: 'Mack',
            age: 24,
            skill: 'Fighting in MMA'
        }
    ]

    //we use the array.map syntax
    //const nameList = names.map(name => <h3>{name}</h3>) //once we start writing html we need to use {} to evaluate the javascript expression
    const personList = persons.map(person => <Person key={person.id} person={person} />);

    return (
        <div>
            {personList}
        </div>
    )
}

export default NameList;
