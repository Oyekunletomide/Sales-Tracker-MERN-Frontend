import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Input = () => {

    const navigate = useNavigate()

      const [product, setProduct] = useState('');
      const [price, setPrice] = useState(0);

      const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token,
      },
      body: JSON.stringify({ product, price }),
    };

    try {
      const response = await fetch('http://localhost:5000/sales', requestOptions);
      const data = await response.json();

      if (response.ok) {
        console.log(data);
        alert('Sale created successfully');
        navigate('/')
      } else {
        console.error(data);
        alert('Error creating sale');
      }
    } catch (error) {
      console.error(error);
      alert('Error creating sale');
    }
      };



  return (
    <>
    <form onSubmit={handleSubmit} className='flex flex-col items-center mt-10'>
        <input className='w-96 border-2 py-1.5 pl-6 rounded-full' type='text' placeholder='Enter name of the product' required={true} onChange={(e) => setProduct(e.target.value)} value={product} id='product'/>
        <input className='w-96 border-2 py-1.5 pl-6 mt-6 rounded-full' type='number' placeholder='Enter product price' required={true} onChange={(e) => setPrice(e.target.value)} value={price} id='price' />
        <input className='h-10 bg-blue-400 w-24 rounded-full mt-6 text-white font-bold' type='submit' />
    </form>

    <div>
        <Link to='/'>
            <button className='h-10 bg-blue-400 w-24 rounded-full mt-6 text-white font-bold'>Go Back</button>
        </Link>
    </div>
    </>
  )
}

export default Input