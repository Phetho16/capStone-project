import React from 'react';
import { Link } from 'react-router-dom';
import './Inspiration.css';

const Inspiration = () => {
  return (
    <div className='inspiration'>
      <h2 className='heading'>Inspiration for future gateways</h2>

      <ul className='tabs'>
        <li className='active'>
          <Link to='/arts-culture'>Destinations of arts & culture</Link>
        </li>
        <li>
          <Link to='/outdoor-adventure'>Destinations of Outdoor adventure</Link>
        </li>
        <li>
          <Link to='/mountain-cabins'>Mountain cabins</Link>
        </li>
        <li>
          <Link to='/beach-destinations'>Beach destinations</Link>
        </li>
        <li>
          <Link to='/popular-destinations'>Popular destinations</Link>
        </li>
        <li>
          <Link to='/unique-stays'>Unique stays</Link>
        </li>
      </ul>

      <ul className='types'>
        <li>
          <b>Phoenix</b>
          <span>Arizona</span>
        </li>
        <li>
          <b>Hot Springs</b>
          <span>Arkansas</span>
        </li>
        <li>
          <b>Los Angeles</b>
          <span>California</span>
        </li>
        <li>
          <b>San Diego</b>
          <span>California</span>
        </li>
        <li>
          <b>San Francisco</b>
          <span>California</span>
        </li>
        <li>
          <b>Barcelona</b>
          <span>Catalonia</span>
        </li>
        <li>
          <b>Prague</b>
          <span>Czechia</span>
        </li>
        <li>
          <b>Washington</b>
          <span>Colombia</span>
        </li>
        <li>
          <b>Sandton</b>
          <span>South Africa</span>
        </li>
        <li>
          <b>London</b>
          <span>England</span>
        </li>
        <li>
          <b>Scarborough</b>
          <span>England</span>
        </li>
        <li>
          <b>Show more</b>
        </li>
      </ul>
    </div>
  );
};

export default Inspiration;
