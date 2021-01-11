import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = () => {
    const dispatch = useDispatch();
    let input = React.createRef();

    const handleSubmit = (e) => {
    e.preventDefault();
    let inputValue = input.current.value;
    if (!inputValue.trim()) {
        return
      }
      dispatch(addTodo(inputValue))
      inputValue= ''        
 }

    return( 
        <div className="container col-6 mt-5"> 
            <form onSubmit={handleSubmit}>
                <input className="" ref={input} id="input" type="text" placeholder="Add New Todo"></input>
                <button className="btn btn-primary btn-sm m-2" type="submit"> Add Todo</button>
            </form>
        </div>
    )     
} 
export default connect()(AddTodo);
