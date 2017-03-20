export const TOGGLE_TODO = 'TOGGLE_TODO';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export function toggleTodo(todo){
    return {
      type: TOGGLE_TODO,
      payload: todo
    }
}

export function changeFilter(filter){
    return {
      type: CHANGE_FILTER,
      payload: filter
    }
}
