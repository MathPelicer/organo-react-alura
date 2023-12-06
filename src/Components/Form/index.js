import Button from '../Button'
import DropDown from '../DropDown'
import TextField from '../TextField'
import './Form.css'

const Form = () => {

    const teams = [
        'Programming',
        'Front-End',
        'Data Science',
        'DevOps',
        'UX & Design',
        'Mobile'
    ]

    const onSave = (event) => {
        event.preventDefault()
        console.log("form submited")
    }

    return(
        <section className='formSection'>
            <form onSubmit={onSave}>
                <h2>Fill data to create employee card</h2>
                <TextField isRequired={true} label="Name" placeholder = "Enter your name"/>
                <TextField isRequired={true} label="Occupation" placeholder = "Enter your occupation"/>
                <TextField isRequired={false} label="Image" placeholder = "Enter the image path"/>
                <DropDown isRequired={true} label="Teams" items={teams}/>
                <Button>
                    Create Card
                </Button>
            </form>
        </section>
    )
}

export default Form