import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <div className='container-lg mt-5'>
        <TodoList />
      </div>
    </div>
  );
};

export default App;
