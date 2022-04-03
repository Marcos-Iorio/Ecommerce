import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Product/ItemListContainer';
import ItemDetailContainer from './components/SingleProduct/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import Home from './components/home/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CartProvider from '../src/context/CartContext';
import './App.css'


function App() {
  return (
	<div className='h-screen'>
		<CartProvider>
			<BrowserRouter>
				<NavBar/>
				<Routes>
					<Route exact path="/" element={<Home/>}>
					</Route>
					<Route exact path="/items" element={<ItemListContainer/>}>
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
