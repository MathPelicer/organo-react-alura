import TextField from '../TextField'
import './Form.css'

const Form = () => {
    return(
        <section className='formSection'>
            <form>
                <h2>Fill data to create employee card</h2>
                <TextField label="Name" placeholder = "Enter your name"/>
                <TextField label="Occupation" placeholder = "Enter your occupation"/>
                <TextField label="Image" placeholder = "Enter the image path"/>
            </form>
        </section>
    )
}

export default Form