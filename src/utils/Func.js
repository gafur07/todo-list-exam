export const initialState = {
  todo: []
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
      case "ADD_TODO":
          return {
              todo: [...state.todo, action.payload]
          }
      case "REMOVE_TODO":
          const remove_item = state.todo.filter(item => item.id !== action.payload)
          return {
              todo: remove_item
          }
      default:
          return state
  }
}