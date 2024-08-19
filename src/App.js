// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

// import { CSSTransition } from "react-transition-group";
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import CSS for ToastContainer
// import Navbar from "./components/Navbar";
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
// import LoadingSpinner from "./components/Loader/Loader";
import ProductDetails from './components/Products/ProductDetails';
import AddToCartPage from './components/addtocart'; // Import the AddToCartPage component
import CheckoutPage from './components/Order/checkoutpage'
import ProductList from './components/Products/productlist'
import Login from './components/Login';
import OrderHistory from './Component/OrderHistory';
import Register from './Component/Register';
import NavbarCategory from './components/Navbar/navbarcategories';
import Profile from './components/Order/profile';
// import PrivateRoute from './route'; 
// import Login from './components/Login';
// import WishlistPage from './components/profile/wishlist';
// import CouponsPage from './components/profile/coupons';
// import RewardsPage from './components/profile/rewards';
// import NotificationsPage from './components/profile/notification';
// import HelpCenterPage from './components/profile/helpcenter';
// import SettingsPage from './components/profile/setting';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};


  function App() {
    // const [loading, setLoading] = useState(true);
    const [cartItems, setCartItems] = useState([]);
  
    // useEffect(() => {
    //   const timer = setTimeout(() => {
    //     setLoading(false);
    //   }, 2000); // Simulating loading for 1 second. Adjust as needed.
  
    //   return () => clearTimeout(timer);
    // }, []);

    const handleAddToCart = (product) => {
      let cart = [...cartItems, product];
      setCartItems(cart);
      localStorage.setItem('cart', JSON.stringify(cart));
    };
  
    const handleRemoveFromCart = (index) => {
      let cart = [...cartItems];
      cart.splice(index, 1);
      setCartItems(cart);
      localStorage.setItem('cart', JSON.stringify(cart));
    };
  
    const handleMoveToWishlist = (index) => {
      // Logic to move item to wishlist
      let cart = [...cartItems];
      cart.splice(index, 1);
      setCartItems(cart);
      localStorage.setItem('cart', JSON.stringify(cart));
      console.log('Moved to wishlist');
    };
  
  
    return (
      <div>
      <ToastContainer position="bottom-right" />
      <Router>
        <ScrollToTop />
        {/* {!loading && <Navbar cartItems={cartItems}/>} */}
         <Navbar cartItems={cartItems}/> {/* Render navbar only if not loading */}
        {/* <Navbar cartItems={cartItems}/> */}
       
     
      <Routes>  
         <Route exact path="/" element={<Home onAddToCart={handleAddToCart}/>} />
         <Route exact path="/home" element={<Home onAddToCart={handleAddToCart}/>} />
         <Route path="/login" element={<Login  />} />
         <Route path="/register" element={<Register  />} />

          <Route path="/product/:productId" element={<ProductDetails onAddToCart={handleAddToCart}/>} />
         <Route path="/cart" element={<AddToCartPage cartItems={cartItems} onAddToCart={handleAddToCart}/>}  onRemove={handleRemoveFromCart} onMoveToWishlist={handleMoveToWishlist}  />
         <Route path="/checkout" element={<CheckoutPage />} />
         <Route path="/checkout/buynow" element={<CheckoutPage />} />
         <Route path="/product-list" element={<ProductList />} />
         <Route path="/profile/orderHistory" element={<OrderHistory  />} />
         <Route path="/profile" element={<Profile />} />
         <Route path="/category/:gender/:type/:subtype" element={<NavbarCategory />} />  
{/* 
  <Route path="/product/:productId" element={<PrivateRoute element={ProductDetails}  onAddToCart={handleAddToCart}/>} />
  <Route path="/cart" element={<PrivateRoute element={AddToCartPage} cartItems={cartItems} onAddToCart={handleAddToCart}/>} onRemove={handleRemoveFromCart} onMoveToWishlist={handleMoveToWishlist} />
  <Route path="/checkout" element={<PrivateRoute element={CheckoutPage} />} />
  <Route path="/checkout/buynow" element={<PrivateRoute element={CheckoutPage} />} />
  <Route path="/product-list" element={<PrivateRoute element={ProductList} />} />
  <Route path="/profile/orderHistory" element={<PrivateRoute element={OrderHistory} />} />
  <Route path="/profile" element={<PrivateRoute element={Profile} />} />
  <Route path="/category/:gender/:type/:subtype" element={<PrivateRoute element={NavbarCategory} />} /> */}

      </Routes>
         {<Footer />}
         {/* {!loading && <Footer />} */}
        {/* {loading && <LoadingSpinner />}  */}
      </Router>
    </div>
    
  );
}

