import ToDo from "../models/todo.model";


export default class ToDoState {
  ToDos: Array<ToDo>;
  ToDoError: Error;
}

export const initializeState = (): ToDoState => {
  return { ToDos: Array<ToDo>(), ToDoError: null };
};