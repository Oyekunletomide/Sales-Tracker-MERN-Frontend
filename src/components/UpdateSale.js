import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'


const UpdateSale = () => {
    const navigate = useNavigate()
    const [saleData, setSaleData] = useState({
        product: '',
        price: null,
    })
    const { id } = useParams()
    useEffect(() => {
        const fetchSale = async () => {
          const token = localStorage.getItem('token');
          const response = await axios.get(`https://sales-tracker-mern.onrender.com/sales/${id}`, {
            headers: { 'x-auth-token': token },
          });
          setSaleData(response.data);
        };
    
        fetchSale();
      }, [id]);

      // https://sales-tracker-mern.onrender.com

      const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        await axios.put(`https://sales-tracker-mern.onrender.com/sales/${id}`, saleData, {
          headers: { 'x-auth-token': token },
        });
        navigate('/');
      };





      const handleChange = (e) => {
        setSaleData({ ...saleData, [e.target.name]: e.target.value });
      };

  return (
    <>
        <form onSubmit={handleSubmit} className='flex flex-col items-center mt-10'>
            <input className='w-96 border-2 py-1.5 pl-6 rounded-full' type='text' placeholder='Enter name of the product' value={saleData.product} required={true} name='product' onChange={handleChange} />
            <input className='w-96 border-2 py-1.5 pl-6 mt-6 rounded-full' type='number' placeholder='Enter product price' defaultValue={saleData.price}  required={true} name='price' onChange={handleChange} />
            <input className='h-10 bg-blue-400 w-24 rounded-full mt-6 text-white font-bold' type='submit' value='Update'  />
        </form>

        <div>
        <Link to='/'>
            <button className='h-10 bg-blue-400 w-24 rounded-full mt-6 text-white font-bold'>Go Back</button>
        </Link>
    </div>
    </>
  )
}


export default UpdateSale