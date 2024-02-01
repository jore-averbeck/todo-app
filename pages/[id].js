import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";
import Form from "../components/Form.js";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  gap: 1rem;
`;

export default function Details({ todo }) {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, mutate } = useSWR(`/api/todos/${id}`);
  const [isEditMode, setIsEditMode] = useState(false);

  // DELETE Todo
  async function handleDeleteTodos() {
    const response = await fetch(`/api/todos/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      await response.json();
      mutate(); // Aktualisiere die Daten nach dem Löschen
      router.push("/");
    } else {
      console.error(
        "Fehler beim Löschen des Todos:",
        response.status,
        response.statusText
      );
      response.status(404).json({ status: "error" });
    }
  }

  return (
    <Container>
      <h2>Edit your Todo</h2>
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : data ? (
          <>
            <p>{data.name}</p>
            <button onClick={handleDeleteTodos}>Delete</button>
          </>
        ) : (
          <p>Data not available</p>
        )}
      </div>
    </Container>
  );
}
