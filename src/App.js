import React, { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

// react-router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css"

//firebase
import firebase from "firebase/compat/app"
import "firebase/compat/auth"

//components
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import PageNotFound from "./pages/PageNotFound"

//context
import { UserContext } from './context/UserContext';

//footer
import Footer from './layout/Footer';
import Header from './layout/Header';

import firebaseConfig from "./Config/firebaseConfig"
//init firebase
firebase.initializeApp(firebaseConfig);

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/signin' element={<SignIn />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </UserContext.Provider>

    </Router>
  );
}

export default App;
