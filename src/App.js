import './App.css';
import Table from './components/Table';
import Header from './components/Header';
import state from './store/store';
import biker from  './../src/images/biker.gif';
import helmet from  './../src/images/bike-bicycle.gif';
function App(props) {


  return (
    <div className="App">

		<div className='headerWrapper'>
		<Header/>
			{/*<img className="grace" src={grace} alt=""/>*/}
		</div>
			<div className="bodyWrapper">
		<div className='container'>
       		<Table state={state} />
			<img src={biker} alt=""/>
			<img src={helmet} alt=""/>

		</div>
			</div>

		
    </div>
  );
}

export default App;
