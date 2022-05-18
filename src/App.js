import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItems from './components/AddItems/AddItems';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home/Home';
import NotFound from './components/Home/Home/NotFound/NotFound';
import InventoryDetail from './components/Home/InventoryDetail/InventoryDetail';
import Login from './components/LogIn/Login';
import ManageInventory from './components/ManageInventorys/ManageInventory';
import MyItem from './components/MyItem/MyItem';
import RequireAuth from './components/RequireAuth/RequireAuth';
import SignUp from './components/SignUp/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div >
      <ToastContainer />
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/inventory/:inventoryId' element={
          <RequireAuth>
            <InventoryDetail></InventoryDetail>
          </RequireAuth>
        } ></Route>
        <Route path='/manage' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/additem' element={<AddItems></AddItems>}></Route>
        <Route path='/myitem' element={<MyItem></MyItem>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
