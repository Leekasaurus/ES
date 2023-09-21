import React, {useState, useEffect} from "react";

function Cart() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/{id}')
        .then(response => response.json())
        .then(response => setProducts(data))
        .catch(error => console.error(error));
    }, []);

    return(
        <div>
{products.map(product =>(
    <div key={product.id}>
        <h2>product.title</h2>
        <p>{product.description}</p>
        <img src={product.image} alt={product.title}/>
    </div>

))}
        </div>
    );
    }

    export default Cart;