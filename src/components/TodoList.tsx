import React, { useEffect } from 'react'
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

export const TodoList: React.FC = () => {
  const { todos, error, loading, limit, page } = useTypedSelector(state => state.todo);
  const { fetchTodo, setTodoPage } = useActions();
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  useEffect(() => {
    fetchTodo(page, limit);
  }, [page])

  if (error) {
    return <p>{error}</p>
  }

  console.log(todos);

  return (
    <div>
      Todo list
      {
        loading ? <p>Loading...</p> : (
          <>
            {
              todos.map(todo =>
                <p key={todo.id}>(id: {todo.id}) {todo.title}</p>
              )
            }
          </>
        )
      }
      <div style={{ display: "flex" }}>
        {pages.map(p => (
          <div style={{ border: p === page ? "2px solid green" : "1px solid gray", padding: 5, cursor: "pointer" }} onClick={() => setTodoPage(p)}>
            {p}
          </div>
        ))}
      </div>
    </div>
  )
};
