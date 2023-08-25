import './App.css';
import Table from './components/Table';
import Header from './components/Header';
import state from './store/store';

function App(props) {


  return (
    <div className="App">

		<div className='bodyWrapper'>
		<Header/>
		<div className='container'>
       		<Table state={state} />
	   </div>
		</div>
		
    </div>
  );
}

export default App;
