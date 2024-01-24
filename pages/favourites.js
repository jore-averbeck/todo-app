import List from "@/components/List";
import Heading from "@/components/Heading";
import Navigation from "@/components/Navigation";
import useSWR from "swr";

export default function FavouritePage({ favourites, onToggleFavourites }) {
  const { mutate, data } = useSWR("/api/todos");
  const todosToDisplay = data.filter((todo) => favourites.includes(todo._id));

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
        onToggleFavourites={onToggleFavourites}
        favourites={favourites}
      />
      <Navigation></Navigation>
    </>
  );
}
