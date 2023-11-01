import "./App.css";
import { Form } from "./Form";
import { List } from "./List";
import { useState, useEffect } from "react";

function App() {
  const [activities, setActivities] = useState([]);
  const [weather, setWeather] = useState({});
  function handleAddActivity(activity) {
    setActivities([...activities, activity]);
  }
  useEffect(() => {
    async function startFetching() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather/"
      );
      const weather = await response.json();

      setWeather(weather);
    }

    startFetching();
  }, [activities]);
  const isGoodWeather = weather.isGoodWeather;
  function handleDeleteActivity(id) {
    const filteredActivities = activities.filter(
      (activity) => activity.id !== id
    );
    setActivities(filteredActivities);
  }

  return (
    <>
      <div className="temp">
        {weather.condition} {weather.temperature + "°C"}
      </div>
      <List
        activities={activities}
        isGoodWeather={isGoodWeather}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
