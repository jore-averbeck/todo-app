import useSWR from "swr";
import Heading from "../components/Heading.js";
import { useRouter } from "next/router";
import useLocalStorageState from "use-local-storage-state";
import Form from "../components/Form.js";
import List from "../components/List.js";

export default function Home() {
  const router = useRouter();
  const { data, isLoading, error, mutate } = useSWR("/api/todos", {
    fallbackData: [],
  });

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

  return (
    <>
      <Heading />
      <Form onSubmit={handleSubmit} />
      <List todos={data} />
    </>
  );
}
