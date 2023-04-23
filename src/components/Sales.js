import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import Total from './Total';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const Sales = ({ saleId }) => {
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




  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    await axios.delete(`http://localhost:5000/sales/${id}`, {
      headers: { 'x-auth-token': token },
    });
    setData(data.filter((sale) => sale._id !== id));
  };



  return (
    <>
      <div>
        <Link to='/sale/create'>
          <button className='bg-blue-400 w-20 rounded-full text-white font-bold mt-6'>Create</button>
        </Link>
      </div>
    <div >
            {data && data.map(dat => (
              <div key={dat._id}  className='border-2 divide-gray-400 rounded-lg mt-10 w-full flex justify-center items-center'>
                  <div className='p-3 text-black font-bold' >{dat.product}</div>
                  <div className='p-3 text-black font-bold'>${dat.price}</div>
                  <div className='ml-20 flex p-3'>
                    <Link to={`/api/sale/${dat._id}`}>
                      <button className='bg-blue-400 w-20 rounded-full text-white font-bold'  >{<EditOutlinedIcon />}</button>
                    </Link>
                    <Link to={`/api/sales/${dat._id}`}>
                      <button className='bg-blue-400 w-20 rounded-full text-white font-bold' onClick={() => handleDelete(dat._id)}>{<DeleteOutlineOutlinedIcon />}</button>
                    </Link>

                  </div>
              </div>
            ))}

    </div>
    {<Total />}
    </>
  )
}

export default Sales