import React from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Order from "./components/Order";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
import Featured from "./components/Featured";
import New from "./components/New";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import Admin from "./components/Admin";

const LazyAbout = React.lazy(() => import("./components/About"));

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* It accept 2 props -> 1st path: which reflects the path in the url. 2nd element: assign the component. */}
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="order-summary" element={<Order />} />
        <Route path="products" element={<Products />}>
          <Route index element={<New />} />
          <Route path="featured" element={<Featured />} />
          <Route path="new" element={<New />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
