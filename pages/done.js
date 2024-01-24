import List from "@/components/List";
import Heading from "@/components/Heading";
import Navigation from "@/components/Navigation";
import useSWR from "swr";

export default function FavouritePage({ done, onToggleDone }) {
  const { mutate, data } = useSWR("/api/todos");
  const todosToDisplay = data.filter((todo) => done.includes(todo._id));

  async function handleDeleteTodo(id) {
    const response = await fetch(`/api/todos/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      await response.json();
      mutate();
    } else {
      console.error(
        "Error deleting todo:",
        response.status,
        response.statusText
      );
    }
  }

  return (
    <>
      <Heading />
      <List
        todos={todosToDisplay}
        onDelete={handleDeleteTodo}
        onToggleDone={onToggleDone}
        done={done}
      />
      <Navigation></Navigation>
    </>
  );
}
