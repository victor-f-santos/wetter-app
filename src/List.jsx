// import useLocalStorageState from "use-local-storage-state";

import "./List.css";

export function List({ activities, isGoodWeather, emoji, onDeleteActivity }) {
  return (
    <div className="createList">
      <h1>{isGoodWeather ? "Yeeeeah, let's enjoy it!" : "Not today, b*tch"}</h1>
      <ul>
        {activities
          .filter((activity) => activity.isForGoodWeather === isGoodWeather)
          .map((activity, id) => (
            <li key={id}>
              {activity.name}
              <button onClick={() => onDeleteActivity(activity.id)}>X</button>
            </li>
          ))}
      </ul>
    </div>
  );
}
