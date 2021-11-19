import ListItem from "./ListItem";
import { useState } from 'react'
import { render } from 'react-dom'

const Content = () => {

    // let counter = 0
    // let counter = useState(0)
    // const [counter, mysteryFunction] = useState({})
    // let [counter, mysteryFunction] = useState(0)
    let [counter, setCounter] = useState(0)


    // in function component we can't use state natively so we use this work around called useState while in class component we can access state directly
    // console.log(counter)
    // console.log(mysteryFunction)


    return (
        <div className="container">
            <h3>{counter}</h3>
            <button onClick={() => {
                // console.log(counter)
                // counter = counter + 1
                // mysteryFunction(previousValue => {
                setCounter(previousValue => {

                    console.log(previousValue)
                    return previousValue + 1
                })
            }}>ClickMe</button>
        </div>
    );
}

export default Content;

// import React from "react";
// class ClassComponent extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             count: 0
//         }
//     }
//     render() {
//         return (
//             <div className="container">
//                 Hello I am waste text
//             </div>
//         )
//     }
// }

// export default ClassComponent