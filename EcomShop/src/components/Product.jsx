import React from 'react'
import {useState,useEffect} from 'react'

function Products() {
const [products,setProducts]=useState();
const [filter,setFilter]= useState({
  title: "",
  description: "",
  image: "",
  price: "",
  category: "",
});

useEffect (() =>{
  const fetchallProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    const result = await response.json()
    console.log(result);
    setProducts(result);
  };
  fetchallProducts();
},[])

const filterItems = () => {
  return products.filter((product) => {
    const { title, image, description, category, price} = product;
    return(
      title.toLowerCase().includes(filter.title.toLowerCase()) &&
      image.toLowerCase().includes(filter.image.toLowerCase()) &&
      description.toLowerCase().includes(filter.description.toLowerCase()) &&
      category.toLowerCase().includes(filter.category.toLowerCase()) &&
      (filter.price === ""|| price <= parseFloat(filter.price))
    );
  });
};

const handleFilterChange = (e) => {
  const {name, value} = e.target;
  setFilter((prevFilter) => ({
    ...prevFilter,
    [name]: value,
  }));
};

  return (
    <div>
    <h2>shop</h2>
    <div>
      <Login />
      <signUp />
    </div>
    <div>
      <input 
        title="text"
        name="title"
        placeholder="Title"
        value={filter.title}
        onChange={handleFilterChange}
      />
      <input 
        type="text"
        name="image"
        placeholder="Image"
        value={filter.image}
        onChange={handleFilterChange}
      />
      <input 
        title="description"
        name="description"
        placeholder="Description"
        value={filter.description}
        onChange={handleFilterChange}
      />
      <input 
        type="number"
        name="price"
        placeholder="Price"
        value={filter.price}
        onChange={handleFilterChange}
      />
    </div>
    <div>
      {filterItems().map((product)=> (
        <div key={product.id}>
        <h3>{product.title}</h3>
        <img src={product.image} alt={product.title} />
        <p>Description: {product.description}</p>
        <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Products;