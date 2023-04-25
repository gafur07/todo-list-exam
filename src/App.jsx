import React from 'react'
import { useReducer } from 'react'
import { createContext } from 'react'
import Form from './components/Form'
import Todos from './components/Todos'
import { initialState, reducer } from './utils/Func'

export const MyContext = createContext()

const App = () => {
  const [ state, dispatch ] = useReducer(reducer, initialState)
  return (
    <MyContext.Provider value={{ state, dispatch }}>
      <div className='flex justify-center items-center w-full min-h-[100vh] bg-indigo-500'>
        <div className='w-[450px] bg-white rounded-md p-4'>
          <div className='"w-full flex justify-center items-center flex-col gap-6'>
            <h1 className='text-3xl text-gray-500 font-bold'>Todo List</h1>
            <Form />
          </div>
          <Todos />
        </div>
        
      </div>
      
    </MyContext.Provider>
  )
}

export default App