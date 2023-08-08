import React, { useReducer } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const reducer=(state,action)=>{
  switch (action.type) {
    case Action.UPDATE_VALUE:
      return {
        ...state,value:action.payload
      }
  
    default:
      return state;
  }


}
const init={value:''};
const Action={UPDATE_VALUE:'UPDATE_VALUE'}
export default function ({addtaskfn}) {
  // const [value,setValue]=useState("");
  const [state,dispatch]=useReducer(reducer, init);

  const check=(e)=>{
    e.preventDefault();
    // dispatch({type:Action.UPDATE_VALUE, payload:''});
    const clea = document.getElementById('t1');
    clea.value = '';

  }
  const additem=()=>{
    addtaskfn(state.value);


  }
  return (
    <div className='add-task'>
      <form onSubmit={check}>
         <input type="text" id="t1" value={state.value} placeholder="Add A New Task"
           onChange={(e) => {
            dispatch({ type: Action.UPDATE_VALUE, payload: e.currentTarget.value });
          }}
         required
         />

        <Button onClick={additem} type="submit" variant="primary" id="add-task-btn" >Add Task</Button>
        </form>
    </div>
  )
}


