import {TOGGLE_TODO, REMOVE_TODO, INSERT_TODO, UPDATE_TODO} from '../actions/index';
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
            return toggleTodoReducer(state, action);
        case REMOVE_TODO:
            return removeTodoReducer(state, action);
        case INSERT_TODO:
            return insertTodoReducer(state, action);
        case UPDATE_TODO:
            return updateTodoReducer(state, action);
        default:
            return state;
    }
}

function toggleTodoReducer(state = {}, action) {
    if (action) {
        return _.map(state, (todo) => {
            if (action.payload.id === todo.id) {
                todo.isDone = !todo.isDone;
            }
            return todo;
        });
    } else {
        return state;
    }
}

function removeTodoReducer(state, action) {
    if (action) {
        return _.filter(state, (todo) => {
            if (action.payload.id !== todo.id) {
                return todo;
            }
        });
    } else {
        return state;
    }
}

function insertTodoReducer(state, action) {
    if (action) {
      console.log(state);
      console.log(action.payload);
        return [
          ...state,
          { ...action.payload }
        ];
    } else {
        return state;
    }
}

function updateTodoReducer(state, action) {
    if (action) {
        return _.map(state, (todo) => {
            if (todo.id !== action.payload.id) {
                return todo;
            }

            return {
                ...action.payload
            };
        });
    } else {
        return state;
    }
}
