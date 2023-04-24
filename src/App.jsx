import { useReducer } from 'react'
import { createContext } from 'react'
import './App.css'
import Form from './components/Form'
import { initialState, todoReducer,  } from './utils/Func'

export const MyContex = createContext()


function App() {
  const [ state, dispatch ] = useReducer(todoReducer, initialState)
  return (
    <MyContex.Provider value={{ state, dispatch }}>
      <>
        <Form />
      </>
    </MyContex.Provider>
  )
}

export default App
