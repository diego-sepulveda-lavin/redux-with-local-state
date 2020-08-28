import React, { Component } from 'react';

import './AddPerson.css';

class AddPerson extends Component {
    state = {
        name: '',
        age: ''
    }

    nameChangeHandler = (e) => {
        this.setState({ name: e.target.value })
    }

    ageChangeHandler = (e) => {
        this.setState({ age: e.target.value })
    }

    /* inputChangeHandler = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    } */

    render() {
        return (
            <div className="AddPerson">
                <input type='text' onChange={this.nameChangeHandler} value={this.state.name} placeholder="Name" />
                <input type='number' onChange={this.ageChangeHandler} value={this.state.age} placeholder="Age" />
                <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
            </div>
        )
    }
};

export default AddPerson;