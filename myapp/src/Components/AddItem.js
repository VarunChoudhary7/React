import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

const AddItem = () => {
    const dispatch = useDispatch()
    const [item, setItem] = useState('')
    const addTodo = () => {
        console.log(item)
        const action = {
            type: "ADD_ITEM",
            payload: {
                id: uuidv4(),
                text: item
            }
        }
        dispatch(action)
    }
    return (
        <div>
            <input onChange={(e) => { setItem(e.target.value) }} type="text" />
            <button onClick={addTodo}>Add</button>
        </div>
    );
}

export default AddItem;