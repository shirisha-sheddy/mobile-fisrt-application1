import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Login setLoggedIn={setLoggedIn} />}
        />
        <Route
          path="/home"
          element={loggedIn ? <Home /> : <Login setLoggedIn={setLoggedIn} />}
        />
      </Routes>
    </Router>
  );
}

export default App;


