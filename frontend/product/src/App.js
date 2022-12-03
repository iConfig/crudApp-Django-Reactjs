import './App.css';
import NavbarMenu from './components/Navbar';
import ShowProducts from './components/ShowProducts';
import AddProducts from './components/AddProducts';
import ProductDetail from './components/ProductsDetails';
import UpdateProduct from './components/UpdateProduct';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';





function App() {
  return (
    <div className="App">
      <Router>
        <NavbarMenu />
        <Routes>
          <Route exact path="/" element={<ShowProducts />} />
          <Route exact path="/addProduct/" element={<AddProducts />} />
          <Route exact path="/product/:id/" element={<ProductDetail />} />
          <Route exact path="/:id/update/" element={<UpdateProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
