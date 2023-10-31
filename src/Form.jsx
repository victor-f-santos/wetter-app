export function Form() {
  // const form = document.querySelector('[data-js="form"]');
  // form.addEventListener("submit", (event) => {
  //   event.preventDefault();
  //   console.log("Hallo");
  // });
  return (
    <form data-js="form">
      <h1>Wetter App</h1>
      <p>Add new activity</p>
      Add name:
      <input type="text" />
      <br />
      <label htmlFor="activity">Good weather activity</label>
      <input type="checkbox" name="activity"></input>
      <br />
      <button
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          console.log("Hallo");
        }}
      >
        Submit
      </button>
    </form>
  );
}
