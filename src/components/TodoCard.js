import React from "react";

const TodoCard = ({task,completed}) =>{

    return(
        <div>
            <h3>{task}</h3>
            <p>{completed ? "Task is complete" : "Task is not complete"}</p>
        </div>
    )
}

export default TodoCard;