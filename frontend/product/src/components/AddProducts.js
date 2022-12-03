import axios from 'axios';
import React,{useState} from 'react';
import { useNavigate } from 'react-router';

const AddProducts = () => {

    const [image, setImage] = useState(null)
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [category, setICategory] = useState("")

    const navigate = useNavigate()
    
    // add product func 
    const AddProductInfo = async(e) => { 
        e.preventDefault();
        
        let formField = new FormData()
        formField.append('image',image)
        formField.append('name', name)
        formField.append('price', price)
        formField.append('description', description)
        formField.append('category', category)
        if (image !== null) {
            formField.append('image', image)
        }

        // post form
        await axios({
            url:'http://127.0.0.1:8000/api/',
            method:'POST',
            mode:'cors',
            data:formField,
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }).then((response) => {
            console.log(response.data)
            navigate('/')
        }).catch((err) => console.log(err))

    }


    return(
        <div>
        <h1>Add Product</h1>
        <div className='container'>
            <div className='form-group'>

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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                 />

  
                <input 
                    type="text"
                    className='form-control form-contol-lg'
                    placeholder='Enter Product Price'
                    name='price'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />


                <input 
                    type="text"
                    className='form-control form-contol-lg'
                    placeholder='Enter Product Description'
                    name='description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input 
                    type="text"
                    className='form-control form-contol-lg'
                    placeholder='Enter Product Category'
                    name='category'
                    value={category}
                    onChange={(e) => setICategory(e.target.value)}
                />                   
            <button className='btn btn-success' type='submit' onClick={AddProductInfo} >Add Product</button> 
                


                
            </div>
        </div>
    </div>
    )
}

export default AddProducts;