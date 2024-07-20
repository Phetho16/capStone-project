import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios'; 
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import './Search.css';

const Search = () => {
    const [locations, setLocations] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [guests, setGuests] = useState(1); 

    useEffect(() => {
        fetchLocations();
    }, []);

    const fetchLocations = async () => {
        try {
            const response = await axios.get('http://localhost:4000/locations');
            setLocations(response.data); 
        } catch (error) {
            console.error('Error fetching locations:', error);
        }
    };

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    };

    const toggleDatePicker = () => {
        setShowDatePicker(!showDatePicker);
    };

    const handleGuestsChange = (e) => {
        setGuests(e.target.value);
    };

    return (
        <div className='search_bar'>
            <form action='#' method='get' id='form'>
                <div className='input_group'>
                    <div className='dropdown'>
                        <label htmlFor='search'>
                            Location
                            <ExpandMoreIcon className='dropbtn' />
                            <div className='dropdown-content'>
                            <Link to='/maldives'>  <span>Maldives</span></Link>
                            <Link to='/hongkong'>  <span>Hong Kong</span></Link>
                            <Link to='/netherlands'>  <span>Netherlands</span></Link>
                            <Link to='/newyork'>  <span>New York</span></Link>
                            
                                {locations.map(location => (
                                    <Link  key={location._id} to={`/${location.slug}`}>
                                        <span>{location.name}</span>
                                       
                                    </Link>
                                ))}
                            </div>
                        </label>
                    </div>
                </div>
                <div className='input_group'>
                    <label htmlFor='check-in'>Check In
                        <input
                            type='text'
                            id='check-in'
                            className='input'
                            placeholder='yyyy/mm/dd'
                            onFocus={toggleDatePicker} 
                        />
                        {showDatePicker && (
                            <div className="date_picker_container">
                                <DateRangePicker
                                    ranges={[selectionRange]}
                                    onChange={handleSelect}
                                />
                            </div>
                        )}
                    </label>
                </div>
                <div className='input_group'>
                    <label htmlFor='check-out'>Check Out
                        <input type='text' id='check-out' className='input' placeholder='yyyy/mm/dd' onBlur={toggleDatePicker}  />
                    </label>
                </div>
                <div className='input_group'>
                    <label htmlFor='guests'>Guests
                        <input
                            type='number'
                            id='guests'
                            className='input'
                            placeholder='Guests'
                            value={guests}
                            onChange={handleGuestsChange}
                        />
                    </label>
                </div>
                <Link to='/search'>
                    <button className='btn-primary' type='submit'>
                        <SearchIcon />
                    </button>
                </Link>
            </form>
        </div>
    );
};

export default Search;
