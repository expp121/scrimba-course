import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, Link, NavLink} from "react-router-dom"
/**
 * Challenge:
 * Bootstrap the VanLife project by creating the first 2 routes:
 * Home and About.
 * 
 * Also include the navbar that can link between the two routes.
 * For now, you'll either need to copy/paste the navbar code
 * to both Home and About pages, or you'll need to find a place
 * to put it where it can be shared between the two pages.
 * (Don't overthink this part - just do whatever is easiest for
 * you because we'll learn a better approach very soon)
 * 
 * Review challenge: do all the CSS yourself based on the design
 * linked in the slides.
 */

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">#VANLIFE</Link>
        <div>
          <NavLink style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : ""
            })} to="/about">About</NavLink>
          <NavLink style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : ""
            })} to="/vans">Vans</NavLink>
        </div>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/about" element={<About/>}/>
        </Routes>
      </main>
      
      <footer>
        <p>&copy; 2022 #VANLIFE</p>
      </footer>
    </BrowserRouter>
  )
}


function Home(){
  return (
    <div className="container">
    <h1>You got the travel plans, we got the travel vans.</h1>
    <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
    <button>Find your van</button>
    </div>
  )
}

function About(){
  return (
    <div className="about-container">
      <img src="van.png" alt="A picture of a van and person on top of it, looking at the nightsky"/>
      <div className="about-content-container">
        <h1>{`Don't squeeze in a sedan when you could relax in a van.`}</h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van rental. Our vans are  recertified before each trip to ensure your travel plans can go off without a hitch.
          (Hitch costs extra 😉)
          <br/>
          <br/>
          Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
        </p>
        <section>
          <h2>Your destination is waiting. <br/>
              Your van is ready.
          </h2>
          <button>Explore our vans</button>
        </section>
      </div>
    </div>
  )
}
ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);