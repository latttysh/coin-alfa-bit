import React from 'react';
import Landing from "./Pages/Landing/Landing";
import Order from "./Pages/Order/Order";
import Header from "./Components/Header/Header";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/order/:deposit/:withdraw/:amount" element={<Order/>}/>
            </Routes>
        </div>
    );
}

export default App;
