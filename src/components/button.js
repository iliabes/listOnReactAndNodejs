import {useContext, useReducer} from 'react'
import { Context } from '../context/alert/alertContext'
import axios from 'axios'

//---------------------
// import firebase from "firebase/app";
// import "firebase/database";

// function getReference() {
//   // [START rtdb_get_reference]
//   var database = firebase.database();
//   // [END rtdb_get_reference]
// }



export const Button = (props) => {
const dataWitchAlertPRoveider = useContext(Context)
const  checkFirebase = async() =>{
    console.log('data')
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3002')
}
        return(
            <button param  type="submit" onClick={(e)=>{
                e.preventDefault()
                    checkFirebase()
                }
            }>+</button>
        )
}