

import React from "react";
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom'
import Tab1 from "./Components/Animations/Tab1";
import Tab2 from "./Components/Animations/Tab2";
import { YesNoWidget } from "./Components/Animations/YesNoWidget";
import Lotties from "./Components/Animations/Lotties";
import "./App.css";
import Chameleon from "./Components/Onboarding/Chameleon";

export default function App() {
  
const chmln = require('@chamaeleonidae/chmln');

chmln.init('SsRnRdXwQeUPRY3RyC6Qtci7iY4iAj0Zu7wTMAPERlp6id-1GhC61-AY24pGp7KiNOkggx');

/* Chameleon user identification and data */

// IMPORTANT: Replace USER.ID_IN_DB and USER.EMAIL below with your app’s actual variable names.

chmln.identify('Joh123', {   // REQUIRED, replace with the unique ID of each user in your database (e.g. 23443 or "590b80e5f433ea81b96c9bf6")
  email: 'gace.john'             // RECOMMENDED, email is used as the key to map user data for certain integrations
})
/* Chameleon event tracking. See trychameleon.com */

// Example user events: to use these replace the placeholders (e.g. PLAN_CHANGED) with the actual event names you wish to use.

chmln.identify('123', {   // REQUIRED, replace with a unique ID of each user in your database (e.g. 23443 or "590b80e5f433ea81b96c9bf6")

  // Example user properties; to use these replace the placeholders (e.g. USER.SIGN_UP_DATE) with your app’s actual variable names.
  
    created: new Date(),     // RECOMMENDED, must be ISO8601 or unix timestamp format (e.g. "2017-07-01T03:21:10Z" or 1431432000).
    name: 'USER.NAME',                // OPTIONAL, name will be parsed to first and surnames (e.g. "James Doe").
       // OPTIONAL, any other unique data that might appear in any page URLs (e.g. 09876 or "12a34b56").
  })     // Having a defined activation point can be helpful for targeting onboarding experiences

  console.log(chmln)
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


