import React, { useState, useEffect } from "react";

interface Task {
  id: string;
  status: boolean;
  task: string;
}
export function Checklist() {
  const url = "http://localhost:8080/tasks";
  const [data, setData] = useState([]);
  const [isChecked, setisChecked] = useState("false");

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    task: Task
  ) => {
    if (event.target.value == "false") {
      setisChecked("true");
      PatchRequest(task.id, false);
    } else {
      setisChecked("false");
      PatchRequest(task.id, true);
    }
  };

  let PatchRequest = (taskid: String, status: Boolean) => {
    fetch(`${url}/${taskid}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PATCH",

      // Fields that to be updated are passed
      body: JSON.stringify({
        status: status,
      }),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div id="checklist" data-testid="checklist">
      <h1>Tasks</h1>
      {data.map((task: Task) => {
        if (task.status) {
          return (
            <div key={task.id} data-testid="taskdiv">
              <input
                id={task.id}
                type="checkbox"
                value={isChecked}
                onChange={(e) => handleChange(e, task)}
              />
              <label htmlFor={task.id} data-testid="testlabel">
                {task.task}
              </label>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
