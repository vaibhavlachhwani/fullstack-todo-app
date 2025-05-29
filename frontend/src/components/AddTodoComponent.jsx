import { useEffect, useState } from "react";
import { addTodo } from "../services/api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { useNavigate, useParams } from "react-router-dom";

export default function AddTodoComponent() {
  const authContext = useAuth();
  const username = authContext.username;
  const token = authContext.token;

  // const [todo, setTodo] = useState({});

  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [done, setDone] = useState(false);

  const [showError, setShowError] = useState(false);

  const navigate = useNavigate();

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleDueDateChange(event) {
    setDueDate(event.target.value);
  }

  function handleIsDoneChange(event) {
    setDone(event.target.checked);
  }

  function handleSubmit() {
    if (description.trim() === "" || !isDate(dueDate)) {
      setShowError(true);
    } else {
      setShowError(false);
      postTodo();
    }
  }

  function postTodo() {
    const newTodo = { description, dueDate, done };

    addTodo(username, newTodo, token)
      .then((res) => {
        console.log(res);
        navigate(`/list-todos`);
      })
      .catch((err) => {
        console.log(err);
        setShowError(true);
      });
  }

  function isDate(date) {
    return new Date(date) !== "Invalid Date" && !isNaN(new Date(date));
  }

  return (
    <>
      <div className="min-h-screen bg-base-100 flex justify-center items-center">
        <div className="daisy-card bg-base-200 daisy-card-xl shadow-sm daisy-rounded-box">
          <div className="daisy-card-body">
            <div className="flex justify-center">
              <h2 className="daisy-card-title">Add new Todo Item</h2>
            </div>

            <fieldset className="daisy-fieldset w-2xl border border-base-300 bg-base-300 rounded-box p-4">
              <p className="text-lg">Description</p>
              <input
                className="daisy-input input-primary bg-base-100 border-base-300 w-full"
                type="text"
                placeholder="New description"
                id="description"
                value={description}
                onChange={handleDescriptionChange}
                required
              />

              <br />

              <p className="text-lg">Due Date</p>
              <input
                className="daisy-input input-primary bg-base-100 border border-base-300 w-1/2"
                type="date"
                placeholder=""
                id="dueDate"
                value={dueDate}
                onChange={handleDueDateChange}
                required
              />

              <br />

              <p className="text-lg">Completed ?</p>
              <input
                className="daisy-checkbox checkbox-primary bg-base-100 border border-base-300"
                type="checkbox"
                placeholder=""
                id="isCompleted?"
                checked={done}
                onChange={handleIsDoneChange}
              />
            </fieldset>

            <div className="daisy-card-actions">
              <input
                type="submit"
                value="Add"
                className="daisy-btn daisy-btn-primary w-full"
                onClick={handleSubmit}
              />
            </div>

            <div className={`${showError ? `block` : `hidden`}`}>
              <div className="daisy-badge daisy-badge-lg w-full daisy-badge-error">
                <svg
                  className="size-[1em]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g fill="currentColor">
                    <rect
                      x="1.972"
                      y="11"
                      width="20.056"
                      height="2"
                      transform="translate(-4.971 12) rotate(-45)"
                      fill="currentColor"
                      strokeWidth={0}
                    ></rect>
                    <path
                      d="m12,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm0-20C7.038,3,3,7.037,3,12s4.038,9,9,9,9-4.037,9-9S16.962,3,12,3Z"
                      strokeWidth={0}
                      fill="currentColor"
                    ></path>
                  </g>
                </svg>
                Error
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
