import Enhancer from "../HOC/Enhancer";

const Description = ({ heading }) => {
    console.log(heading)
    return (
        <div>
            {/* <h1>This is a heading</h1> */}
            <h1>{heading}</h1>
            <div>I am waste text</div>
        </div>
    )
}

export default Enhancer(Description);