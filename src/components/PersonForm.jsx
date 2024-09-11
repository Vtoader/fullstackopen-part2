const PersonForm = (props) => {

    return (
        <form onSubmit={props.addPerson}>
            <div>
                name: <input value={props.newName} onChange={props.handlePersonChange} />
            </div>
            <div>
                phone number: <input value={props.newPhoneNumber} onChange={props.handlePhoneNumberChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm;