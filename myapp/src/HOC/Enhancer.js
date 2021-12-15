import Description from "../Components/Description";
const Enhancer = (Component) => {

    return ({ admin }) => admin ? <Component /> : "Private"

}

export default Enhancer;