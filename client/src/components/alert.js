import  React ,{useContext, useReducer} from 'react'
import { reduser } from '../context/alert/alertReduser'
import {Context} from '../context/alert/alertContext'



export const AlertComponent = () => {
    const valAlert = useContext(Context)
    console.log('valAlert'+valAlert.text)
        return(
            <div  className={'alert alert-success alert-dismissible '+ (valAlert.type || ' fade') } role="alert">
            <strong>Holy guacamole!</strong> {valAlert.text}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        )
}