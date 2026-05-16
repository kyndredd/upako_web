import React from 'react'

//For css for Home page
import "./styles/Home.css"

//For <Link> to function
import {Link} from "react-router-dom";

//assets for Home page
import App_owner from "../assets/images/App_owner.png";
import App_tenants from "../assets/images/App_tenants.png";
import fb from "../assets/images/FB.png"
import twitter from "../assets/images/twitter.png"
import youtube from "../assets/images/youtube.png"

const Home = () => {
  return (
    <div>
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

        <div className="below_desc">
            <div className="small_desc">
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

            <div className='vertical_line'></div>

            <div className='company'>
                <h1>Company</h1>
                <div className='main_links'>
                    <Link to="/About" className='links_home'>About</Link>
                    <Link className='links_home'>What We Offer</Link>
                    <Link className='links_home'>Terms of Service</Link>
                    <Link className='links_home'>Blog</Link>
                    <Link className='links_home'>Help Center</Link>
                </div>
            </div>

            <div className='types'>
                <h1>Rental Types</h1>
                <div className='main_links'>
                    <Link className='links_home'>Dorms</Link>
                    <Link className='links_home'>Apartments</Link>
                    <Link className='links_home'>Boarding</Link>
                    <Link className='links_home'>Bedspacer</Link>
                </div>
            </div>

            <div className='follow'>
                <h1 className='follow_text'>Follow Us:</h1>
                <div className='picturelogos'>
                    <a href='https://www.remove.bg/upload' target='_blank' rel='noopener noreferrer'>
                        <img src={fb} className='fb'></img>
                    </a>
                    <a href='https://www.remove.bg/upload' target='_blank' rel='noopener noreferrer'>
                        <img src={twitter} className='twitter'></img>
                    </a>
                    <a href='https://www.remove.bg/upload' target='_blank' rel='noopener noreferrer'>
                        <img src={youtube} className='youtube'></img>
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home