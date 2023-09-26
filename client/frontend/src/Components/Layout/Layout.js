import React from 'react'
import Navbar from '../LandingPage/Navbar'
import Footer from '../LandingPage/Footer'
const Layout = (props) => {
  return (
  
      <React.Fragment>
          <header>
              <Navbar />
          </header>
          <main>
              {props.children}
          </main>
          <footer>
               <Footer/>
          </footer>
      </React.Fragment>

  )
}

export default Layout
