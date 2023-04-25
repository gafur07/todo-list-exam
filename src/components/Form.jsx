import React, { useContext } from 'react'
import { MyContext } from '../App'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
    const { state, dispatch } = useContext(MyContext)

    const addTodo = (e) => {
        e.preventDefault()
        const newTask = { id: Date.now(), text: e.target.task.value }
        dispatch({ type: "ADD_TODO", payload: newTask}, toast.success("Success"))
        e.target.reset()
    }

  return (
    <>
        <form onSubmit={addTodo} className="flex justify-center items-center w-full gap-2">
            <input type="text" name='task' placeholder='Create task ... ' className='w-[80%] px-4 py-2 border-2 rounded-md shadow-md outline-none'/>
            <button className='w-[20%] py-2 px-4 bg-blue-400 rounded-md text-white active:opacity-70 hover:bg-blue-500 transition duration-200 linear shadow-md'>Add</button>
        </form>
        <ToastContainer />
    </>
  )
}

export default Form