import React from 'react';

const ToDoList = ({toDoList, deleteToDo, selectToDo, toDoSelected}) => {

    console.log(toDoList)

    return (
        <div className='ToDoList'>
            {
                toDoList.map(toDo => (
                    <li key={toDo.id}>
                        <ul>
                            <li><h2 className='title'>{toDo.title}</h2></li>
                            <li><p className='description'>{toDo.description}</p></li>
                            <li><p className='isAvailable'><b>Is available:</b> {toDo.isCompleted?.toString()}</p></li>
                            <li><div className='btn'>
                                <button className='delete' onClick={() => deleteToDo(toDo.id)}>Delete</button>
                                <button className='select' onClick={() => selectToDo(toDo)}>Edit</button>
                                {
                                    toDoSelected && (
                                        <button type='button' onClick={() => selectToDo(null)}>cancel</button>
                                    )
                                }
                        </div></li>
                        </ul>
                    </li>
                ))
            }  
        </div>
    );
};

export default ToDoList;