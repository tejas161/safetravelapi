import React from 'react';
import Home from './Home.js';
import Contact from './Contact.js';
import Res from './Res.js';
import Error from './Error.js';
import {Route, Routes} from 'react-router-dom';



const App = () => {
    return(
        <>
        <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/contactjs" element={<Contact/>}></Route>
        <Route path="/result" element={<Res/>}></Route>
        <Route path="/errorpg" element={<Error/>}></Route>





        </Routes>
       
      
       
        
        
        </>
    );
};



export default App;