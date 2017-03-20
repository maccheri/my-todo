export const TOGGLE_TODO = 'TOGGLE_TODO';

export function toggleTodo(todo){
    return {
      type: 'TOGGLE_TODO',
      payload: todo
    }
}
