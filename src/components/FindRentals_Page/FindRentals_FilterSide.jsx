import React from 'react';
import "../styles_components/FindRentals.css";

const FindRentals_FilterSide = ({filter, handleChange, handleSearch}) => {
  return (
    <div className='filter_zone'> 
        <div className='search_filter'>
          Search Filter
        </div>
        <div>
          <label className='option_title'>Rental Type</label>
          <select name="type" value={filter.type} onChange={handleChange} className='form-select'>
            <option value="Any">Any</option>
            <option value="Dormitory">Dormitory</option>
            <option value="Bedspace">Bedspace</option>
            <option value="Boarding House">Boarding House</option>
            <option value="Apartment">Apartment</option>
            <option value="Condo">Condo</option>
            <option value="House">House</option>
          </select>
        </div>
        <div>
          <label className='option_title'>Location</label>
          <select name="location" value={filter.location} onChange={handleChange} className='form-select'>
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
          <label>Rental Fee Range</label>
          <select name="fee" value={filter.fee} onChange={handleChange} className='form-select'>
            <option value="Any">Any</option>
            <option value="1000-5000">1000-5000</option>
            <option value="5000-10000">5000-10000</option>
            <option value="10000-20000">10000-20000</option>
            <option value="20000+">20000+</option>
          </select>
        </div>
        <div>
          <label>Size</label>
          <select name="size" value={filter.size} onChange={handleChange} className='form-select'>
            <option value="Any">Any</option>
            <option value="Small (less than 20 sqm)">Small (less than 20 sqm)</option>
            <option value="Medium (20–40 sqm)">Medium (20–40 sqm)</option>
            <option value="Large (40–80 sqm)">Large (40–80 sqm)</option>
            <option value="Extra Large (80+ sqm)">Extra Large (80+ sqm)</option>
          </select>
        </div>
        <div>
          <label>Number of Bedrooms</label>
          <select name="num" value={filter.num} onChange={handleChange} className='form-select'>
            <option value="Any">Any</option>
            <option value="1 Bedroom">1 Bedroom</option>
            <option value="2 Bedrooms">2 Bedrooms</option>
            <option value="3 Bedrooms">3 Bedrooms</option>
            <option value="4 Bedrooms">4 Bedrooms</option>
          </select>
        </div>
        <div>
          <label>Status</label>
          <select name="status" value={filter.status} onChange={handleChange} className='form-select'>
            <option value="Any">Any</option>
            <option value="Vacant">Vacant</option>
            <option value="Full">Full</option>
          </select>
        </div>
        <div>
          <button onClick={handleSearch}>Search</button>
        </div>
    </div>
  )
}

export default FindRentals_FilterSide;