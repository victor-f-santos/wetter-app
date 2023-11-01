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
            console.log(weather);
        }

        startFetching();
    }, [activities]);
    const isGoodWeather = weather.isGoodWeather;
    console.log(isGoodWeather);

    return (
        <>
            <List activities={activities} isGoodWeather={isGoodWeather} />
            <Form onAddActivity={handleAddActivity} />
        </>
    );
}

export default App;
