// import useLocalStorageState from "use-local-storage-state";

import "./List.css";

export function List({ activities, isGoodWeather }) {
    return (
        <div className="createList">
            <h1>
                {isGoodWeather ? "The weather is fine" : "Bad weather today"}
            </h1>
            <p>here is the list with activities</p>
            <ul>
                {activities
                    .filter(
                        (activity) =>
                            activity.isForGoodWeather === isGoodWeather
                    )
                    .map((activity, id) => (
                        <li key={id}>{activity.name}</li>
                    ))}
            </ul>
        </div>
    );
}
