import './App.css';
import Home from './Pages/home/Home';
import NewProduct from './Pages/newProduct/NewProduct';
import NewUser from './Pages/newUser/NewUser';
import Product from './Pages/product/Product';
import ProductList from './Pages/productList/ProductList';
import User from './Pages/user/User';
import UserList from './Pages/userList/UserList';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <div className="container">
        <Sidebar />
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
        </Routes> 
      </div>
    </BrowserRouter> 
  );
}

export default App;
