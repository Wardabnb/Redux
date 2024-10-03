import { CirclePlus, Trash2 } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import DateObject from "react-date-object";
import { Link } from "react-router-dom";

export default function Home() {
  const todos = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [editingTodoIndex, setEditingTodoIndex] = useState(null);
  const [updatedTask, setUpdatedTask] = useState({
    name: "",
    description: "",
    isDone: false,
  });

  // Delete task
  function deleteTodo(index) {
    dispatch({ type: "DELETE_TASK", payload: index });
  }

  // Start editing a task
  function startEditing(index) {
    setEditingTodoIndex(index);
    setUpdatedTask(todos[index]); // Pre-fill form with the selected task
  }

  // Handle input change during task editing
  function handleInputChange(e) {
    const { name, value } = e.target;
    setUpdatedTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  }

  // Save the updated task
  function saveUpdatedTask() {
    dispatch({
      type: "EDIT_TASK",
      payload: { index: editingTodoIndex, updatedTask },
    });
    setEditingTodoIndex(null);
  }

  // Toggle task completion
  function toggleTaskCompletion(index) {
    dispatch({ type: "TOGGLE_TASK", payload: { index } });
  }

  var date = new DateObject();
  return (
    <>
      <div className="flex justify-around gap-80 p-5  bg-purple-300 ">
        <h1 className="text-4xl font-extrabold ">Hello!!</h1>
        <div className="mt-10 font-bold text-xl text-gray-600">
          {date.format()}
        </div>
        <Link to="/add">
          <CirclePlus className="w-14 h-14 " />
        </Link>
      </div>

      <div className="flex flex-col justify-center items-center p-5 px-28 mx-60 rounded-lg gap-5 ">
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            <div
              key={index}
              className="flex items-center  justify-between px-10  p-5 w-full rounded-lg bg-slate-200"
            >
              {editingTodoIndex === index ? (
                <div className="w-full ">
                  <input
                    type="text"
                    name="name"
                    value={updatedTask.name}
                    onChange={handleInputChange}
                    className="border border-gray-500 w-full p-2 rounded-md mb-4"
                  />
                  <textarea
                    name="description"
                    value={updatedTask.description}
                    onChange={handleInputChange}
                    className="border border-gray-500 w-full p-2 rounded-md mb-4"
                    rows="4"
                  />
                  <button
                    onClick={saveUpdatedTask}
                    className="bg-green-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Save
                  </button>
                </div>
              ) : (
                // Display the task normally
                <div className="flex items-center w-full gap-10">
                  <input
                    type="checkbox"
                    checked={todo.isDone}
                    onChange={() => toggleTaskCompletion(index)}
                    className="mr-2"
                  />
                  <div className="flex  flex-col text-center">
                    <h1
                      className={`font-bold text-xl text-purple-800 cursor-pointer ${
                        todo.isDone ? "line-through" : ""
                      }`}
                      onClick={() => startEditing(index)}
                    >
                      {todo.name}
                    </h1>
                    <p
                      className={`text-gray-600 text-justify cursor-pointer ${
                        todo.isDone ? "line-through" : ""
                      }`}
                      onClick={() => startEditing(index)}
                    >
                      {todo.description}
                    </p>
                  </div>
                </div>
              )}
              <Trash2
                className="text-red-700 p-5 w-16 h-16 cursor-pointer"
                onClick={() => deleteTodo(index)}
              />
            </div>
          ))
        ) : (
          <p className="text-center mt-5 text-2xl">No todos yet!</p>
        )}
      </div>
    </>
  );
}
