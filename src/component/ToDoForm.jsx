import React, { useEffect, useState } from 'react';

const ToDoForm = ({addToDo, toDoSelected, updateToDo}) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isChecked, setIsCkecked] = useState(false);

    const submit = (e) =>{
        e.preventDefault(); 
        const data = {
            id : Date.now(),
            title : title,
            description : description,
            isCompleted : isChecked
        }

        if(toDoSelected) { //toDoSelected en este caso contiene null por defecto si es true es decir que es diferente de null
            updateToDo(data) //Que me añada la data a updateToDo que es l que se encarga de actualizar el select
        }else{
            addToDo(data); //Sino que me lo deje por defecto
        }
        reset() //Y que me setee los inputs
    }
    //Crear un controlador 
    //Para indicar que valor cambiará
    useEffect(()=>{
        if(toDoSelected !== null){ //Le decimos que si Lo seleccionado no es null que es lo que tengo por defecto en APP que:
            setTitle(toDoSelected.title) //Añade el titulo
            setDescription(toDoSelected.description) //Añade la descripcion
            setIsCkecked(toDoSelected.isCompleted) //Añade el check
        }else{ //Sino
            reset() //Que me lo resetee, es decir que me deje los input en blanco
        }
    },[toDoSelected])
    //Cuando toDoSelected cambia se ejecuta
    //Por eso se lo pasamos en el arreglo de
    //Dependencia
    const reset = () => {
        setTitle(""); // resetea el titulo
        setDescription(""); //resetea la descripcion
        setIsCkecked(false); //resetea el checked
    }
    return (
        <div className='inputs'>
            <form action="" onSubmit={submit} onReset={submit}>
                <div className='input--content'>
                    <label htmlFor="title">Title</label>
                    <input 
                    type="text" 
                    placeholder='Escribe un titulo...' id='title'
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                    />
                </div>
                <div className="input--content">
                    <label htmlFor="descripcion">Descripcion</label>
                    <textarea 
                    name="descripcion" id="" cols="50" rows="10" 
                    placeholder='Escribe un texto...'
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                    />                
                </div>
                <div className="input--content available">
                    <label htmlFor="isCompleted">Is Completed</label>
                    <input className='checkbox' 
                    type="Checkbox" 
                    id='isCompleted' 
                    onChange={e => setIsCkecked(e.target.checked)}
                    checked={isChecked}
                    />
                </div>
                <button className='submit' type='submit'>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ToDoForm;