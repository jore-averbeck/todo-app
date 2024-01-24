import useSWR from "swr";
import { useState } from "react";
import Heading from "../components/Heading.js";
import { useRouter } from "next/router";
import Form from "../components/Form.js";
import List from "../components/List.js";
import Navigation from "../components/Navigation.js";

export default function Home({ todos, onToggleDone, done }) {
  const router = useRouter();
  const { data, isLoading, error, mutate } = useSWR("/api/todos", {
    fallbackData: [],
  });

  //Submit der Form
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const todoData = Object.fromEntries(formData);

    const response = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify(todoData),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      mutate();
    }

    event.target.reset();
  }

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

  async function handleDeleteAllTodos() {
    const confirmDelete = window.confirm(
      "Are you sure that you want to delete all your Todos?"
    );

    if (!confirmDelete) {
      return;
    }

    await fetch(`/api/todos`, { method: "DELETE" });

    mutate();
  }

  return (
    <>
      <Heading />
      <Form onSubmit={handleSubmit} />

      <List
        todos={data}
        onDelete={handleDeleteTodo}
        onToggleDone={onToggleDone}
        done={done}
      />
      <Navigation onDeleteAll={handleDeleteAllTodos} />
    </>
  );
}
