import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap';

const TodoList = ({ todolist, deleteHandler }) => {
    return (
        <div>
            {todolist.map((todo, index) =>
                <div key={index}>

                    <h5>{todo} &nbsp; <button onClick={() => deleteHandler(index)}>Delete</button></h5>
                </div>)}

        </div>
    )
}

export default TodoList
