import { useState } from "react";
import Details from "./Components/Details";
import Products from "./Components/Products";
import { Routes, Route } from "react-router-dom"
import Navbar from "./layout/Navbar";

const App = () => {

    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Products />} />
                <Route path='/product/:name' element={<Details />} />
            </Routes>
            {/* we use routes to create routes and use route to provde the path  */}
        </div>
    )
}

export default App;