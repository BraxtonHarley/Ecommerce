import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { Products, Navbar, Cart, Checkout } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {

  const [products, setProducts] = useState([]);

  // PASSES PROPS TO NAV, CART, CHECKOUT
  const [cart, setCart] = useState({});
  
  // const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");


  // Async/Await SUSPENDED UNTIL API CALL TO COMMERCE API
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  // GRABS CART AND SETS IT TO STATE
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };


  // RUNS ON INITIAL RENDER
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);


  // ADDS PRODUCTS TO CART
  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart);
  };

  // UPDATES CART QUANTITY
  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  };

  // REMOVES ITEM FROM CART
  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };

  // EMPTIES CART
  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  };



  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };



  // const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
  //   try {
  //     const incomingOrder = await commerce.checkout.capture(
  //       checkoutTokenId,
  //       newOrder
  //     );

  //     setOrder(incomingOrder);
  //     refreshCart();
  //   } catch (error) {
  //     setErrorMessage(error.data.error.message);
  //   }
  // };


  

  console.log(cart);

  return (
    <Router>
      <div>
        
        <Navbar totalItems={cart.total_items} />
        <Switch>


          {/* Products Route */}
          <Route exact path="/">
            <Products products={products} onAddToCart={handleAddToCart} />
          </Route>

          {/* Cart Route */}
          <Route exact path="/cart">
            <Cart
              cart={cart}
              refreshCart={refreshCart}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
              handleUpdateCartQty={handleUpdateCartQty}
            />
          </Route>

          {/* Checkout Route */}
          <Route exact path="/checkout">
            <Checkout
              cart={cart}
          
              // onCaptureCheckout={handleCaptureCheckout}
              error={errorMessage}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;