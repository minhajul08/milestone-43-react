import './App.css';
import LineChart from './Componets/LineChart/LineChart';
import Navbar from './Componets/Navbar/Navbar';
import Phones from './Componets/Phones/Phones';
import PriceOptions from './Componets/PriceOption/PriceOptions';





function App() {

  return (
    <>   
       <Navbar></Navbar>
       <PriceOptions></PriceOptions>
       <LineChart></LineChart>
       <Phones></Phones>
      
    </>
  )
}

export default App
