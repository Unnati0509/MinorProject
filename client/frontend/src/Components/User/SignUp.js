import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import "../../CSS/Auth.css"
import axios from 'axios';
const SignUp = () => {
  const navigate = useNavigate(); 
  const [userRole, setUserRole] = useState('student');
  const [formData, setFormData] = useState({
    role:'',
    name: '',
    email: '',
    password: '',
    class: '',
    enrollmentNumber: '',
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

  const handleSubmit =async (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log(formData);
    try {
      const response = await axios.post('http://localhost:8500/api/v1/user/signup', formData);
      console.log(response.data); // This may contain a success message.
      navigate('/login');
      
    } catch (error) {
      console.error(error);
      setAlertMessage('SignUp failed. Please check your credentials.');
    }
  };
  const handleCompositeChange = (event) => {
    handleRoleChange(event);
    handleInputChange(event);
  };

  return (
    <div className="container">
      <div className="form-container">
      <h2>Sign Up</h2>
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
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
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
            />
          </label>
        </div>
        {userRole === 'student' && (
          <div>
            <label>
              Class:
              <input
                type="text"
                name="class"
                value={formData.class}
                onChange={handleInputChange}
              />
            </label>
          </div>
        )}
        {userRole === 'student' && (
          <div>
            <label>
              Enrollment Number:
              <input
                type="text"
                name="enrollmentNumber"
                value={formData.enrollmentNumber}
                onChange={handleInputChange}
              />
            </label>
          </div>
        )}
        <div>
          <button type="submit">Sign Up</button>
          <p className='info'>Already Logged in? <a href="/login"> Login here</a></p>
        </div>
      </form>
      </div>
    </div>
  );
};

export default SignUp;
