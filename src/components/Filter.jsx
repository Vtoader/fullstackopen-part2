const Filter = (props) => {
    return (
        <form>
            <div>
                search person: <input value={props.personSearch} onChange={props.handleSearchPerson} />
            </div>
        </form>
    )
}

export default Filter;