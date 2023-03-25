import React, { useState } from 'react'


const Input = () => {

  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')






  const addSale = async (e) => {
    e.preventDefault();

    const newSale = {name, amount};

    const res = await fetch(`https://sales-tracker-mern.onrender.com/api/sale`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSale),
    });

    if(res.ok){
      setName('')
    setAmount('')
    window.location.reload()
        }

    
    };






  return (
    <form onSubmit={addSale} className='flex flex-col items-center mt-10'>
        <input className='w-96 border-2 py-1.5 pl-6 rounded-full' type='text' placeholder='Enter name of the product' required={true} onChange={(e) => setName(e.target.value)} value={name}/>
        <input className='w-96 border-2 py-1.5 pl-6 mt-6 rounded-full' type='number' placeholder='Enter product amount' required={true} onChange={(e) => setAmount(e.target.value)} value={amount}/>
        <input className='h-10 bg-blue-400 w-24 rounded-full mt-6 text-white font-bold' type='submit' />
    </form>
  )
}

export default Input