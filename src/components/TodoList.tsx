import { useState } from 'react';

const todosArr: (string | undefined)[] = [
  'Buy groceries',
  'Clean the house',
  'Walk the dog',
];

const TodoList = () => {
  const [selected, setSelected] = useState<number>();
  const [todos, setTodos] = useState<(string | undefined)[]>(todosArr);
  const [todo, setTodo] = useState<string>('');

  const handleAdd = () => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    setTodo('');
  };

  return (
    <div className='p-5 card'>
      <h1 className='text-center my-3'>Todo List</h1>
      <div className='my-3'>
        <input
          type='text'
          className='form-control'
          placeholder='Todo'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className='btn btn-primary ' onClick={handleAdd}>
          Add
        </button>
      </div>
      {todos && todos.length > 0 ? (
        <div>
          {todos.map((todo, index) => {
            return (
              <h6
                className={`${selected === index && 'active'}`}
                key={index}
                onClick={() => setSelected(index)}
              >
                {todo}
              </h6>
            );
          })}
        </div>
      ) : (
        <h5 className='text-center'>Nothing to do</h5>
      )}
    </div>
  );
};

export default TodoList;
