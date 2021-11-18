// const ListItem = (props) => {
const ListItem = ({ chore }) => {

    // console.log(props)
    return (
        < li >
            <div>
                {/* {props.chore} */}
                {chore}

            </div>
            <button style={{ background: "crimson", color: "white" }}>Delete</button>
        </li >
    );
}

export default ListItem;