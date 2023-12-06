import './DropDown.css'

const DropDown = (props) => {
    return(
        <div className='dropdown'>
            <label>
                {props.label}
            </label>
            <select required={props.isRequired}>
                {props.items.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default DropDown