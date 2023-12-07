import { useState } from 'react'
import Button from '../Button'
import DropDown from '../DropDown'
import TextField from '../TextField'
import './Form.css'

const Form = (props) => {

    const [name, setName] = useState('')
    const [occupation, setOccupation] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

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
        console.log("form submited =>", name, occupation, image, team)
        props.onEmployeeRegistered({
            name,
            occupation,
            image,
            team
        })
    }

    return(
        <section className='formSection'>
            <form onSubmit={onSave}>
                <h2>Fill data to create employee card</h2>
                <TextField 
                    isRequired={true}
                    label="Name" 
                    placeholder = "Enter your name"
                    textValue={name}
                    onChanged={textValue => setName(textValue)}/>

                <TextField 
                    isRequired={true} 
                    label="Occupation" 
                    placeholder = "Enter your occupation"
                    textValue={occupation}
                    onChanged={textValue => setOccupation(textValue)}/>

                <TextField 
                    isRequired={false} 
                    label="Image" 
                    placeholder = "Enter the image path"
                    textValue={image}
                    onChanged={textValue => setImage(textValue)}/>

                <DropDown 
                    isRequired={true} 
                    label="Teams" 
                    items={teams}
                    value={team}
                    onChanged={value => setTeam(value)}/>

                <Button>
                    Create Card
                </Button>
            </form>
        </section>
    )
}

export default Form