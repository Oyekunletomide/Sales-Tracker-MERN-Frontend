import React from 'react'
import { useEffect, useState, } from 'react';




const Total = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`http://localhost:5000/api/sales`);
      const datas = await result.json();
      if(result.ok){
        setData(datas);
      }
    };
    fetchData();

  }, []);

  console.log(data[0])

  const sum = data.reduce((accumulator, object) => {
    return accumulator + object.amount
  }, 0)

  // const values = Object.values(data[0])
  // const sum = values.reduce((accumulator, value) => {
  //   return accumulator + value
  // }, 0)









  return (

    <div className='mt-6'>
        <hr className='w-full'></hr>
        <h2>Total Amount of Sales: ${sum}</h2>
    </div>
  )
}

export default Total