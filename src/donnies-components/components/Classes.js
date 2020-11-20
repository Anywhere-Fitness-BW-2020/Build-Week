import React from 'react'
import ClassItem from "./ClassItem"

export default function Classes(props) {
    const edit = (e) =>{
        console.log(e.target)
    }
    const remove = (e) =>{
        console.log(e.target)
    }
    return (
        <div>
            <h1>List of classes created</h1>
            <p>{console.log(props)}</p>
            {props.classList.map((item)=>(
                /*<div>
                    <h1>{item.name}</h1>
                    <button onClick={edit} >edit</button>
                    <button onClick={remove} >delete</button>
                </div>  */
                <div>
                    <ClassItem items={item}  />
                </div>    
            ))}
        </div>
    )
}
