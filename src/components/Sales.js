import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import UpdateSale from './UpdateSale';
import Input from './Input';
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

const Sales = () => {

  const [data, setData] = useState([])


    const handleDelete = (saleId) => {
      axios.delete(`https://sales-tracker-mern.onrender.com/api/sales/${saleId}`)
      .then(res => {
        console.log(res.data)
        if(res) {
          window.location.reload()
        }
      })
      .catch(err => console.log(err))
    }

  /* Fetching the data from the backend and setting the state of activities to the data. */
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`https://sales-tracker-mern.onrender.com/api/sales`);
      const datas = await result.json();
      if(result.ok){
        setData(datas);
      }
    };
    fetchData();

  }, []);

  const [isShown, setIsShown] = useState(true)
  const handleClick = event => {
    setIsShown(current => !current)
  }


  return (
    <>
    {isShown ? <Input /> : <Routes>
                              <Route path="/api/sale/:id" element={<UpdateSale />} />
                            </Routes>}

    <div >
            {data.map(dat => (
              <div key={dat._id}  className='border-2 divide-gray-400 h-12 rounded-lg mt-10 w-full flex justify-center items-center'>
                  <div className='p-3'>{dat.name}</div>
                  <div className='p-3'>
                  ${dat.amount}
                  </div>
                  <div className='ml-20 flex p-3'>
                    <Link to={`/api/sale/${dat._id}`}>
                      <button className='bg-blue-400 w-20 rounded-full text-white font-bold' onClick={handleClick} >EDIT</button>
                    </Link>
                    <button className='bg-blue-400 w-20 rounded-full text-white font-bold' onClick={() => handleDelete(dat._id)}>DELETE</button>
                  </div>
              </div>
            ))}

    </div>
    </>
  )
}

export default Sales