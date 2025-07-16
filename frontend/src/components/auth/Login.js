import React, { useState } from 'react';
import './Login.css';

export default function Login({ setAuthState }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (field, value) => {
    if (field === 'username') {
      setUsername(value);
    } else {
      setPassword(value);
    }
    // Update form validity
    const usernameValid = field === 'username' ? value.trim() !== '' : username.trim() !== '';
    const passwordValid = field === 'password' ? value.trim() !== '' : password.trim() !== '';
    setIsFormValid(usernameValid && passwordValid);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      alert(`Logging in with Vendor ID: ${username}`);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="login-container">
      <div className="login-background">
        <div className="geometric-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="login-card">
        <div className="login-header">
          <div className="logo-container">
            <img 
              src="/assets/kaartech.jpg" 
              alt="KaarTech Logo" 
              className="logo"
              onError={(e) => {
                e.target.src = "/assets/logo.png";
              }}
            />
            <div className="logo-glow"></div>
          </div>
          <h1 className="login-title">Vendor Portal</h1>
          <p className="login-subtitle">Secure Business Access</p>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <label htmlFor="username" className="input-label">Vendor ID</label>
            <div className="input-wrapper">
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => handleInputChange('username', e.target.value)}
                placeholder="Enter your Vendor ID"
                className="login-input"
                required
              />
              <div className="input-border"></div>
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="password" className="input-label">Password</label>
            <div className="input-wrapper">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                placeholder="Enter your Password"
                className="login-input"
                required
              />
              <div className="input-border"></div>
            </div>
          </div>

          <button 
            type="submit" 
            disabled={!isFormValid || loading}
            className={`login-button ${loading ? 'loading' : ''}`}
          >
            {loading ? (
              <div className="button-content">
                <div className="spinner"></div>
                <span>Authenticating...</span>
              </div>
            ) : (
              <div className="button-content">
                <span>Sign In</span>
                <div className="button-arrow">→</div>
              </div>
            )}
          </button>
        </form>

        <div className="login-footer">
          <p className="signup-link">
            Don't have access?{' '}
            <button
              type="button"
              onClick={() => setAuthState('signup')}
              className="link-button"
            >
              Request Access
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
