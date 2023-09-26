// LandingPage.js

import React from 'react';
import '../../CSS/LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Welcome to Our College Grievance Portal</h1>
        <p>Report and resolve issues with ease.</p>
      </header>
      <section className="features">
        <div className="feature">
          <h2>Easy Reporting</h2>
          <p>Submit your grievances effortlessly through our portal.</p>
        </div>
        <div className="feature">
          <h2>Quick Resolution</h2>
          <p>Our team is dedicated to resolving your issues promptly.</p>
        </div>
        <div className="feature">
          <h2>Transparent Process</h2>
          <p>Stay updated on the status of your grievances at all times.</p>
        </div>
      </section>
      

 <div className="feature-container">
    <div className='other-feature'>
         <a href='/login'> <h2>Login Here</h2> </a>
        </div>
        <div className="other-feature">
        <a href='signup'>  <h2>Register Here</h2></a>
        </div>
   
    
    </div>
</div>
  );
}

export default LandingPage;
