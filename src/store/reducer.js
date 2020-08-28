import * as actionTypes from './actions';

const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PERSON_ADDED:
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: action.payload.name,
                age: action.payload.age
            }
            return {
                ...state,
                persons: state.persons.concat(newPerson)
            }
        case actionTypes.PERSON_DELETED:
            return {
                ...state,
                persons: state.persons.filter(person => person.id !== action.personId)
            }
        default:
            return state;
    }
}


export default reducer;