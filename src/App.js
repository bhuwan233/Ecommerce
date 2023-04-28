import { Provider } from 'react-redux';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import store from './store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path='/products' element={<Home/>}/>
        <Route path='/products/:id' element={<ProductDetail/>}/>
        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
