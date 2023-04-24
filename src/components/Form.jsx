import React from "react";
import { useContext } from "react";
import { MyContex } from "../App";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const { state, dispatch } = useContext(MyContex);

  const AddTask = (e) => {
    e.preventDefault();
    const newTask = { id: Date.now(), text: e.target.task.value };
    dispatch({ type: "ADD_TODO", payload: newTask });
    toast.success("Success");
    e.target.reset();
  };

  const deleteTask = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id })
    toast.error("Delete Task")
}

  return (
    <>
      <div className="flex justify-center items-center w-full h-screen bg-indigo-500">
        <div className="w-[450px] bg-white rounded-md p-4">
          <div className="w-full flex justify-center items-center flex-col gap-6">
            <h1 className="text-3xl font-bold text-gray-600">Todo List</h1>
            <form
              onSubmit={AddTask}
              className={"flex justify-center items-center w-full gap-2"}
            >
              <input
                className="w-[80%] px-4 py-2 border-2 rounded-md shadow-md outline-none"
                type="text"
                name="task"
                placeholder="Add new task ... "
              />
              <button
                className="w-[20%] py-2 px-4 bg-blue-400 rounded-md text-white active:opacity-70 hover:bg-blue-500 transition duration-200 linear shadow-md"
                type="submit"
              >
                Add
              </button>
            </form>
          </div>

          <ul className="flex flex-col gap-y-2 w-full rounded-md bg-gray-200 p-2 mt-4">
            {state.todo.map((item) => (
              <li
                key={item.id}
                className="cursor-pointer p-2 bg-white rounded-md shadow-md flex justify-between items-center"
              >
                <span>{item.text}</span>
                <button
                  className="px-2 py-1 rounded-md bg-red-500 text-white hover:bg-red-600 active:opacity-70 transition duration-200 linear"
                  onClick={() => deleteTask(item.id)}
                >
                  <i class="bx bx-trash"></i>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Form;
