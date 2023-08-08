import React from 'react';
import Button from 'react-bootstrap/Button';

export default function Listtask({value,index,removetask}) {
  return (
    <div>
        <div className='list-task'>
          <span>{value.title}</span>
            <Button variant="danger" id="list-task-btn" onClick={()=>{removetask(index)}}>Delete</Button>
        </div>
    </div>
  )
}
