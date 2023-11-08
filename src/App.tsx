import "./App.scss";
import Popup from "./components/Popup/Popup";
import { Checklist } from "./components/Checklist/Checklist";
import UpdateList from "./components/UpdateList/UpdateList";
import React, { useState } from "react";

function App() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div role="root54">
      <Checklist></Checklist>
      <button onClick={() => setOpen(true)} id="PopOpen">
        Add Task
      </button>
      {open ? (
        <Popup data-testid="popup" closePopup={() => setOpen(false)} />
      ) : null}
      <UpdateList></UpdateList>
    </div>
  );
}

export default App;
