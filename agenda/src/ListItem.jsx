const ListItem = ({persona})=>{
    const {apellido, nombre, email, telefono} = persona
    return(
        <li>
            {apellido},{nombre}:
            <ul>
                <li>{email}</li>
                <li>{telefono}</li>

            </ul>
        </li>
    )
}

export default ListItem