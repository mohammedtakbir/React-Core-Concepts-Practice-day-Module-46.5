import React, { useEffect, useState } from 'react';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => setTodos(data))
    }, [])
    return (
        <div style={{margin: '50px 0'}}>
            <h1>Todos: {todos.length}</h1>
            {
                todos.map(todo => <DisplayTodo todo={todo} key={todo.id}></DisplayTodo>)
            }
        </div>
    );
};
function DisplayTodo(props){
    console.log(props.todo)
    const {completed, id, title, userId} = props.todo;
    return(
        <div>
            <h2>Completed: {completed ? 'true' : 'false'}</h2>
            <h4>Id: {id}</h4>
            <h5>title: {title}</h5>
            <h6>userId: {userId}</h6>
        </div>
    )
}

export default Todo;