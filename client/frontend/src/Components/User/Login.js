import React, { useState, useEffect } from 'react';
import '../../CSS/Auth.css'; 
import axios from "axios";

const Login = () => {
  const [userRole, setUserRole] = useState('student');
  const [formData, setFormData] = useState({
    role:'',
    email: '',
    password: '',
  });

  const [alertMessage, setAlertMessage] = useState(null);
  useEffect(() => {
    if (alertMessage) {
      const timer = setTimeout(() => {
        setAlertMessage(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [alertMessage]);

  const handleRoleChange = (event) => {
    setUserRole(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post('http://localhost:8500/api/v1/user/login', formData);
      console.log(response.data); 
    } catch (error) {
      setAlertMessage('Authentication failed. Please check your credentials.');
      console.error(error);
    }
  };
  const handleCompositeChange = (event) => {
    handleRoleChange(event);
    handleInputChange(event);
   
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Login</h2>
        {alertMessage && <div className="alert">{alertMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Role:
              <select name="role" onChange={handleCompositeChange} value={userRole}>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder='example@gmail.com'
              />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder='password'
              />
            </label>
          </div>
          <div>
            <button type="submit">Login</button>
            <p className='info'>Not yet Registered? <a href="/signup"> SignUp here</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
