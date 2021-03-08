export const reduser = (state,action) =>{
    switch(action.type){
        case 'SHOW_ALERT' : return {type: '&nbsp show',text:action.text}
        case 'HIDE_ALERT' : return {type: '&nbsp fade'}
        default: return {type: 'fade'};
    }
}
