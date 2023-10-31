import "./App.css";
import { Form } from "./Form";
import { useState, useEffect } from "react";

function App() {
  const [activities, setActivities] = useState([]);
  function handleAddActivity(activity) {
    setActivities([...activities, activity]);
  }
  useEffect(() => {}, [activities]);
  return (
    <>
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
