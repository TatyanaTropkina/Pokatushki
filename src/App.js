import './App.css';

import GridLayout from './components/GridLayout';
import Header from './components/Header';
import state from './store/store';
import biker from  './../src/images/biker.gif';
import helmet from  './../src/images/bike-bicycle.gif';
import './scss/styleBody.scss';
function App(props) {


  return (
    <div className="App">

		<div className='headerWrapper'>
		<Header/>
		</div>

			<div className="bodyWrapper">
		<div className='container'>
       		
			<GridLayout state={state}/>

			<img src={biker} alt=""/>
			<img src={helmet} alt=""/>

		</div>
			</div>

		
    </div>
  );
}

export default App;
