import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

// func to show products 
const ShowProducts = () => {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api')
        setProducts(response.data)
        console.log(response.data)
    }

    useEffect(() => {
        getProducts();
    }, []);

    return(
        <React.Fragment>
            <h1>Products</h1>
            <div className='products-card-info'> 
                {products && products.length > 0 ? products.map((product) => (
                    <Card className='m-2 rounded shadow-lg' style={{ width: '22rem'}}>
                    <Card.Img className='product-img' variant="top" src={product.image}/>
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>${product.price}</Card.Text>
                        <Card.Text>{product.description}</Card.Text>
                        <Card.Text>{product.category}</Card.Text>
                        <Link className='link-to-p' variant="primary"  to={`/product/${product.id}`}> Show</Link>
                    </Card.Body>
                </Card>
                )):<h4 className='no-product'>No products to diaplay, come back later.</h4>}
                
            </div>
        </React.Fragment>
    );
}

export default ShowProducts;
