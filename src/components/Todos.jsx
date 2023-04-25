import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../App'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Todos = () => {
    const { state, dispatch } = useContext(MyContext)

    const deleteTodo = (id) => {
        dispatch({ type: "REMOVE_TODO", payload: id })
        toast.error("Delete Todo !")
    }

  return (
    <>
        <ul className='flex flex-col gap-y-2 w-full rounded-md bg-gray-200 p-2 mt-4'>
            {state.todo.map(item => (
                <li key={item.id} className="cursor-pointer p-2 bg-white rounded-md shadow-md flex justify-between items-center">
                    <span>{item.text}</span>
                    <button 
                    onClick={() => deleteTodo(item.id)}
                    className="px-2 py-1 rounded-md bg-red-500 text-white hover:bg-red-600 active:opacity-70 transition duration-200 linear"
                    >
                        <i class='bx bx-trash'></i>
                    </button>
                </li>
            ))}
        </ul>
        <ToastContainer />
    </>
  )
}

export default Todos