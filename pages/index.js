// import styled from "styled-components";
import { uid } from "uid";
import useSWR from "swr";
import useLocalStorageState from "use-local-storage-state";
import Form from "../components/Form.js";
import List from "../components/List.js";

export default function Home() {
  const { data, isLoading, error } = useSWR("/api/todos", { fallbackData: [] });

  // const [todos, setTodos] = useLocalStorageState("todo", {
  //   defaultValue: data,
  // });

  //neues Todo erstellen
  function handleAddTodo(newTodo) {
    newTodo.id = uid();
    setTodos([newTodo, ...todos]);
  }
  console.log(todos);

  return (
    <>
      <h1>Todo App</h1>
      <Form onAddTodo={handleAddTodo} />
      <List todos={todos} />
    </>
  );
}
