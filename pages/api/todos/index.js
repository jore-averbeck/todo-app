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

  // //DELETE METHOD
  // if (request.method === "DELETE") {
  //   if (!isSelected) {
  //     const { id } = request.query;
  //     await Todo.findByIdAndDelete(id);
  //     // Declare jokeToDelete to be the joke identified by its id and delete it.
  //     // This line handles the entire deletion process.
  //     response.status(200).json({ status: `Todo ${id} successfully deleted.` });
  //   }
  //   if (isSelcted) {
  //     await Todo.deleteMany({});
  //   }
  // }

  // if (request.method === "DELETE") {
  //   await Todo.deleteMany({});
  //   response.status(200).json({ status: "deleted all" });
  // }

  // DELETE METHOD
  if (request.method === "DELETE") {
    if (!isSelected) {
      const { id } = request.query;
      await Todo.findByIdAndDelete(id);
      response.status(200).json({ status: `Todo ${id} successfully deleted.` });
    } else {
      const result = await Todo.deleteMany({});
      response
        .status(200)
        .json({ status: `Deleted ${result.deletedCount} todos.` });
    }
  }
}
