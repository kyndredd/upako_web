import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Routes } from "react-router-dom";
import {Link} from "react-router-dom";
import App_owner from "./assets/images/App_owner.png";
import App_tenants from "./assets/images/App_tenants.png";
import AppRoutes from "./Routes";

function App() {
  
  return (
    <div>
      <div>
        <Routes>
          <AppRoutes />
        </Routes>
      </div>

      <div>
        <Navbar />
      </div>
      <div className="owner_main">
        <div className="owner_desc">
          <h1 className="maintext">Rent Owners</h1>
          <hr></hr>
          <p className="subtext">
            Connecting tenants and dorm owners
          </p>
          <p className="subtext">
            in one platform
          </p>
          <p className="subtext">
            Manage tenants, payments, and 
          </p>
          <p className="subtext">
            communication in one place.
          </p>
          <button className="btn btn-outline-success button">Look for Tenants</button>
        </div>
        <div>
          <img src={App_owner} alt="image for rent owner" className="owner_image"></img>
        </div>
      </div>

      <div className="tenants_main">
        <div>
          <img src={App_tenants} alt="image for tenants" className="tenants_image"></img>
        </div>
        <div className="tenants_desc">
          <h1 className="maintext">Tenants</h1>
          <hr></hr>
          <p className="subtext">
            Helping tenants connect with trusted
          </p>
          <p className="subtext">
            dorm owners
          </p>
          <p className="subtext">
            Browse dorms. Compare options.
          </p>
          <p className="subtext">
            Move in easier.
          </p>
          <button className="btn btn-outline-success button">Look for Rentals</button>
        </div>
      </div>

      <hr></hr>

      <div className="below_desc">
        <div>
          <h1 className="b_maintext">Upako</h1>
          <p>
            A platform that connects property 
          </p>  
          <p>
            owners and tenants—making it easy
          </p>
          <p>
            to find rentals, manage tenants,
          </p>  
          <p>
            and handle rental businesses in
          </p> 
          <p>
            one place.
          </p>      
        </div>
        <div>
          <h1>Company</h1>
          <Routes>
            <AppRoutes />
            <Link to="/about" >About</Link>
          </Routes>
        </div>
        <div>
          <h1>Rental Types</h1>
        </div>
      </div>
      
    </div>
  );
}

export default App

{/*
<>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
*/}
