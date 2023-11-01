import "./App.css";
import { Form } from "./Form";
import { List } from "./List";
import { useState, useEffect } from "react";

function App() {
  const [activities, setActivities] = useState([]);
  function handleAddActivity(activity) {
    setActivities([...activities, activity]);
  }
  useEffect(() => {}, [activities]);
  const isGoodWeather = true;

  return (
    <>
      <List activities={activities} isGoodWeather={isGoodWeather} />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
