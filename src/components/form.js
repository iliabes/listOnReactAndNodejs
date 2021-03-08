import React ,{useContext,useState, useReducer} from 'react'
import {Context} from '../context/alert/alertContext'
import { Button } from "./button"
import {Notes} from './notes'
import {AlertComponent} from './alert'
import {reduser} from '../context/alert/alertReduser'

export const Form = () => {
    const dataWitchAlertPRoveider = useContext(Context)
    const [dataInput,setDataInput] = useState()
    function checkSpace(e){
        console.log(e.target.value)
    }

    return(
        <form >
            <AlertComponent/>
            {/* <button onClick={(e)=> {event.preventDefault();checkSpace(e)}}>TestButton</button> */}
            <div className="input-group mb-3">
             <input onChange={(e)=>{setDataInput(e.target.value)}} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
             <Button valInp={dataInput} />
            </div>
            <Notes></Notes>
        </form>
    )
}