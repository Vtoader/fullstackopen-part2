const Persons = (props) => {
    return (
        props.filteredPersons.map((elem, i) => {
            return <p key={i}>{elem.name} {elem.phoneNumber}</p>
        })
    )
}

export default Persons;

