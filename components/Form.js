export default function Form({ onSubmit, value }) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="text">New Todo:</label>
      <input id="text" name="name" type="text" defaultValue={value} />
      <button type="submit">Add</button>
    </form>
  );
}
