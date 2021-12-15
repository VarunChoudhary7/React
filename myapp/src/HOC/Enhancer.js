const Enhancer = (Component) => {

    // return (
    //     <div>
    //         <h3>Enhanced component</h3>
    //         <div>Waste text</div>
    //     </div>
    // )
    // return () => (
    //     // here we need to return a function to return a component we can't do it in a simple return 
    //     < div >
    //         <h3>I was added by Enhancer</h3>
    //         <Component />
    //     </div >
    // )
    // return () => (
    return (props) => {
        // console.log(props)
        console.log({ ...props })


        // we add props so that we can have the heading  


        return (
            <div>
                < div >
                    {/* <h3>I was added by Enhancer</h3> */}
                    < Component{...props} />
                    {/* < Component heading={props.heading} /> */}

                    < h6 > <sub>Property of Mine</sub></h6 >
                </div >
            </div>
        )

    }
}

export default Enhancer;