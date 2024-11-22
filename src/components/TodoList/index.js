import React, { useState } from 'react';
import TodoItem from '../TodoItem';

import "./index.css"

const TodoList = () =>{
    const [ todoName,setTodoName] = useState("")

    const [list,setList] = useState([])

    const updateTodoName = (e) =>{
        setTodoName(e.target.value)
        console.log(todoName.length)
    }

    const addTodo = () =>{
        console.log(todoName)
        if(todoName==="" || todoName ===" "){
            alert("enter the text")
        }
        else {
            setList([...list,{
                id:Math.random(),
                name:todoName,
                completed:false
            }])
            setTodoName("")
        }
        
    }

    const onDone = (item) =>{
       const newList = list.map(listItem =>{
        if(listItem.id === item.id) {
            return {...listItem, completed :!listItem.completed}
        }
        return listItem
       })
       console.log(item )
       setList(newList)
    }

    const onDelete = (item) =>{
        const newList = list.filter(listItem =>{
            if(listItem.id === item.id) {
                return false
            }
            return true
           })
           console.log(item )
           setList(newList) 
    }
    return (
        <div className='main-cointainer'>
            <h1>TODO LIST</h1>
            <div>
            <input type='text' 
                className='input-item'
                placeholder='Enter your task'
                value={todoName}
                onChange={updateTodoName}
            />
            <button className='button-ele' onClick={addTodo}> Add </button>
            </div>

           <ul className='list-cointainer'> {
            list.map(item =><TodoItem 
                item={item}
                onDone = {onDone}
                onDelete = {onDelete}
            />)
        }</ul>

        </div>
    )
}

export default TodoList
