import { uid } from "uid";

export function Form({ onAddActivity }) {
  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      id: uid(),
      name: e.target.name.value,
      isForGoodWeather: e.target.weather.checked,
    };
    onAddActivity(data);
    e.target.name.value = "";
    e.target.name.focus();
    e.target.weather.checked = false;
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Add new activity</p>
      Add name:
      <input type="text" name="name" />
      <br />
      <label htmlFor="weather">Good weather activity</label>
      <input type="checkbox" name="weather" id="weather"></input>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
