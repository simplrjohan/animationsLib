

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
          <Route  path="/gh-pages-url/lotties" element={<Lotties/>}/>
          <Route  path="/gh-pages-url/tab1" element={<Tab1/>}/>
          <Route exact path="/gh-pages-url/tab2" element={<Tab2/>}/>
          <Route exact path="/gh-pages-url/yesno" element={<YesNoWidget/>}/>
          <Route exact path="/gh-pages-url/chameleon" element={<Chameleon/>}/>



        </Routes>
      </div>
    </Router>
  );
}


