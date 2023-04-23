import React from 'react'
import { useEffect, useState, } from 'react';
import axios from 'axios'




const Total = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchSales = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/sales', {
        headers: { 'x-auth-token': token },
      });
      setData(response.data);
    };

    fetchSales();
  }, []);

  console.log(data[0])

  const sum = data.reduce((accumulator, object) => {
    return accumulator + object.price
  }, 0)



  return (

    <div className='mt-6'>
        <hr className='w-full'></hr>
        <h2 className='text-white font-bold'>Total Amount of Sales: ${sum}</h2>
    </div>
  )
}

export default Total