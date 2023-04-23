import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import Register from './Register';

const Login = () => {
	const navigate = useNavigate()

  const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};



	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
		  const res = await axios.post('https://sales-tracker-mern.onrender.com/auth/login', data);

		  localStorage.setItem('token', res.data.token);
		  console.log('User logged in:', res.data.token);
		navigate('/sales')
		window.location.reload()
		} catch (err) {
		  console.log(err);
		  if (
			error.response &&
			error.response.status >= 400 &&
			error.response.status <= 500
		) {
			setError(error.response.data.message);
		}
		}
	  };



  return (
		<div>
			<div className='border-0 mt-36 p-16 rounded-lg bg-cover bg-center w-full
														'
							style={{
								backgroundImage:
								  "url('https://images.pexels.com/photos/95425/pexels-photo-95425.jpeg?auto=compress&cs=tinysrgb&w=600')",
							  }}>
					<h1 className='text-white font-bold mb-12 text-center text-3xl'>Welcome to Sales Tracker App</h1>
					<form onSubmit={handleSubmit} className='flex items-center flex-col'>
						<h1 className='text-white font-bold mb-12'>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
              className='w-96 border-2 py-1.5 pl-6 rounded-full mt-4'

						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
              className='w-96 border-2 py-1.5 pl-6 rounded-full mt-4'

						/>
						{error && <div className="bg-red-300 text-black w-52 text-center font-bold mt-5">{error}</div>}
						<button type="submit" className='h-10 bg-blue-400 w-24 rounded-full mt-6 text-white font-bold'>
							Log In
						</button>
					</form>
						<div className='flex'>
						<h1 className='font-bold text-black'>New Here? <Link to="/register">
											<a href={<Register />} className='font-bold text-white'>Register</a>
										</Link></h1>
						</div>
				</div>
			</div>
	);
};

    export default Login;
