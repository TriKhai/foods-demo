import { Routes, Route } from 'react-router-dom'
import Navbar from "./page/Navbar";
import Home from './page/Home';
import Items from './page/Foodpage/Items';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="/cream" element={<Items/>}/>
        <Route path="/bread" element={<Items/>}/>
        <Route path="/gato" element={<Items/>}/>
        <Route path="/beverage" element={<Items/>}/>

        {/* <Route path="/beverage" element={<Test />}/> */}
      </Routes>
    </>
  );
}

export default App;
