

import React from "react";
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom'
import Tab1 from "./Components/Animations/Tab1";
import Tab2 from "./Components/Animations/Tab2";
import { YesNoWidget } from "./Components/Animations/YesNoWidget";
import Lotties from "./Components/Animations/Lotties";
import "./App.css";
import Chameleon from "./Components/Onboarding/Chameleon";

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
          <li>
            <Link to="/chameleon">Chameleon</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/lotties" element={<Lotties/>}/>
          <Route exact path="/tab1" element={<Tab1/>}/>
          <Route exact path="/tab2" element={<Tab2/>}/>
          <Route exact path="/yesno" element={<YesNoWidget/>}/>
          <Route exact path="/chameleon" element={<Chameleon/>}/>



        </Routes>
      </div>
    </Router>
  );
}


