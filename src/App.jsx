import React, { useState } from "react";
import { Await, BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/Products";
import Course from "./components/Course";
import Navbar from "./components/Navbar";
import Login from "./components/Pages/login";
import "./app.css";
import Error403 from "./components/Pages/Error403";
import { useAuth0 } from "@auth0/auth0-react";
import Cart from "./components/Cart";
import Loading from "./components/Pages/Loading";
import Courses from "./components/Json/Course";
import Quiz from "./components/Pages/Quiz";
// import Products from "./components/Json/products_list";

const App = () => {
  const handleAddProduct = (prodcut) => {
    const productExist = cartItems.find((item) => item.id === prodcut.id);
    if (productExist) {
      setcartItems(
        cartItems.map((item) =>
          item.id === prodcut.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      setcartItems([...cartItems, { ...prodcut, quantity: 1 }]);
    }
  };
  const handleRemoveProduct = (prodcut) => {
    const productExist = cartItems.find((item) => item.id === prodcut.id);
    if (productExist.quantity === 1) {
      setcartItems(cartItems.filter((item) => item.id !== prodcut.id));
    } else {
      setcartItems(
        cartItems.map((item) =>
          item.id === prodcut.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      );
    }
  };
  const [cartItems, setcartItems] = useState([]);
  const [coursedata, setcoursedata] = useState(Courses);
  const { redirect } = coursedata;

  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <>
      <BrowserRouter>
        <Navbar cartItems={cartItems} />
        <Routes>
          <Route index path="/" exact element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route
            path="/products"
            element={<About handleAddProduct={handleAddProduct} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error403 />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                handleAddProduct={handleAddProduct}
                handleRemoveProduct={handleRemoveProduct}
              />
            }
          />
          <Route path="/loading" element={<Loading />} />
          {
            coursedata.map((data)=><>
            <Route path={`/course/${data.redirect}`} element={<Quiz/> }/>
            </>)
          }
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
