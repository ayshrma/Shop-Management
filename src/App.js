
import React from 'react'
// import State from './State';
import {BrowserRouter as Switch, Routes , Route  } from 'react-router-dom';
// import { Routes, Route } from 'react-router-dom';

import Sharma from './Sharma';
import Enteritem from './Enteritem';
import Billing from './Billing';
export default function App() {
  return (
    
    // <>
    //    <Switch>
    //     <Route exact path="/"  component={Sharma} />
    //     <Route path="/enteritem" component={Enteritem} />
        
    //   </Switch>
    // </>

    <Routes>
    <Route path="/" element={<Sharma />} />
    <Route path="/enteritem" element={<Enteritem />} />
    <Route path="/billing"  element={<Billing/>} />
  </Routes>

  // <>
  //   <Billing/>
  // </>
  )
}

