import { useNavigate } from 'react-router-dom'


const Logout = () => {
	const navigate = useNavigate()

	const handleLogout = () => {
		localStorage.removeItem("token");
		navigate('/login')
		window.location.reload()
	};

	return (
		<div className='h-20 bg-blue-400 flex justify-around items-center'>
				<h1 className='text-white font-bold text-3xl'>Sales Tracker</h1>
				<button className='text-white font-bold text-xl' onClick={handleLogout}>Logout</button>
		</div>
	);
};

export default Logout;