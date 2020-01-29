import React from 'react'

function NameList() {
    //const Name=['Nisha','Soumya','Mona']
    const Person=[
        {
            Id:1,
            Name:'Mona',
            age:22,
            skill:'React'
        },
        {
            Id:2,
            Name:'Lissa',
            age:23,
            skill:'Angular'
        },
        {   Id:3,
            Name:'Tina',
            age:24,
            skill:'PHP'
        }
    ]
const PersonList= Person.map(Person=><h1>{Person.Id} : I am {Person.Name}. My age is {Person.age}.My skill is {Person.skill} </h1>)
    return (
        <div>
            {/* <h1>{Name[0]}</h1>
            <h1>{Name[1]}</h1>
            <h1>{Name[2]}</h1> */}
            {/* {
                Name.map(Name=><h2>{Name}</h2>)
            } */}
            {PersonList}
        </div>
    )
}

export default NameList
