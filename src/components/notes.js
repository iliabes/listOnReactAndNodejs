


export const Notes = (children) => {
return(
        <ul className='list-group'>
            <li className='list-group-item list-group-item-primary'>{"Todo"}<p>{new Date().toLocaleDateString()}</p><button>'del'</button></li>
        </ul>
        )
}