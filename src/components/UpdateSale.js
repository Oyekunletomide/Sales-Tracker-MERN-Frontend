import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'


const UpdateSale = () => {
    const navigate = useNavigate()
    const [saleData, setSaleData] = useState({
        name: '',
        amount: null,
    })
    const { id } = useParams()
    useEffect(() => {
        const getAllData = async () => {
            const res = await axios.get(
                `https://sales-tracker-mern.onrender.com/api/sales/${id}`
                );
            setSaleData(res.data)
        }
        getAllData()
    }, [id])



const handleSubmit = async (e) => {
    e.preventDefault()

    try {
        const res = await axios.put((`https://sales-tracker-mern.onrender.com/api/sale/${id}`), saleData)
        if(res.ok){
          }
    } catch (error) {
        console.log(error)
    }
    navigate('/')
}





const handleChange = (e) => {
    const { name, value } = e.target;
    setSaleData(prev => ({ ...prev, [name]: value }))
}

  return (
    <>
        <form onSubmit={handleSubmit} className='flex flex-col items-center mt-10'>
            <input className='w-96 border-2 py-1.5 pl-6 rounded-full' type='text' placeholder='Enter name of the product' value={saleData.name} required={true} name='name' onChange={handleChange} />
            <input className='w-96 border-2 py-1.5 pl-6 mt-6 rounded-full' type='number' placeholder='Enter product amount' defaultValue={saleData.amount}  required={true} name='amount' onChange={handleChange} />
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