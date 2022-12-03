import axios from "axios";
import React,{ useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UpdateProduct = () => {

    const [image, setImage] = useState(null)
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [category, setICategory] = useState("")

    const{ id } = useParams();

    const navigate = useNavigate();

    // function to display product 
    const showProducts = async () => {

        const response = await axios.get(`http://127.0.0.1:8000/api/${id}`);
        console.log(response.data)
        setImage(response.data.image)
        setName(response.data.name)
        setPrice(response.data.price)
        setDescription(response.data.description)
        setICategory(response.data.category)
 
    }

    useEffect(() => {
        showProducts();
    })

    // update product function 
    const UpdateProductInfo = async () => {
        let formField = new FormData();
        formField.append('image',image)                                                                           
        formField.append('name', name)
        formField.append('price', price)
        formField.append('description', description)
        formField.append('category', category)
        if (image !== null) {
            formField.append('image', image)
        }
        console.log(formField.name)
        await axios({
            url:`http://127.0.0.1:8000/api/${id}/`,
            method:'PUT',
            data:formField,
            headers: {
                'Content-Type': 'multipart/form-data',
            }
    }).then((response) => {
            console.log(response.data)
            navigate('/')
        })
    }

    return (
        <div>
        <h1>Update Product</h1>
        <div className='container'>
            <div className='form-group'><br />
                    <img src={image} height="150" width="120" alt="product"/><br/><br/>
                    <input 
                        type="file"
                        className='form-control form-contol-lg'
                        name='image'
                        onChange={(e) => setImage(e.target.files[0])}
                    /> 

                    <input 
                    type="text"
                    className='form-control form-contol-lg'
                    placeholder='Enter Product Name'
                    name='name'
                    defaultValue={name}
                    onChange={(e) => setName(e.target.value)}
                 />  
                <input 
                    type="text"
                    className='form-control form-contol-lg'
                    placeholder='Enter Product Price'
                    name='price'
                    defaultValue={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <input 
                    type="text"
                    className='form-control form-contol-lg'
                    placeholder='Enter Product Description'
                    name='description'
                    defaultValue={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input 
                    type="text"
                    className='form-control form-contol-lg'
                    placeholder='Enter Product Category'
                    name='category'
                    defaultValue={category}
                    onChange={(e) => setICategory(e.target.value)}
                />                   
            <button className='btn btn-success' type='submit' onClick={UpdateProductInfo} >Update Product</button>               
            </div>
        </div>
    </div>
    )

}

export default UpdateProduct;