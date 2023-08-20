import './App.css';
import Table from './components/Table';
import Header from './components/Header';
import state from './store/store';
import bouble from "./../src/images/white.png"
import bg from "./../src/images/layered-waves-haikei.svg"

import { useState } from 'react';
import SunsetAnimation from './components/SunsetAnimation';

function App(props) {


  return (
    <div className="App">
		{/* <SunsetAnimation/> */}
		{/* <img className="bouble" src={bouble} alt="" /> */}
		{/* <img className="bouble" src={bg} alt="" /> */}
		
          
		<div className='bodywrapper'>
		<Header/>
		<div className='container'>
		
       		<Table state={state} />
	   </div>
		</div>
		
    </div>
  );
}

export default App;
