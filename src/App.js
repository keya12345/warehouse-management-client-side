import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import About from "./componets/About/About";
import AddItem from "./componets/AddItem/AddItem";
import Blogs from "./componets/Blogs/Blogs";
import Checkout from "./componets/Checkout/Checkout";
import ControlItem from "./componets/ControlItem/ControlItem";
import Home from "./componets/Home/Home";
import ItemDetail from "./componets/ItemDetail/ItemDetail";
import ItemOrder from "./componets/ItemOrder/ItemOrder";
import Login from "./componets/Login/Login";
import NotFoundPage from "./componets/NotFoundPage/NotFoundPage";
import Register from "./componets/Register/Register";
import RequireAuth from "./componets/RequireAuth/RequireAuth";
import Footer from "./componets/Shared/Footer/Footer";
import Header from "./componets/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route path="/home" element={<Home></Home>}></Route>

        <Route path="/item/:itemId" element={<ItemDetail></ItemDetail>}></Route>

        <Route path="/about" element={<About></About>}></Route>

        <Route path="/login" element={<Login></Login>}></Route>

        <Route path="/register" element={<Register></Register>}></Route>

        <Route path="/blog" element={<Blogs></Blogs>}></Route>

        <Route
          path="/checkout/:itemId"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/additem"
          element={
            <RequireAuth>
              <AddItem></AddItem>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/controlitem"
          element={
            <RequireAuth>
              <ControlItem></ControlItem>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/order"
          element={
            <RequireAuth>
              <ItemOrder></ItemOrder>
            </RequireAuth>
          }
        ></Route>

        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
