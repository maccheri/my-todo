import {TOGGLE_TODO} from '../actions/index';
import _ from 'lodash';

const initialState = [
    {
        id: 1,
        task: 'Watch TV',
        isDone: false
    }, {
        id: 2,
        task: 'Wash the dishes',
        isDone: true
    }, {
        id: 3,
        task: 'Test',
        isDone: false
    }, {
        id: 4,
        task: 'asdasdasd',
        isDone: false
    }
];

export default function(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_TODO:
            return _.map(state, (todo) => {
                if (action.payload.id === todo.id) {
                    todo.isDone = !todo.isDone;
                }

                return todo;
            });
         default:
            return state;
    }
}
