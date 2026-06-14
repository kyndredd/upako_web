import React from 'react';
import "../styles_components/FindRentals.css";

const FindRentals_ListingSide = ({filteredrentals, inputsearch, handleRentSearch, handleClickSearch}) => {
  return (
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
            <input 
                type='text'
                placeholder='Enter Rent Name...'
                value={inputsearch}
                onChange={handleRentSearch}
            />
            <button onClick={handleClickSearch}>Search</button>
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
  )
}

export default FindRentals_ListingSide;