import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const Two = () => {
    const [product, setProduct] = useState('')
    const state = useSelector(state => state.categories)

    const dispatch = useDispatch()

    const handleSubmit = () => {
        // console.log(product)
        const action = {
            type: "ADD_PRODUCT",
            payload: product
        }
        // console.log(action)
        dispatch(action)

    }

    return (
        <div>
            <input onChange={(e) => { setProduct(e.target.value) }}
                type="text" />
            <button onClick={handleSubmit}>Add</button>
        </div>
    )
}

export default Two;  