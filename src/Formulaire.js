import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Undo2 } from "lucide-react";
import DateObject from "react-date-object";

export default function Formulaire() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function addTodo(event) {
    event.preventDefault();

    if (name.trim() !== "" && description.trim() !== "") {
      const newTodo = { name, description };

      dispatch({ type: "ADD_TASK", payload: newTodo }); // Dispatch the action

      setName("");
      setDescription("");
      navigate("/");
    }
  }
  var date = new DateObject();
  return (
    <>
      <div className="flex justify-around gap-80 p-5  bg-purple-300 ">
        <h1 className="text-4xl font-extrabold ">Hello!!</h1>
        <div className="mt-10 font-bold text-xl text-gray-600">
          {date.format()}
        </div>
        <Link to="/" className="text-lg text-purple-600 font-bold flex">
          List <Undo2 />
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center  mx-96 rounded-xl">
        <form
          onSubmit={addTodo} // Utilise onSubmit pour soumettre le formulaire
          className="flex flex-col  pt-9"
        >
          <div className="flex  gap-4 items-center">
            <label className="label font-bold">Name:</label>
            <input
              required
              type="text"
              className="border border-black rounded-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span className="highlight"></span>
            <span className="bar"></span>
          </div>
          <div className="flex flex-col mt-11 ">
            <label htmlFor="description" className="font-bold mb-4">
              Description:
            </label>
            <textarea
              name="description"
              id="description"
              className="border border-black  rounded-lg"
              rows={5}
              cols={40}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 px-7 text-white font-bold py-2 rounded-xl mt-16"
          >
            ADD
          </button>
        </form>
      </div>
    </>
  );
}
