import React,{useState, useEffect} from 'react'
import axios from "axios"
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Classes from "./Classes"

export default function ClassList() {
    const [classesStored, setClasses] = useState([])

    useEffect(()=>{
        axiosWithAuth()
            .get("https://anywhere-fitness.herokuapp.com/classes")
            .then((res)=>{
                console.log(res.data)
                setClasses(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    },[])
    return (
        <div>
            <Classes classList={classesStored} />
        </div>
    )
}
