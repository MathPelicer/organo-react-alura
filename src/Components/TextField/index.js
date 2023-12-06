import './TextField.css'

const TextField = (props) => {

    const onTexted = (event) => {
        props.onChanged(event.target.value)
    }

    return (
        <div className="textField">
            <label>
                {props.label}
            </label>
            <input value={props.textValue} onChange={onTexted} required={props.isRequired} placeholder={props.placeholder}/>
        </div>
    )
}

export default TextField