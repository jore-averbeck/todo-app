import mongoose from "mongoose";

const { Schema } = mongoose;

const todosSchema = new Schema({
  name: { type: String, required: true },
});

const Todo = mongoose.models.Todo || mongoose.model("Todo", todosSchema);

export default Todo;
