import dbConnect from "@/db/connect";
import Todo from "@/db/models/Todo";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const todos = await Todo.find();
    return response.status(200).json(todos);
  }
  if (request.method === "POST") {
    const todoData = request.body;
    await Todo.create(todoData);
    return response.status(201).json({ status: "create" });
  }
}
