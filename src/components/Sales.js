import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Total from './Total';

const Sales = () => {
  const navigate = useNavigate()
  const [data, setData] = useState([])


    const handleDelete = (saleId) => {
      axios.delete(`https://sales-tracker-mern.onrender.com/api/sales/${saleId}`)
      .then(res => {
        

        if(res.ok) {
          navigate('/')
        }
      })
      .catch(err => console.log(err))
      navigate('/')
    }

  /* Fetching the data from the backend and setting the state of activities to the data. */
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`https://sales-tracker-mern.onrender.com/api/sales`);
      const datas = await result.json();
        setData(datas);
    };
    fetchData();

  }, []);


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
                  <div className='p-3'>{dat.name}</div>
                  <div className='p-3'>
                  ${dat.amount}
                  </div>
                  <div className='ml-20 flex p-3'>
                    <Link to={`/api/sale/${dat._id}`}>
                      <button className='bg-blue-400 w-20 rounded-full text-white font-bold'  >EDIT</button>
                    </Link>
                    <Link to={`/api/sales/${dat._id}`}>
                      <button className='bg-blue-400 w-20 rounded-full text-white font-bold' onClick={() => handleDelete(dat._id)}>DELETE</button>
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