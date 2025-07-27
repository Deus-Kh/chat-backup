import React from 'react';
import { Routes, Route } from 'react-router-dom'
// import {Button as MyButton, Block} from '../../components';
import {LoginForm,RegisterForm} from '../../modules';
import './Auth.css'

function Auth() {
    
    return ( 
    <section className='auth'>
        {/* <div className="auth_content"> */}
        
        {/* <BrowserRouter> */}
        
         <Routes>
         
        <Route exact path='/' element={<LoginForm/>}/>
        <Route exact path='/login' element={<LoginForm/>}/>
        <Route exact path='/register' element={<RegisterForm/>}/>
        
        </Routes>
        {/*  </BrowserRouter> */}
        
        
        {/* </div> */}
    </section>
      );
}

export default Auth;