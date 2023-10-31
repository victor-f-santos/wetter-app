export function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("hey");
  }
  onAddActivity({
    name: form.elements.name.value
    isForGoodWeather: form.elements.isForGoodWeather.checked
  })


  return (
    <form onSubmit={handleSubmit}>
      <h1>Wetter App</h1>
      <p>Add new activity</p>
      Add name:
      <input type="text" name="name" />
      <br />
      <label htmlFor="activity">Good weather activity</label>
      <input type="checkbox" name="activity"></input>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
