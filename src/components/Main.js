import React from 'react'
import Sales from "./Sales";
import Input from './Input';
import { Routes, Route } from 'react-router-dom'
import UpdateSale from './UpdateSale';
import Message from './Message'

const Main = () => {
  return (
      <div className="flex flex-col items-center">
        <Routes>
            <Route path='/sale/create' element={<Input />} />
            <Route path='/' element={<Sales />} />
            <Route path='/api/sale/:id' element={<UpdateSale />} />
            <Route path='/api/sales/:id' element={<Message />} />
        </Routes>
      </div>
  )
}

export default Main