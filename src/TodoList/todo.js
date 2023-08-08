import React, { useEffect, useReducer} from 'react';
import Addtask from './Addtask';
import './todo.css';
import Listtask from './listtask';


function reducer(state,action){
  switch (action.type) {
    case ActionType.ADD_TASK:
      return {...state,
              task:action.payload}
      
    case ActionType.REMOVE_TASK:
      return {task:action.payload}
  
    default:
      return state;
  }

}
const ActionType={ADD_TASK:'ADD_TASK',REMOVE_TASK:'REMOVER_TASK'}
const init={task:[]};
export default function Todo() {
  const [state,dispatch]= useReducer(reducer, init);
  useEffect(()=>{
    document.title=`you have ${state.task.length} pending task(s)`
  },[state.task.length]);


  const AddTaskfn=(title)=>{
    const addtaskarr=[...state.task,{title}];   //{title }  title
    dispatch({type:ActionType.ADD_TASK,payload:addtaskarr});
  }
  const removeTask=(index)=>{   //event poole index koduthaal index number onclikil kittum 
     const newTask=[...state.task];
     newTask.splice(index,1);
    dispatch({type:ActionType.REMOVE_TASK,payload:newTask})
  }
 
  


  return (
    <>
      <div className="todo-container">
        <h1><u>Todo List</u></h1>
        <div className='todo-add-task'>
          <Addtask  addtaskfn={AddTaskfn} />
        </div>

        <div className='todo-see-list'>
        {state.task.map((value,index)=>(
          <Listtask  value={value}  removetask={removeTask}   index={index}/>
        ))}
        </div>
      </div>
    </>
  );
}
