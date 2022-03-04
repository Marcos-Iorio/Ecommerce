import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

function App() {
  return (
    <div className='h-screen'>
      <NavBar/>
      <div className="grid justify-center h-full font-bold">
			  <ItemListContainer/>
	    </div>
    </div>
  );
}

export default App;
