import './DropDown.css'

const DropDown = (props) => {
    return(
        <div className='dropdown'>
            <label>
                {props.label}
            </label>
            <select onChange={event => props.onChanged(event.target.value)} required={props.isRequired} value={props.value}>
                {props.items.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default DropDown