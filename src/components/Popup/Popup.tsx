import React, { useState, useEffect } from "react";
import "./Popup.scss";

const Popup: React.FC<{ closePopup: () => void }> = ({ closePopup }) => {
  const [task, setTask] = useState<string>("");
  const [lastID, setLastID] = useState<string>("");
  const url = "http://localhost:8080/tasks";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          const lastItem = data[data.length - 1];
          setLastID(lastItem.id);
        } else {
          throw new Error("No data or items without IDs");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  const handleClick = () => {
    PostTask(BuildRequestBody());
    window.location.reload();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const PostTask = (json: any) => {
    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(json),
    });
  };

  const BuildRequestBody = () => {
    const taskID = (parseInt(lastID) + 1).toString();
    const jsonData = {
      id: taskID,
      task: task,
      status: true,
    };
    return jsonData;
  };

  return (
    <div className="popup-container">
      <div className="popup-body">
        <input
          className="TaskName"
          name="message"
          data-testid="task-input"
          value={task}
          onChange={handleChange}
        />
        <button className="CreateTask" onClick={handleClick}>
          Create
        </button>
        <button onClick={closePopup} className="ClosePop">
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
