import { Provider } from 'react-redux';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import store from './store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Categories from './components/Categories';
import RegisterUser from './components/RegisterUser';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/register/user' element={<RegisterUser/>}/>
        <Route path='/login/user' element={<Login/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/product/:id' element={<ProductDetail/>}/>
        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
