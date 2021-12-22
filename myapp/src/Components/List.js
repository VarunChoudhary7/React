import { useSelector } from "react-redux";

const List = () => {
    const items = useSelector(state => state)
    // console.log(items)

    const handleDelete = (id) => {
        console.log(id)
    }

    return (
        <div>
            <ul>
                {
                    items.map(items => <li>{items.text}<button onClick={() => {
                        handleDelete(items.id)
                    }}>Delete</button></li>)
                }
            </ul>
        </div >
    );
}

export default List;