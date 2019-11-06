import React, {useReducer} from "react";

export const appReducer = (state,action) =>{
    switch(action.type){
        default:
            throw new Error("No action matched");
    }
}

export const initialState = {
   todoList:[
            {task: 'Learn about reducers',
            completed: false,
            id: 3892987589}
        ]
  };

