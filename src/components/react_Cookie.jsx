import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Menu from '../componentMenu';

const LocationDetails = () => {
    const [cookies, setCookie] = useCookies(['preferences']);
    const [location, setLocation] = useState(null);

    const acceptCookie = async () => {
        if (!cookies.preferences) {
            const defaultPreferences = { locationEnabled: true };
            setCookie('preferences', JSON.stringify(defaultPreferences));
        }

        if (cookies.preferences?.locationEnabled) {
            try {
                const position = await new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject);
                });
                const { latitude, longitude } = position.coords;
                console.log(position.coords);
                const address = await getAddressFromCoordinates(latitude, longitude);
                const ip = await ipAddress();
                setLocation(address, ip);
            } catch (error) {
                console.error('Error getting location:', error);
            }
        }
    };

    const ipAddress = async () => {
        try {
            const response = await fetch('https://api.ipify.org?format=json');
            const data = await response.json();
            const ipAddress = data.ip;
            console.log('Your IP address is:', ipAddress);
            return ipAddress;
        } catch (error) {
            console.error('Error fetching IP address:', error);
            return null;
        }
    };

    const getAddressFromCoordinates = async (latitude, longitude) => {
        try {
            const response = await fetch(
                `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${import.meta.env.VITE_GOOGLE_MAP_APIKEY}`
            );
            const data = await response.json();
            const place = data.results[0];
            return {
                country: place.address_components.find(c => c.types.includes('country')).long_name,
                city: place.address_components.find(c => c.types.includes('locality')).long_name,
                area: place.formatted_address
            };
        } catch (error) {
            console.error('Error fetching location details:', error);
            return null;
        }
    };


    const hide = (e) => {
        document.getElementsByClassName('cookie')[0].style.display = 'none';
    }


    return (
        <>
            <Menu />
            <div className="cookie">
                <header>
                    <img src="https://www.svgrepo.com/show/30963/cookie.svg" alt="cookie" style={{ width: '30px' }} />
                    <h2>Cookies Consent</h2>
                </header>

                <div className="data">
                    <p>This website uses cookies to help you have a superior and more relevant browsing experience on the website. <a href="#"> Read more...</a></p>
                </div>

                <div className="buttons">
                    <button className="button" id="acceptBtn" onClick={() => { acceptCookie(); }}>Accept</button>
                    <button className="button" id="declineBtn" onClick={hide} >Decline</button>
                </div>

                {location && (
                    <div className="location-details">
                        <h3>Location Details</h3>
                        <p>Country: {location.country}</p>
                        <p>City: {location.city}</p>
                        <p>Area: {location.area}</p>
                        <p>IP: {location.ipAddress}</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default LocationDetails;
