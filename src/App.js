import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person'

class App extends Component {
    state = {
        persons: [
            { name: "Jim", age: 39, role: "father"},
            {name: "Joy", age: 38, role: "mother"},
            {name: "Casey", age: 8, role: "daughter"},
            { name: "Emily", age: 5, role: "daughter"}
        ]
    }
    render() {
        return ( 
            <div className = "App" >
            <h1> turkey shoes </h1> 
            <button> Switch Name </button>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age} > I am the {this.state.persons[0].role} </Person>
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age} > I am the {this.state.persons[1].role} </Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age} > I am the {this.state.persons[2].role} </Person>
            <Person name={this.state.persons[3].name} age={this.state.persons[3].age} > I am the {this.state.persons[3].role} </Person>
            </div>
        );
    }
}

export default App;