
import './App.css'
import Navbar from './Component/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router'
import ShopCategory from './Pages/ShopCategory';
import Products from './Pages/Products';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Shop from './Pages/shop';
function App() {

  return (
    <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Shop/>}/>
     <Route path='/mens' element={<ShopCategory  category="mens" />}/>
      <Route path='/womens' element={<ShopCategory category="womens"  />}/>
       <Route path='/kids' element={<ShopCategory category="kids"  />}/>
       <Route path ='/products' element={<Products/>}  />
       <Route path ='/productsId' element={<Products/>}  />
       <Route path='cart' element={<Cart/>}/>
        <Route path='loginSignup' element={<LoginSignup/>}/>
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
