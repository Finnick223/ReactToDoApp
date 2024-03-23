import { Todo } from "./interfaces";

export default function Counter(props: any) {
    return (
      <div>
        <h4>Pending tasks left: {props.todos.filter((todo: Todo) => !todo.checked).length}</h4>
      </div>
    );
  }
  