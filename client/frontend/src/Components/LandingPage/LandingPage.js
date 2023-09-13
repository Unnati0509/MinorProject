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
      <section className='organizer'>

 <div className="feature">
          <h2>Login As Student</h2>
          <p>Student....</p> 
        </div>
        <div className="feature">
          <h2>Login As Teacher</h2>
          <p>Teacher...</p>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2023 College Grievance Portal</p>
      </footer>
    </div>
  );
}

export default LandingPage;
