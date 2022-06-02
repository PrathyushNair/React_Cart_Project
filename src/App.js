
import './App.css';
import { Navbar } from './Components/Navbar';
import {Routes,Route} from "react-router-dom";
import { Menstshirts } from './pages/Menstshirts';
import { Womenskurtis } from './pages/Womenskurtis';
import { Home } from './Components/Home';
import { Productdetail } from './Components/Productdetail';
function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Routes>
        <Route path="" element={<Home/>}></Route>
        <Route path="mens-tshirts" element={<Menstshirts/>}></Route>
        <Route path="womens-kurtis" element={<Womenskurtis/>}></Route>
        <Route path="prods/:a/:desc" element={<Productdetail/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
