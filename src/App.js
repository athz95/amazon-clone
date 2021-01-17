import React,{ useEffect } from 'react';
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders";

const promise = loadStripe('pk_test_51HfhEfHkWqfpwsKPSuGUhQu9iT7wuL57azXqGhHKAGwpA6PukheZVNAYQpLQZryZxVwwJAhPuJEj2SOfiA4EJrds00SsFoM2Us' );


function App() {
   
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
     auth.onAuthStateChanged(authUser => {
       console.log('THE USER IS >>> ', authUser);

       if(authUser){
         // the user was used in / the user was logged in
         dispatch({
           type: 'SET_USER',
           user: authUser
         })

       } else {
         // the user was logged out
         dispatch({
           type: 'SET_USER',
           user: null
         })
       }
     })
  }, [])
  

  return (
    <Router >

   <div className="app">

     <Switch>
     <Route path="/login">
       <Login />
       </Route>

       <Route path="/orders">
       <Header/>
       <Orders />
       </Route>

     <Route path="/checkout">
       <Header/>
       <Checkout />
       </Route>

       <Route path="/payment">
       <Header/>
       <Elements stripe={promise}>
         <Payment />
       </Elements>
       </Route>

       <Route path="/">
       <Header/>
       <Home />
       </Route>
     </Switch>

    </div>
    </Router>
   
    
  );
}

export default App;
