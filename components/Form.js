export default function Form({ onAddTodo }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddTodo(data);
    const form = event.target.elements;
    event.target.reset();
    form.text.focus();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">New Todo:</label>
      <input id="text" name="text" type="text" />
      <button type="submit">Add</button>
    </form>
  );
}
