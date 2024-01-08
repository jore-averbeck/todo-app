import dbConnect from "@/db/connect";
import Todo from "@/db/models/Todo";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    // const todo = await Todo.findById(id);
    const todo = await Todo.findById(id);

    if (!todo) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(todo);
  }

  // //DELETE Method
  // if (request.method === "DELETE") {
  //   await Todo.findByIdAndDelete(id);
  //   response.status(200).json({ status: "todo deleted" });
  // }

  // if (request.method === "DELETE") {
  //   const selectedIds = isSelected.filter((selected) => selected.isSelected);

  //   await Todo.deleteMany(selectedIds);
  //   response
  //     .status(200)
  //     .json({ status: `Deleted ${result.deletedCount} todos.` });
  // }

  // DELETE Method
  if (request.method === "DELETE") {
    if (id) {
      // Einzelnes Todo löschen
      await Todo.findByIdAndDelete(id);
      response.status(200).json({ status: `Todo ${id} deleted.` });
    } else {
      // Mehrere Todos löschen
      const selectedIds = isSelected
        .filter((selected) => selected.isSelected)
        .map((selected) => selected._id);

      const result = await Todo.deleteMany(selectedIds);
      response
        .status(200)
        .json({ status: `Deleted ${result.deletedCount} todos.` });
    }
  }

  //PUT Method
  if (request.method === "PUT") {
    const updatedTodo = request.body;
    //Function to update my product in the database: über die ID wird das Product geupdatet
    await Todo.findByIdAndUpdate(id, updatedTodo);
    response.status(200).json({ status: "todo updated" });
  }
}
