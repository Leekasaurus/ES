import { useState,useEffect } from 'react'
import Login from './Login'
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { getAllProducts } from './API';
import Categorize from './components/Categorize';
import Directory from './components/Directory';
import cart from './cart';
import Home from './components/Home';

function App() {
  const [products,setProducts]= useState([])
  const [categories, setCategories]=useState([])
  const [login, setLogin]=useState([])

  //if you have getallProducts
  useEffect(()=>{
    async function getProducts () {
      try{
        const productsData = await getAllProducts()
        console.log(productsData);
        setproductsData(productsData);
      }catch(error){
        console.error("error fetching products,products:", error)
      }
    }
    getProducts();
  }, []);
  
const logut = () => {
  setLogin(false);
};


  return (
    <Router>
      <div id="app">
      <Link to="/account/login">
        <button classname="link" onClick={logout}>Logout</button>
      </Link>
      <Link to="/account/login">Login</Link>

      { login ? (
        <>
          <Link to="/">Home</Link>
          <Link to="/Productdetails">products</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/Directory">Directory</Link>
        </>
      ):null}
      </div>
  <Routes>
  <Route path="/" element={Home } />
  <Route path="/ProductDeatls" element={<Products products={products} /> } />
  <Route path="/cart" element={cart } />
  <Route path="/directory" element={<Directory  categories={categories}/>} />
  <Route path="/directory:id" element={<Category />} />
  <Route path="/account/login" element={<Login />} />
  </Routes>
    </Router>
  )
}


export default App
