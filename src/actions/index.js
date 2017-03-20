export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const INSERT_TODO = 'INSERT_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export function toggleTodo(todo){
    return {
      type: TOGGLE_TODO,
      payload: todo
    }
}

export function removeTodo(todo){
    return {
      type: REMOVE_TODO,
      payload: todo
    }
}

export function insertTodo(todo){
    return {
      type: INSERT_TODO,
      payload: todo
    }
}

export function updateTodo(todo){
    return {
      type: UPDATE_TODO,
      payload: todo
    }
}

export function changeFilter(filter){
    return {
      type: CHANGE_FILTER,
      payload: filter
    }
}
