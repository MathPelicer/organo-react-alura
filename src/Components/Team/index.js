import './Team.css'

const Team = (props) => {
    const backgroundColor = {backgroundColor: props.secondaryColor}
    const titleBorderColor = {borderColor: props.primaryColor}

    return (
        <section className='team' style={backgroundColor}>
            <h3 style={titleBorderColor}>{props.title}</h3>
        </section>
    )
}

export default Team