import React, { useContext , useReducer} from 'react'
import {reduser} from './alertReduser'
import {Context} from './alertContext'
import {SHOW_ALERT,HIDE_ALERT} from '../type'



export const AlertProvaider = ({children}) => {
    const [state, dispatch] = useReducer(reduser)
    function show(text){
        dispatch({type:'SHOW_ALERT',text:text})
        console.log('text'+text)
    }
    function hide(){
        dispatch({type:'HIDE_ALERT'})
    }
    return(
        <Context.Provider value={{...state,show,hide}}>
            <h1 onClick={show}>state is </h1>
            {children}
        </Context.Provider>
    )
}