import { useState } from "react";

const AddItem = () => {
    const [item, setItem] = useState('')
    const addTodo = () => {
        console.log()
    }
    return (
        <div>
            <input onChange={(e) => { setItem(e.target.value) }} type="text" />
            <button onClick={addTodo}>Add</button>
        </div>
    );
}

export default AddItem;