import Main from "./components/Main";
// import Navbar from './components/Navbar'
import Logout from "./components/Logout";


function App() {
  const token = localStorage.getItem("token");

  return (
    <>
      {token && <Logout />}
      <Main/>
    </>
  );
}

export default App;
