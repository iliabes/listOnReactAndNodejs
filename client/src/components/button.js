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
    console.log('button')
    async function  bla(){
        let response =  await fetch('/');
        if(response.ok){
        console.log('ress is ok')
    }
    }

    bla()
const dataWitchAlertPRoveider = useContext(Context)

        return(
            <button   type="submit" onClick={(e)=>{
                e.preventDefault()
                    bla()
                }
            }>+</button>
        )
}