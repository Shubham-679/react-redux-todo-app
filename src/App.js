import './App.css';
// import { useSelector , useDispatch } from 'react-redux';
import AddTodo from './components/addTodo';
import VisibleTodolist from './components/visibleTodolist';
import Footer from './components/footer';

function App() {
  // const counter = useSelector(state => state)
  // const dispatch = useDispatch();

  return (
    <div>
    <AddTodo/>
    <VisibleTodolist/>
    <Footer/>
    </div>
  );
}

export default App;
