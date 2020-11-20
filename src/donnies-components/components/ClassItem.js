import React from 'react'
import { useParams, useHistory } from "react-router-dom";

export default function ClassItem(props) {
    const { push } = useHistory();
    return (
        <div>
            <h1>{props.items.name}</h1>
            <button onClick={()=>push(`/update-class/${props.item.id}`)} >view</button>
            <button>delete</button>
        </div>
    )
}
