import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Product/ItemListContainer';
import ItemDetailContainer from './components/SingleProduct/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetail from './components/SingleProduct/ItemDetail';
import CartProvider from '../src/context/CartContext';
import './App.css'


function App() {
  return (
	<div className='h-screen'>
		<CartProvider>
			<BrowserRouter>
				<NavBar/>
				<Routes>
					<Route exact path="/" element={<ItemListContainer/>}>
					</Route>
					<Route path="/cart" element={<Cart/>}>
					</Route>
					<Route path="/ItemDetailContainer/:itemId" element={<ItemDetailContainer/>}></Route>
				</Routes>
				<Footer className="m-auto"/>
			</BrowserRouter>
		</CartProvider>
	</div>	
  );
}

export default App;
