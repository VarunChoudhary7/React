import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Details = () => {
    // console.log(useParams())
    const { name } = useParams()
    const products = useSelector(state => state)
    const product = products.find(products => products.name === name)
    console.log(product)
    return (
        <div>
            <h2>{name} Details</h2>
            {product.description}
        </div>
    );
}

export default Details;