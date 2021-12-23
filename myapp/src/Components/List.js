import { useDispatch, useSelector } from "react-redux";
import AddItem from "./AddItem";

const List = () => {
    const items = useSelector(state => state)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        console.log(id)
        const action = {
            type: "DELETE_ITEM",
            payload: id
        }
        dispatch(action)
    }

    return (
        <div>
            <AddItem />
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