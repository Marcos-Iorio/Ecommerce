import NavBar from './components/NavBar';
import ItemListContainer from './components/producto/ItemListContainer';
import ItemDetailContainer from './components/single/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
	<div className='h-screen'>
		<BrowserRouter>
			<NavBar/>
			<Routes>
				<Route exact path="/" element={<ItemListContainer/>}>
				</Route>
				<Route path="/cart">
				</Route>
				<Route path="/itemDetailContainer/:itemId" element={<ItemDetailContainer/>}></Route>
			</Routes>
		</BrowserRouter>
	</div>
    
  );
}

export default App;
