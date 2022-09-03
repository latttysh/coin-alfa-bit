import React from 'react';
import Landing from "./Pages/Landing/Landing";
import Order from "./Pages/Order/Order";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
        <Header/>
        {/*<Order/>*/}
      <Landing/>
    </div>
  );
}

export default App;
