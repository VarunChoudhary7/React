import { useState } from 'react';
import One from "./Components/One";

const App = () => {

    const [data, setData] = useState([{ password: "abcd" }, { password: "12345" }])

    return (
        <div>
            <One data={data} />
        </div>
    )
}

export default App;