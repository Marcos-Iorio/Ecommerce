import NavBar from './components/NavBar';
import ItemListContainer from './components/producto/ItemListContainer';
import ItemDetailContainer from './components/single/ItemDetailContainer';
import './App.css';

function App() {
  return (
    <div className='h-screen'>
      <NavBar/>
      <div className="grid justify-center h-full font-bold">
			  <ItemListContainer/>
        <ItemDetailContainer/>
	    </div>
    </div>
  );
}

export default App;
