import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./componets/About/About";
import AddItem from "./componets/AddItem/AddItem";
import Checkout from "./componets/Checkout/Checkout";
import Home from "./componets/Home/Home";
import ItemDetail from "./componets/ItemDetail/ItemDetail";
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

        <Route
          path="/checkout"
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

        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
