import "./App.css";
import { Form } from "./Form";
import { List } from "./List";
import { useState, useEffect } from "react";

function App() {
    const [activities, setActivities] = useState(
        localStorage.getItem("activities")
            ? JSON.parse(localStorage.getItem("activities"))
            : []
    );
    const [weather, setWeather] = useState({});

    useEffect(() => {
        async function startFetching() {
            const response = await fetch(
                "https://example-apis.vercel.app/api/weather/"
            );
            const weather = await response.json();

            setWeather(weather);
        }

        startFetching();

        setInterval(() => {
            startFetching();
        }, 5000);
    }, []);

    useEffect(() => {
        localStorage.setItem("activities", JSON.stringify(activities));
    }, [activities]);

    const isGoodWeather = weather.isGoodWeather;

    function handleAddActivity(activity) {
        setActivities([...activities, activity]);
    }

    function handleDeleteActivity(id) {
        const filteredActivities = activities.filter(
            (activity) => activity.id !== id
        );
        setActivities(filteredActivities);
    }

    return (
        <>
            {weather.condition} {weather.temperature + "°C"}
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
