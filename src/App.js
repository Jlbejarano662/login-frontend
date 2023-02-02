import React from "react";
import {BrowserRouter} from 'react-router-dom';

import AllRoutes from "./routes/Routes"

import "./App.css"

function App() {
  return (
    <div className="container" >
    <BrowserRouter> 
      <AllRoutes/>
    </BrowserRouter>
    </div>
  );
}

export default App;