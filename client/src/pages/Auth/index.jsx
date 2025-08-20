import React from 'react';
import { Routes, Route ,Outlet} from 'react-router-dom'
// import {Button as MyButton, Block} from '../../components';
import {LoginForm,RegisterForm} from '../../modules';
import './Auth.css'

function Auth() {
    
    return ( 
    <section className='auth'>
        {/* <div className="auth_content"> */}
        
        {/* <BrowserRouter> */}
        <Outlet/>
         {/* <Routes>
         
        
        <Route exact path='/signin' element={<LoginForm/>}/>
        <Route exact path='/signup' element={<RegisterForm/>}/>
        
        </Routes> */}
        {/*  </BrowserRouter> */}
        
        
        {/* </div> */}
    </section>
      );
}

export default Auth;