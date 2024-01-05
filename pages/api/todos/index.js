import dbConnect from "@/db/connect";
import Todo from "@/db/models/Todo";

//serverless function, die die Daten aus der datenbank findet

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const todos = await Todo.find();
    return response.status(200).json(todos);
  }

  //POST Method erstellt ein Produkt und sendet es an die Datenbank
  if (request.method === "POST") {
    const todoData = request.body;
    if (!todoData) {
      return response
        .status(400)
        .json({ error: "Request body fehlt oder ist leer." });
    }
    await Todo.create(todoData);
    return response.status(201).json({ status: "created" });
  }

  if (request.method === "DELETE") {
    const selectedIds = isSelected.filter((selected) => selected.isSelected);

    await Todo.deleteMany(selectedIds);
    response
      .status(200)
      .json({ status: `Deleted ${result.deletedCount} todos.` });
  }
}
