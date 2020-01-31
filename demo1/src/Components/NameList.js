import React from 'react'
import Person from './Person'
function NameList() {
    //const name=['Nisha','Soumya','Mona','Mona'] //shows warning for having 2 same value when we use key 
    const name=['Nisha','Soumya','Mona']
    const persons=[
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
//const PersonList= Person.map(Person=><h1>{Person.Id} : I am {Person.Name}. My age is {Person.age}.My skill is {Person.skill} </h1>)
//const personList= persons.map(person=><Person person={person}/>)
//const personList= persons.map(person=><Person key={person.Id} person={person}/>) // Key is for giving unique value i.e it can be with unique id or name and it cannot be called in Person component
//const nameList= name.map(name=><h1>{name}</h1>) //without key it shows warning
//const nameList= name.map(name=><h1 key={name}>{name}</h1>) //shows warning for not having duplicate value
const nameList= name.map((name,index)=><h1 key={index}>{index}{name}</h1>) // with index value starting from 0.
return (
        <div>
            {/* <h1>{Name[0]}</h1>
            <h1>{Name[1]}</h1>
            <h1>{Name[2]}</h1> */}
            {/* {
                Name.map(Name=><h2>{Name}</h2>)
            } */}
            {nameList}
            {/* {personList}
        */}
        </div> 
    )
}

export default NameList
