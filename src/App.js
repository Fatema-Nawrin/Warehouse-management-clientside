import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItems from './Pages/AddItems/AddItems';
import Faq from './Pages/Faq/Faq';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Signin from './Pages/Login/Signin/Signin';
import Manage from './Pages/Manage/Manage';
import ManageProducts from './Pages/ManageProducts/ManageProducts';
import MyItems from './Pages/MyItems/MyItems';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';
import RequireAuth from './Pages/Shared/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory/:productId' element={
          <RequireAuth>
            <ManageProducts></ManageProducts>
          </RequireAuth>
        }></Route>
        <Route path='/manage' element={
          <RequireAuth>
            <Manage></Manage>
          </RequireAuth>
        }></Route>
        <Route path='/add' element={
          <RequireAuth>
            <AddItems></AddItems>
          </RequireAuth>
        }></Route>
        <Route path='/myproduct' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path='/faq' element={<Faq></Faq>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signin' element={<Signin></Signin>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
