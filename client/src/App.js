// import Button from './components/'
import {Auth,Home} from './pages'

import React from 'react';
import { Routes,Route} from 'react-router-dom'

function App() {
  return (
    
    
    <div className="App">
      <Routes>
      <Route exact path='/*' element={<Auth/>}></Route>
      <Route exact path='/home' element={<Home/>}></Route>
      </Routes>
    </div>
    
  );
}

export default App;
