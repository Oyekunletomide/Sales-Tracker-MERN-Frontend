import Navbar from "./components/Navbar";
import Sales from "./components/Sales";
import Total from "./components/Total";


function App() {


  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center">
        <Sales />
        <Total />
      </div>
    </>
  );
}

export default App;
