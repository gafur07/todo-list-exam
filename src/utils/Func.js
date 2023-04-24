export const initialState = { 
    todo: []
  };
  
export function todoReducer(state, action) {
    switch (action.type) {
      case 'ADD_TODO':
        return { todo: [...state.todo, action.payload]};
      case 'DELETE_TODO':
        const updatedTasks = state.todo.filter((item) => item.id !== action.payload);
        return { todo: updatedTasks };
      default:
        return state;
    }
  }
  
