import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { Products, Navbar, Cart, Checkout } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    const [ products, setProducts ] = useState([]);
    const [ cart, setCart ] = useState({});
    const [ order, setOrder ] = useState({});
    const [ errorMessage, setErrorMessage ] = useState('');

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
      };

    const handleAddToCart = async (productId, quantity) => {
        const { cart } = await commerce.cart.add(productId, quantity);

        setCart(cart);
    }

    const handleUpdateCartQty = async (productId, quantity) => {
        const { cart } = await commerce.cart.update(productId, { quantity  });

         setCart(cart)
    }

    // const refreshCart = async (productId, quantity) => {
    //     const { cart } = await commerce.cart.refresh(productId, {quantity});

    //     setCart(cart)
    // } 

    const handleRemoveFromCart = async (productId) => {
        const { cart } = await commerce.cart.remove(productId)

        setCart(cart)
    }

    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty()

        setCart(cart)
    }

    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();

        setCart(newCart);
    }

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

            setOrder(incomingOrder);
            refreshCart();
        } catch (error) {
            setErrorMessage(error.data.error.message);
        }
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    console.log(cart);

    return (
        <Router>
            <div>
                <Navbar totalItems={cart.total_items} />
                <Switch>

                    {/* Home Route */}
                    <Route exact path='/'>
                        <Products products={products} onAddToCart={handleAddToCart} /> 
                    </Route>
                    
                    {/* Cart Route */}
                    <Route exact path='/cart'>
                        <Cart 
                            cart={cart} 
                            refreshCart={refreshCart}
                            handleRemoveFromCart={handleRemoveFromCart}
                            handleEmptyCart={handleEmptyCart}
                            handleUpdateCartQty={handleUpdateCartQty}
                         />
                    </Route>

                    {/* Checkout Route */}
                    <Route exact path='/checkout'>
                        <Checkout 
                            cart={cart}
                            order={order}
                            onCaptureCheckout={handleCaptureCheckout}
                            error={errorMessage} />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App


// import React, { useState, useEffect } from 'react';
// import { CssBaseline } from '@material-ui/core';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import { Navbar, Products, Cart, Checkout, Home, About } from './components';
// import { commerce } from './lib/commerce';

// const App = () => {
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState({});
//   const [order, setOrder] = useState({});
//   const [errorMessage, setErrorMessage] = useState('');

//   const fetchProducts = async () => {
//     const { data } = await commerce.products.list();

//     setProducts(data);
//   };

//   const fetchCart = async () => {
//     setCart(await commerce.cart.retrieve());
//   };

//   const handleAddToCart = async (productId, quantity) => {
//     const item = await commerce.cart.add(productId, quantity);

//     setCart(item.cart);
//   };

//   const handleUpdateCartQty = async (lineItemId, quantity) => {
//     const response = await commerce.cart.update(lineItemId, { quantity });

//     setCart(response.cart);
//   };

//   const handleRemoveFromCart = async (lineItemId) => {
//     const response = await commerce.cart.remove(lineItemId);

//     setCart(response.cart);
//   };

//   const handleEmptyCart = async () => {
//     const response = await commerce.cart.empty();

//     setCart(response.cart);
//   };

//   const refreshCart = async () => {
//     const newCart = await commerce.cart.refresh();

//     setCart(newCart);
//   };

//   const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
//     try {
//       const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

//       setOrder(incomingOrder);

//       refreshCart();
//     } catch (error) {
//       setErrorMessage(error.data.error.message);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//     fetchCart();
//   }, []);

//   const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

//   return (
//     <Router>
//       <div style={{ display: 'flex' }}>
//         <CssBaseline />
//         <Navbar totalItems={cart.total_items} handleDrawerToggle={handleDrawerToggle} />
//         <Switch>

          {/* <Route exact path="/">
            <Home cart={cart}/>
          </Route>

          <Route exact path="/about">
            <About />
          </Route> */}

{/* 
          <Route exact path="/">
            <Products products={products} onAddToCart={handleAddToCart} handleUpdateCartQty={handleUpdateCartQty}  cart={cart}/>
          </Route>

          <Route exact path="/cart">
            <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />
          </Route>

          <Route path="/checkout" exact>
            <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App; */}