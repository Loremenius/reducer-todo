import React, {useReducer} from "react";
import {appReducer, initialState} from "../reducers/firstReducer";
import TodoCard from "./TodoCard";

const TodoList = () =>{
    const [state, dispatch] = useReducer(appReducer,initialState);

    return(
        <div className="todoList">
            {state.todoList.map((item)=>(
                console.log(item),
                <TodoCard key={item.id} {...item}></TodoCard>
            ))}
        </div>
    )
}

export default TodoList;