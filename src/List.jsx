// import useLocalStorageState from "use-local-storage-state";

import "./List.css";

export function List({ activities }) {
    return (
        <div className="createList">
            <p>here is the list with activities</p>
            <ul>
                {activities.map((activity, id) => (
                    <li key={id}>{activity.name}</li>
                ))}
            </ul>
        </div>
    );
}
