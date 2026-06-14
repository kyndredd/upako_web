import React from 'react';
import "../styles_components/FindTenants.css";

const FindTenants = () => {
  return (
    <div className='container_main'>
      {/*Filter System*/} 
      <div className='filter_zone'> 
        <div className='search_filter'>
          Search Filter
        </div>
        <div>
          <label className='option_title'>Tenant Type</label>
          <select className='form-select'>
            <option value="Any">Any</option>
            <option value="Individual">Individual</option>
            <option value="Couple">Couple</option>
            <option value="Family">Family</option>
            <option value="Group">Group</option>
            <option value="Student">Student</option>
            <option value="Employee">Employee</option>
          </select>
        </div>
        <div>
          <label className='option_title'>Location</label>
          <select className='form-select'>
            <option value="Any">Any</option>
            <option value="Makati">Makati</option>
            <option value="Taguig (BGC)">Taguig (BGC)</option>
            <option value="Mandaluyong">Mandaluyong</option>
            <option value="Pasig">Pasig</option>
            <option value="San Juan">San Juan</option>
            <option value="Quezon City">Quezon City</option>
            <option value="Manila">Manila</option>
            <option value="Pasay">Pasay</option>
            <option value="Las Pinas">Las Pinas</option>
            <option value="Muntinlupa">Muntinlupa</option>
            <option value="Laguna">Laguna</option>
            <option value="Cavite">Cavite</option>
            <option value="Tagaytay">Tagaytay</option>
            <option value="Cebu">Cebu</option>
            <option value="Davao">Davao</option>
          </select>
        </div>
        <div>
          <label className='option_title'>Gender</label>
          <select className='form-select'>
            <option value="Any">Any</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label className='option_title'>Budget Range</label>
          <select className='form-select'>
            <option value="Any">Any</option>
            <option value="1000-5000">1000-5000</option>
            <option value="5000-10000">5000-10000</option>
            <option value="10000-20000">10000-20000</option>
            <option value="20000+">20000+</option>
          </select>
        </div>
        <div>
          <button>Search</button>
        </div>
      </div>

      {/*Listing System*/}
      
    </div>
  )
}

export default FindTenants