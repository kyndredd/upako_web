// import imp lib for hyperlinks
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useContext } from "react";

// For Context
import AuthContext from "./context/AuthContext";
import AuthProvider from "./context/AuthProvider";

// Import jsx files
import NavbarLayout from "./layouts/NavbarLayout";
import Home from "./components/Home";
import FindRentals from "./components/FindRentals_Page/FindRentals";
import FindTenants from "./components/FindTenants_Page/FindTenants";
import Dashboard from "./components/Dashboard";
import Pricing from "./components/Pricing";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ProtectedRoute from "./routes/ProtectedRoute";
import OwnerDashboardLayout from "./layouts/OwnerDashboardLayout";
import OwnerDashboard from "./components/Dashboard_Owner/OwnerDashboard";
import OwnerTenantLists from "./components/Dashboard_Owner/OwnerTenantLists";
import OwnerRentalProperties from "./components/Dashboard_Owner/OwnerRentalProperties";
import OwnerMessages from "./components/Dashboard_Owner/OwnerMessages";
import OwnerPayments from "./components/Dashboard_Owner/OwnerPayments";
import TenantDashboardLayout from "./layouts/TenantDashboardLayout";
import TenantDashboard from "./components/Dashboard_Tenant/TenantDashboard";
import TenantFindRentPost from "./components/Dashboard_Tenant/TenantFindRentPost";
import TenantMessages from "./components/Dashboard_Tenant/TenantMessages";
import TenantPayment from "./components/Dashboard_Tenant/TenantPayment";
import LoginSignUpLayout from "./layouts/LoginSignUpLayout";
import SettingsLayout from "./layouts/SettingsLayout";
import ProfileSettings from "./components/ProfileSettings";
import SecuritySettings from "./components/SecuritySettings";
import NotificationSettings from "./components/NotificationSettings";

function App() {
  const { isLogin, usertype } = useContext(AuthContext);

  console.log(isLogin, usertype);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LoginSignUpLayout />}>
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Route>
       
        <Route path="/" element={<NavbarLayout />}>
          <Route index element={<Home />}/>
          <Route path="/FindTenants" element={<FindTenants />}/>
          <Route path="/FindRentals" element={<FindRentals />}/>
          <Route path="/Pricing" element={<Pricing />} />

          <Route element={<ProtectedRoute allowedRoles={["owner", "tenant"]} />}>
            <Route path="/Settings" element={<SettingsLayout />}>
              <Route index path="/Settings/Profile" element={<ProfileSettings />} />
              <Route path="/Settings/Security" element={<SecuritySettings />} />
              <Route path="/Settings/Notification" element={<NotificationSettings />} />
            </Route>
          </Route>
        
          <Route element={<ProtectedRoute allowedRoles={["owner"]} />}>
            <Route path="/Owner" element={<OwnerDashboardLayout />}>
              <Route index path="/Owner/Dashboard" element={<OwnerDashboard />} />
              <Route path="/Owner/TenantList" element={<OwnerTenantLists />} />
              <Route path="/Owner/RentalProperties" element={<OwnerRentalProperties />} />
              <Route path="/Owner/Messages" element={<OwnerMessages />} />
              <Route path="/Owner/Payments" element={<OwnerPayments />} />
            </Route>
          </Route>
        
          <Route element={<ProtectedRoute allowedRoles={["tenant"]} />}>
            <Route path="/Tenant" element={<TenantDashboardLayout />}>
              <Route index path="/Tenant/Dashboard" element={<TenantDashboard />} />
              <Route path="/Tenant/FindRentPost" element={<TenantFindRentPost />} />
              <Route path="/Tenant/Messages" element={<TenantMessages />} />
              <Route path="/Tenant/Payments" element={<TenantPayment />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App;

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
