import "./App.css";
import { Form } from "./Form";
import { List } from "./List";
import { useState, useEffect } from "react";

function App() {
    const [activities, setActivities] = useState([]);
    function handleAddActivity(activity) {
        setActivities([...activities, activity]);
    }
    // useEffect(() => {}, [activities]);
    return (
        <>
            <List activities={activities} />
            <Form onAddActivity={handleAddActivity} />
        </>
    );
}

export default App;
