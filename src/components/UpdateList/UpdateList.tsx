import { useState } from "react";
import "./UpdateList.scss";
import React from "react";

const UpdateList: React.FC = () => {
  const [data, setData] = useState<any[]>([]); // You can specify a more specific type if needed
  const url = "http://localhost:8080/tasks";

  const handleClick = () => {
    window.location.reload();
  };

  return (
    <button className="UpdateListBtn" onClick={handleClick}>
      UpdateList
    </button>
  );
};

export default UpdateList;
