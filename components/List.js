import Link from "next/link";
export default function List({ todos, onDelete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo._id}>
          <Link href={`/${todo._id}`}>{todo.name}</Link>
        </li>
      ))}
    </ul>
  );
}
