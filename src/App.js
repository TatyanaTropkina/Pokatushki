import './App.css';
import Table from './components/Table';
import Header from './components/Header';
import state from './store/store';
import bouble from "./../src/images/white.png"
import bg from "./../src/images/layered-waves-haikei.svg"

import { useState } from 'react';


function App(props) {


  return (
    <div className="App">

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
