import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person'



class App extends Component {
    state = {
        persons: [
            { id: "eieie", name: "Jim", age: 39, role: "father"},
            { id:"i3i43i", name: "Joy", age: 38, role: "mother"},
            { id:"3838", name: "Casey", age: 8, role: "daughter"},
            { id:"wywy", name: "Emily", age: 5, role: "daughter"}
        ],
        otherValue: {name: "James"},
        showPersons: false
    }
    switchNameHandler = (newName) => {
        console.log('was clicked')
        // DONT DO THIS this.state.persons[0].name="James"
        this.setState({ persons: [
            { name: newName, age: 39, role: "father" },
            { name: "Joy", age: 39, role: "mother" },
            { name: "Casey", age: 8, role: "Child" },
            { name: "Emily", age: 5, role: "Child" }
        ]})
    }
    nameChangeHandler = (event,id) => {
        const personIndex = this.state.persons.findIndex( p => {
            return p.id === id;
        });

        const person = {...this.state.persons[personIndex]}

        person.name = event.target.value

        const persons = [...this.state.persons];
        persons[personIndex]=person

        this.setState({
            persons: persons
        })

    }
    deletePersonHandler = (index) => {
        const persons = [...this.state.persons];
        persons.splice(index,1);
        this.setState({persons: persons})

    }
    singleNameChangeHandler = (event) => {
        this.setState({
            otherValue: {name: event.target.value}
        })
    }
    randomIndex = () => {
        return Math.floor(Math.random()*this.state.persons.length-1)

    }
    togglePersonsHandler = (event) => {
        const doesShow = this.state.showPersons
        this.setState({showPersons: !doesShow})

    }
    render() {
        const style = {
            backgroundColor: 'yellow',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'   
        }
        let persons = null
        let buttonText = null

        if (this.state.showPersons){
            persons = (
                <div>
                    {this.state.persons.map((person,index) =>{
                        return <Person 
                        click={() => this.deletePersonHandler(index)}
                        name={person.name} 
                        age={person.age} 
                        role={person.role}
                        key={person.id} 
                        changed={(event) => this.nameChangeHandler(event,person.id)}
                        />
                        

                    })}
                </div> 
            )
            buttonText = "Hide Names"
            
        }
        else buttonText = "Show Names"
    
        
        return ( 
     
        <div className = "App" >
            <h1> turkey shoes </h1> 
            <div>
            <button style={style}
            onClick={this.togglePersonsHandler}> {buttonText} </button>
            {persons}
            </div>
        </div>
        );
    }
}

export default App;