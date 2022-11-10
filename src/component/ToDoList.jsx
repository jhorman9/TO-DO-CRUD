import React from 'react';

const ToDoList = ({toDoList, deleteToDo, selectToDo, toDoSelected}) => {

    console.log(toDoList)

    return (
        <div className='ToDoList'>
            {
                toDoList.map(toDo => (
                    <li key={toDo.id}>
                        <h2 className='title'>{toDo.title}</h2>
                        <div className='description'>{toDo.description}</div>
                        <div className='isAvailable'><b>Is available:</b> {toDo.isCompleted?.toString()}</div>
                        <div className='btn'>
                            <button className='delete' onClick={() => deleteToDo(toDo.id)}>Delete</button>
                            <button className='select' onClick={() => selectToDo(toDo)}>Edit</button>
                            {
                                toDoSelected && (
                                    <button type='button' onClick={() => selectToDo(null)}>cancel</button>
                                )
                            }
                        </div>
                    </li>
                ))
            }  
        </div>
    );
};

export default ToDoList;