import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";


const Register = () => {
	const [data, setData] = useState({
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "https://sales-tracker-mern.onrender.com/auth/register";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
		} catch (error) {
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
				<div className='border-0 p-16 mt-16 rounded-lg bg-cover bg-center'
									style={{
										backgroundImage:
										  "url('https://images.pexels.com/photos/95425/pexels-photo-95425.jpeg?auto=compress&cs=tinysrgb&w=600')",
									  }}>
					<form onSubmit={handleSubmit} className='flex items-center flex-col'>
						<h1 className='text-white font-bold mb-12 text-3xl'>Create Account</h1>
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
							Register
						</button>
					</form>
					<div className='flex'>
						<h1 className="font-bold text-black">Already Registered? <Link to="/login">
											<a href={<Login />} className='font-bold text-white'>Login</a>
										</Link></h1>
					</div>
				</div>
		</div>
	);
};

export default Register;