export default App;

// // import logo from './logo.svg';
// import './App.css';
// import { useEffect, useState } from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   useLocation,
// } from "react-router-dom";

// // import { CSSTransition } from "react-transition-group";
// import { ToastContainer } from "react-toastify"; // Import ToastContainer
// import "react-toastify/dist/ReactToastify.css"; // Import CSS for ToastContainer
// import Navbar from "./components/Navbar";
// import Home from "./components/Home/Home";
// import Footer from "./components/Footer";
// // import LoadingSpinner from "./components/Loader/Loader";
// import ProductDetails from './components/Products/ProductDetails';
// import AddToCartPage from './components/addtocart'; // Import the AddToCartPage component
// import CheckoutPage from './components/Order/checkoutpage'
// import ProductList from './components/Products/productlist'
// import Login from './components/Login';
// import OrderHistory from './Component/OrderHistory';
// import Register from './Component/Register';
// // import Navbar from "./components/Navbar/navbar";

// const ScrollToTop = () => {
//   const location = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location]);

//   return null;
// };


//   function App() {
//     // const [loading, setLoading] = useState(true);
//     const [cartItems, setCartItems] = useState([]);
  
//     // useEffect(() => {
//     //   const timer = setTimeout(() => {
//     //     setLoading(false);
//     //   }, 2000); // Simulating loading for 1 second. Adjust as needed.
  
//     //   return () => clearTimeout(timer);
//     // }, []);

//     const handleAddToCart = (product) => {
//       let cart = [...cartItems, product];
//       setCartItems(cart);
//       localStorage.setItem('cart', JSON.stringify(cart));
//     };
  
//     const handleRemoveFromCart = (index) => {
//       let cart = [...cartItems];
//       cart.splice(index, 1);
//       setCartItems(cart);
//       localStorage.setItem('cart', JSON.stringify(cart));
//     };
  
//     const handleMoveToWishlist = (index) => {
//       // Logic to move item to wishlist
//       let cart = [...cartItems];
//       cart.splice(index, 1);
//       setCartItems(cart);
//       localStorage.setItem('cart', JSON.stringify(cart));
//       console.log('Moved to wishlist');
//     };
  
  
//     return (
//       <div>
//       <ToastContainer position="bottom-right" />
//       <Router>
//         <ScrollToTop />
//         {
//         // !loading
//           <Navbar cartItems={cartItems}/>} {/* Render navbar only if not loading */}
        
      
       
     
//       <Routes>  
//          <Route exact path="/" element={<Home onAddToCart={handleAddToCart}/>} />
//          <Route path="/product/:productId" element={<ProductDetails onAddToCart={handleAddToCart}/>} />
//          <Route path="/cart" element={<AddToCartPage cartItems={cartItems} onAddToCart={handleAddToCart}/>}  onRemove={handleRemoveFromCart} onMoveToWishlist={handleMoveToWishlist}  />
//          <Route path="/checkout/:page" element={<CheckoutPage />} />
//          <Route path="/product-list" element={<ProductList />} />
//          <Route path="/login" element={<Login  />} />
//          <Route path="/register" element={<Register  />} />
//          <Route path="/orderHistory" element={<OrderHistory  />} />
//       </Routes>
//         {/* {
//         // !loading &&
//          <Footer />} */}
//            {<Footer />}
//         {/* {loading && <LoadingSpinner />} Display loading spinner while loading */}
//       </Router>
//     </div>
    
//   );
// }

// export default App;