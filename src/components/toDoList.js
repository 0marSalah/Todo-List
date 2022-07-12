import Todo from "./todo";

const ToDolist = ({ todos, filter,setTodos}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filter.map(todo => (
          <Todo todo={todo} todos={todos} setTodos={setTodos} key={todo.id} text={todo.text}/>
        ))}
      </ul>
    </div>
  );
}
 
export default ToDolist;