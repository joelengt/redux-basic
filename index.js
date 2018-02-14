
/** sample basic way */
import { createStore } from 'redux'

const reducer = function(state, action) {
    if (action.type === 'INC') {
        return state + action.payload;
    }
    if (action.type === 'DEC') {
        return state - action.payload;
    }
    return state;
}

let initialState = 0

const store = createStore(reducer, initialState)

store.subscribe(() => {
    console.log('store changed', store.getState())
})

store.dispatch({ type: 'INC', payload: 10 })
store.dispatch({ type: 'INC', payload: 19 })
store.dispatch({ type: 'INC', payload: 31 })
store.dispatch({ type: 'DEC', payload: 1 })

