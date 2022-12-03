import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


const ProductDetail = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({});

    // get product function
    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await axios.get(`http://127.0.0.1:8000/api/${id}`)
                setProduct(res.data)
            }
            catch(err){
                console.log(err)
            }
        }
        getProduct();
    },[id])

    // Delete product function 
    const deleteProduct = async (id) => {
        await axios.delete(`http://127.0.0.1:8000/api/${id}/`)
        navigate('/')

    }

    return (
        <div style={{padding:"10px"}}><br></br>
            <div>
            <Link style={{margin:"4px", float:"left"}} className="btn btn-primary" to='/'>Back</Link><br></br>
            </div><br></br>
            <h1>Product Detail</h1>
            <div className="product-info">
                <img src={product.image} height="200" width="250" alt="product" />
                <p>{product.name}</p>
                <p>${product.price}</p>
                <p>{product.description}</p>
                <p>{product.category}</p>

                <Link style={{margin:"4px"}} className="btn btn-primary" to={`/${product.id}/update/`}>Update product</Link>
                <Link style={{margin:"4px", backgroundColor:"red", border:"1px solid red"}} 
                      className="btn btn-primary" 
                      onClick={() => deleteProduct(product.id)}>Delete Product
                </Link>
            </div>
        </div>
    )
}

export default ProductDetail;