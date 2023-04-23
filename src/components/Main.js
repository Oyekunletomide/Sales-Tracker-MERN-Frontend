import React from 'react'
import Sales from "./Sales";
import Input from './Input';
import { Routes, Route, Navigate } from 'react-router-dom'
import UpdateSale from './UpdateSale';
import Message from './Message'
import Login from './Login'
import Register from './Register';

const Main = () => {
  const token = localStorage.getItem("token");



  return (
      <div  className='items-center flex flex-col justify-center mt-14'>
        <Routes>
            {token && <Route path='/' element={<Sales />} />}
            {token ? <Route path='/sales' element={<Sales />} /> : <Route path='/sales' element={<Login />} />}
            {token && <Route path='/sale/create' element={<Input />} />}
            <Route path='/api/sale/:id' element={<UpdateSale />} />
            <Route path='/api/sales/:id' element={<Message />} />
            <Route path='/login' element={<Login />} />
            <Route path="/" element={<Navigate replace to="/login" />} />
            <Route path='/register' element={<Register />} />
        </Routes>
      </div>
  )
}

export default Main