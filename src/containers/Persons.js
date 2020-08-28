import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';


class Persons extends Component {
    render() {
        return (
            <div>
                <AddPerson personAdded={this.props.onPersonAddedHandler} />
                {this.props.prs.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.onPersonDeletedHandler(person.id)} />
                ))}
            </div>
        );
    }
}

const mapStatetoProps = state => {
    return {
        prs: state.persons
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        onPersonAddedHandler: (name, age) => dispatch({ type: actionTypes.PERSON_ADDED, payload: { name: name, age: age } }),
        onPersonDeletedHandler: (id) => dispatch({ type: actionTypes.PERSON_DELETED, personId: id }),
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Persons);