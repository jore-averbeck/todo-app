import useSWR from "swr";
import { useState } from "react";
import Heading from "../components/Heading.js";
import { useRouter } from "next/router";
import Form from "../components/Form.js";
import List from "../components/List.js";
import Navigation from "../components/Navigation.js";

export default function Home() {
  const router = useRouter();
  const { data, isLoading, error, mutate } = useSWR("/api/todos", {
    fallbackData: [],
  });
  const [isSelected, setIsSelected] = useState(false); // Initialize isSelected state

  //Submit der Form
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const todoData = Object.fromEntries(formData);

    //das ist nun neu:
    //Ein POST-Anfrage wird an die Server-API (/api/products) gesendet,
    //um das neue Produkt hinzuzufügen. Die Daten werden als JSON gesendet.
    const response = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify(todoData),
      headers: { "Content-Type": "application/json" },
    });
    //hier checken wir nur nochmal ob die response ok ist:
    if (response.ok) {
      console.log("Todo Added");
      //Wenn die Serverantwort in Ordnung ist (response.ok), wird die Funktion mutate aufgerufen,
      //um die Daten neu abzurufen und die Benutzeroberfläche zu aktualisieren.
      mutate();
    }

    event.target.reset();
  }

  // DELETE Todo on the main page
  // DELETE Todo on the main page
  async function handleDeleteTodo(id) {
    const response = await fetch(`/api/todos/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      await response.json();
      mutate(); // Refresh data after deletion
    } else {
      console.error(
        "Error deleting todo:",
        response.status,
        response.statusText
      );
    }
  }

  // Delete All
  async function handleDeleteAll() {
    const response = await fetch("/api/todos/delete-all", {
      method: "DELETE",
    });

    if (response.ok) {
      await response.json();
      mutate([], false); // Update the data without re-fetching
    } else {
      console.error(
        "Error deleting all todos:",
        response.status,
        response.statusText
      );
    }
  }

  // Toggle isSelected state
  // Toggle isSelected state
  function handleToggleSelection(id) {
    setIsSelected((prevSelected) =>
      prevSelected.map((selected) =>
        selected._id === id
          ? { ...selected, isSelected: !selected.isSelected }
          : selected
      )
    );
  }
  return (
    <>
      <Heading />
      <Form onSubmit={handleSubmit} />

      <List
        todos={data}
        onDelete={handleDeleteTodo}
        onToggleSelection={handleToggleSelection}
        isSelected={isSelected}
      />
      <Navigation onDeleteAll={handleDeleteAll} />
    </>
  );
}
