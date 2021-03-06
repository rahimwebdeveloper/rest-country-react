import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountrise] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountrise(data))
    },[])
    return (
        <div >
            <h2>The Countries Deatils Of any country</h2>
           <div className='countries-container'>
           {
               countries.map(country => <Country
                 country={country}
                 key={country.cca3}
                 ></Country> )
           }
           </div>
        </div>
    );
};
export default Countries;