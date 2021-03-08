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
    // await axios.get('https://cosmolist-cc46f-default-rtdb.europe-west1.firebasedatabase.app')
    //     .then((resp) => {
    //         console.log(resp)
    //     })
        const res = await axios.post(`https://cosmolist-cc46f-default-rtdb.europe-west1.firebasedatabase.app`,'valueBustard')
    console.log('res')
}
        return(
            <button param  type="submit" onClick={(e)=>{
                    event.preventDefault();
                    checkFirebase()
                    if(props.valInp){
                        if(props.valInp.trim()){
                            dataWitchAlertPRoveider.show('Заметка успешно введена')
                        }
                    }else{
                        dataWitchAlertPRoveider.show('Нетуть текста')
                    }
                }
            }>+</button>
        )
}