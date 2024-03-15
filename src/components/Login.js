import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setLoggedIn }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'siri' && password === 'siri@2000') {
      setError('');
      setLoggedIn(true);
      navigate('/home'); // Navigate to the home page after successful login
    } else {
      setError('Invalid Username or Password');
    }
  };

  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="d-flex flex-column">
            <h1 className="text-danger m-5 text-center">Login</h1>
            <form className="shadow d-flex flex-column justify-content-center p-5">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" value={username} onChange={onChangeUsername} />
              <label htmlFor="password" className="mt-3">
                Password:
              </label>
              <input type="password" id="password" value={password} onChange={onChangePassword} />
              {error && <div className="text-danger">{error}</div>}
              <div className="mt-5 text-center">
                <button type="button" className="btn btn-danger" onClick={handleLogin}>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;


