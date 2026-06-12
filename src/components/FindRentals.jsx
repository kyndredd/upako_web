import React from 'react';
import { useState, useContext } from 'react';
import "./styles_components/FindRentals.css";

const FindRentals = () => {
  const rentals = [
  {
    id: 1,
    image: "https://picsum.photos/300/200?1",
    name: "Apartment in Quezon City",
    type: "Dormitory",
    location: "Makati",
    fee: 5000,
    size: "Medium (20–40 sqm)",
    num: "2 Bedrooms",
    status: "Vacant",
    vacancies: 0,
  },
  {
    id: 2,
    image: "https://picsum.photos/300/200?2",
    name: "Studio Unit",
    type: "Bedspace",
    location: "Makati",
    fee: 8000,
    size: "Large (40–80 sqm)",
    num: "4 Bedrooms",
    status: "Full",
    vacancies: 2,
  },
  {
    id: 3,
    image: "https://picsum.photos/300/200?3",
    name: "Chuchi",
    type: "Condo",
    location: "Davao",
    fee: 7891,
    size: "Extra Large (80+ sqm)",
    num: "4 Bedrooms",
    status: "Full",
    vacancies: 2,
  },
  {
    id: 4,
    image: "https://picsum.photos/300/200?3",
    name: "Boarding House",
    type: "House",
    location: "Makati",
    fee: 5000,
    size: "Medium (20–40 sqm)",
    num: "2 Bedrooms",
    status: "Vacant",
    vacancies: 2,
  },
  {
    id: 5,
    image: "https://picsum.photos/300/200?3",
    name: "Boarding House",
    type: "Dormitory",
    location: "Makati",
    fee: 5000,
    size: "Medium (20–40 sqm)",
    num: "2 Bedrooms",
    status: "Vacant",
    vacancies: 2,
  },
  {
    id: 6,
    image: "https://picsum.photos/300/200?3",
    name: "Boarding House",
    type: "Dormitory",
    location: "Makati",
    fee: 5000,
    size: "Medium (20–40 sqm)",
    num: "2 Bedrooms",
    status: "Vacant",
    vacancies: 2,
  },
  {
    id: 7,
    image: "https://picsum.photos/300/200?3",
    name: "Boarding House",
    type: "Dormitory",
    location: "Makati",
    fee: 5000,
    size: "Medium (20–40 sqm)",
    num: "2 Bedrooms",
    status: "Vacant",
    vacancies: 2,
  },
  {
    id: 8,
    image: "https://picsum.photos/300/200?3",
    name: "Boarding House",
    type: "Dormitory",
    location: "Makati",
    fee: 5000,
    size: "Medium (20–40 sqm)",
    num: "2 Bedrooms",
    status: "Vacant",
    vacancies: 2,
  },
  {
    id: 9,
    image: "https://picsum.photos/300/200?3",
    name: "Boarding House",
    type: "Dormitory",
    location: "Makati",
    fee: 5000,
    size: "Medium (20–40 sqm)",
    num: "2 Bedrooms",
    status: "Vacant",
    vacancies: 2,
  },
  {
    id: 10,
    image: "https://picsum.photos/300/200?3",
    name: "Boarding House",
    type: "Dormitory",
    location: "Makati",
    fee: 5000,
    size: "Medium (20–40 sqm)",
    num: "2 Bedrooms",
    status: "Vacant",
    vacancies: 2,
  },
  {
    id: 11,
    image: "https://picsum.photos/300/200?3",
    name: "Boarding House",
    type: "Dormitory",
    location: "Makati",
    fee: 5000,
    size: "Medium (20–40 sqm)",
    num: "2 Bedrooms",
    status: "Vacant",
    vacancies: 2,
  },
  ];

  // Filters
  // Filter in single useState instead of multiple state
  const [filter, setFilter] = useState({
    type: "Any",
    location: "Any",
    fee: "Any",
    size: "Any",
    num:  "Any",
    status: "Any"
  });

  const [applyfilter, setApplyFilter] = useState({
    type: "Any",
    location: "Any",
    fee: "Any",
    size: "Any",
    num:  "Any",
    status: "Any"
  });

  // For price list (convert string to number types)
  const feeRanges = {
    Any: { min: 0, max: Infinity },
    "1000-5000": { min: 1000, max: 5000 },
    "5000-10000": { min: 5000, max: 10000 },
    "10000-20000": { min: 10000, max: 20000 },
    "20000+": { min: 20000, max: Infinity },
  };

  // Filter display changes
  const handleChange = (event) => {
    const { name, value } = event.target;  //value here comes from the select tag
    
    // update the filter state 
    setFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Apply the filters
  const handlesearch = (event) => {
    console.log("search: ", applyfilter, filteredrentals);
    setApplyFilter(filter);
  }

  const { min, max } = feeRanges[applyfilter.fee] || feeRanges.Any; 

  // Filtering action, if all the match value is true then include the item if not exclude it
  const filteredrentals = rentals.filter((item) => {
    const matchType = 
      applyfilter.type === "Any" || item.type === applyfilter.type;

    const matchLocation = 
      applyfilter.location === "Any" || item.location === applyfilter.location;

    const matchFee =
      item.fee >= min && item.fee <= max;

    const matchSize = 
      applyfilter.size === "Any" || item.size === applyfilter.size;

    const matchNum = 
      applyfilter.num === "Any" || item.num === applyfilter.num;

    const matchStatus = 
      applyfilter.status === "Any" || item.status === applyfilter.status;

    return matchType && matchLocation && matchFee && matchSize && matchNum && matchStatus;  
  });

  // Check the price 
  //console.log("fee: ", min, max);
  

  return (
    <div className='container_main'>
      {/*Filter System*/}
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
          <button onClick={handlesearch}>Search</button>
        </div>
      </div>


      {/*Listing System*/}
      <div className='list_zone'>
        <div className='list_upper_zone'>
          <div className='list_desc'>
            <div>
              Search available rentals:
            </div>
            <div> 
              45 active  listings
            </div>
          </div>
          <div className='list_search'>
            Search Bar
          </div>  
        </div>
        <div className='listing_zone'>
          <div className='listing_filter'>
            <div>
              Sort by 
            </div>
            <div>
              Price Bar
            </div>
          </div>
          <div className='listing_items'>
            {filteredrentals.length === 0 ? (
              <h1>No match found</h1>
            ) : (
              filteredrentals.map((item) => (
              <div className='list_box' key={item.id}>
                <div className='list_box_inside'>
                  <div className='photo_zone'>
                    <div className='rental_photos'>
                      <img src={item.image} className='image'/>
                    </div>
                    <div className='prev'>
                      prev
                    </div>
                    <div className='next'>
                      next
                    </div>
                    <>
                    {item.vacancies === 0 ? (
                      <div className='vacancies'>
                        Full
                      </div>
                    ) : (
                      <div className='vacancies'>
                        {item.vacancies} Vacancies
                      </div>
                    )}
                    </>
                  </div>
                  <div className='icons'>
                    <div className='heart_icon'>
                      Heart
                    </div>
                    <div className='loc_icon'>
                      Location
                    </div>
                    <div>
                      {item.type}
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div className='rent_name'>{item.name}</div>
                  </div>
                  <div className='rent_desc'>
                    <div className='left_left'>
                      <div className='left_rent_desc'>{item.location}</div>
                      <div className='left_rent_desc'>size</div>
                    </div>
                    <div className='right_right'>
                      <div className='right_rent_desc'>P{item.fee}.00</div>
                      <div className='right_rent_desc'>per month</div>
                    </div>
                  </div>
                </div>
              </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FindRentals