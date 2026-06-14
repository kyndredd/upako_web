import React from 'react';
import { useState, useContext, useEffect } from 'react';
import "../styles_components/FindRentals.css";
import FindRentals_FilterSide from './FindRentals_FilterSide';
import FindRentals_ListingSide from './FindRentals_ListingSide';

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
    status: "Full",
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
    vacancies: 0,
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
    vacancies: 0,
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
    name: "PBB House",
    type: "Condo",
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
    name: "PBB House",
    type: "Apartment",
    location: "Pasig",
    fee: 5000,
    size: "Medium (20–40 sqm)",
    num: "2 Bedrooms",
    status: "Vacant",
    vacancies: 2,
  },
  {
    id: 11,
    image: "https://picsum.photos/300/200?3",
    name: "PBB House",
    type: "House",
    location: "Manila",
    fee: 5000,
    size: "Medium (20–40 sqm)",
    num: "2 Bedrooms",
    status: "Vacant",
    vacancies: 2,
  },
  ];

  // Filters
  // Filter in single useState instead of multiple state
  // For search filter
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

  // For search bar
  const [inputsearch, setInputSearch] = useState("");
  const [search, setSearch] = useState("");


  // useEffect for storing  temporary data
  useEffect(() => {
    const saved_filters = sessionStorage.getItem("rentfilters");
    const saved_search =  sessionStorage.getItem("rentsearch");
    const saved_searching = sessionStorage.getItem("searching");
    
    if (saved_filters) {
      setFilter(JSON.parse(saved_filters));
      setApplyFilter(JSON.parse(saved_filters));
    }

    if (saved_search) {
      setSearch(JSON.parse(saved_search));
      //console.log("true");
    }

    if (saved_searching) {
      setInputSearch(JSON.parse(saved_searching));
    }

    //console.log("Saved storage", saved_filters, saved_search);
    //console.log("Inputsearch: ", inputsearch);
  }, []);


  // For search bar functions
  const handleRentSearch = (event) => {
    setInputSearch(event.target.value);
    //console.log(search);
  }

  const handleClickSearch = (event) => {
    setFilter({
      type: "Any",
      location: "Any",
      fee: "Any",
      size: "Any",
      num:  "Any",
      status: "Any"
    });

    setApplyFilter({
      type: "Any",
      location: "Any",
      fee: "Any",
      size: "Any",
      num:  "Any",
      status: "Any"
    });

    setSearch(inputsearch);
    sessionStorage.setItem("rentsearch", JSON.stringify(inputsearch));
    sessionStorage.setItem("searching", JSON.stringify(inputsearch));
    sessionStorage.removeItem("rentfilters");

    // use in order to remove the storage inorder to enable to search all items
    if (inputsearch === "") {
      //console.log("no value");
      sessionStorage.removeItem("rentsearch");
    }
    //console.log("searching: ", search);
    //console.log("search: ", applyfilter, filteredrentals);
  }

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

    console.log("Filterrss: ", filter);
  };

  // Apply the filters
  const handleSearch = (event) => {
    setApplyFilter(filter);
    sessionStorage.setItem("rentfilters", JSON.stringify(filter)); //store the data
    
    console.log("search: ", applyfilter, filteredrentals);
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

    const matchSearch =
      search === "" || item.name.toLowerCase().includes(search.toLowerCase());

    return matchType && 
           matchLocation && 
           matchFee && 
           matchSize && 
           matchNum && 
           matchStatus &&
           matchSearch;  
  });

  // Check the price 
  //console.log("fee: ", min, max);
  
  
  return (
    <div className='container_main'>
      {/*Filter System*/}
      <FindRentals_FilterSide 
        filter={filter} 
        handleChange={handleChange}
        handleSearch={handleSearch}
      />
      
      {/*Listing System*/}
      {/*ung problem kaya d nagreretain search bar value once refresh is nakalagay dito
      search={inputsearch} then we call it sa child as inputsearch so theyre not match*/}
      <FindRentals_ListingSide
        filteredrentals={filteredrentals}
        inputsearch={inputsearch}    
        handleRentSearch={handleRentSearch}
        handleClickSearch={handleClickSearch}
      />
    </div>
  )
}

export default FindRentals