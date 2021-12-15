

import React from "react";
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom'
import Tab1 from "./Components/Tab1";
import Tab2 from "./Components/Tab2";
import { YesNoWidget } from "./Components/YesNoWidget";
import Lotties from "./Components/Lotties";
import "./App.css";
export default function App() {
  return (
    <Router>
      <div className="menu"  >
        <ul style={{display:'flex', margin:'auto', width:'90%'}}>
          
          <li>
            <Link to="/lotties">Lotties</Link>
          </li>
          <li>
            <Link to="/tab1">Tab 1</Link>
          </li>
          <li>
            <Link to="/tab2">Tab 2</Link>
          </li>
          <li>
            <Link to="/yesno">YesNo</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/lotties" element={<Lotties/>}/>
          <Route exact path="/tab1" element={<Tab1/>}/>
          <Route exact path="/tab2" element={<Tab2/>}/>
          <Route exact path="/yesno" element={<YesNoWidget/>}/>

        </Routes>
      </div>
    </Router>
  );
}


