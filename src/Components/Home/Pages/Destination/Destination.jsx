import React, { useState } from 'react';
import './Destination.css';

function Destination() {
    const [selectedDestination, setSelectedDestination] = useState('Cinnamon Life');

    const handleSelectChange = (event) => {
        setSelectedDestination(event.target.value);
    };

    const handleDiscoverMore = () => {
        let destinationURL = '';
        switch (selectedDestination) {
            case 'Cinnamon Life':
                destinationURL = 'https://www.cinnamonhotels.com/cinnamonlife/';

                break;
            case 'Cinnamon Grand Colombo':
                destinationURL = 'https://www.cinnamonhotels.com/cinnamongrandcolombo';
                break;
            case 'Cinnamon Lakeside Colombo':
                destinationURL = 'https://www.cinnamonhotels.com/cinnamonlakesidecolombo/';
                break;
            case 'Cinnamon Red Colombo':
                destinationURL = 'https://www.cinnamonhotels.com/cinnamonredcolombo/';
                break;
            default:
                destinationURL = 'https://www.shangri-la.com/colombo/shangrila/about/';
        }
        window.open(destinationURL);
    };

    return (
        <div id='destination' className="destination-container">
            <div>
                <h1>Our Destinations</h1>
                <div className="select-container">
                    <select className="select-box" value={selectedDestination} onChange={handleSelectChange}>
                        <option value="Cinnamon Life">Cinnamon Life</option>
                        <option value="Cinnamon Grand Colombo">Cinnamon Grand Colombo</option>
                        <option value="Cinnamon Lakeside Colombo">Cinnamon Lakeside Colombo</option>
                        <option value="Cinnamon Red Colombo">Cinnamon Red Colombo</option>
                    </select>
                </div>
            </div>
            <div className="image-container">
                {selectedDestination === 'Cinnamon Life' && (
                    <img src="https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/misc/cinnamon-life-home-715x550.jpg" alt="" />
                )}
                {selectedDestination === 'Cinnamon Grand Colombo' && (
                    <img src="https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/media/cinnamon-grand-colombo-destination-714x550-DM-Q80.jpeg" alt="" />
                )}
                {selectedDestination === 'Cinnamon Lakeside Colombo' && (
                    <img src="https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/hotel_resorts/DEST-cinnaon_lakeside.jpg" alt="" />
                )}
                {selectedDestination === 'Cinnamon Red Colombo' && (
                    <img src="https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/hotel_resorts/cinnamon-red-colombo-destination-714x550-DM.jpg" alt="" />
                )}

                <div className="destination-info">
                    <div className="info-content">
                        <h5>{selectedDestination}</h5>
                        {selectedDestination === 'Cinnamon Life' && (
                            <p>Take a peak at the first-ever Integrated Resort in Sri Lanka. Envisoned to be the epicentre of modern South Asia, it is an urban sanctuary which includes a 5-Star hotel, residential units, office spaces and a wide range of shopping and entertainment options.</p>
                        )}
                        {selectedDestination === 'Cinnamon Grand Colombo' && (
                            <p>Our 5-star hotel in the heart of Colombo offers timeless elegance and grandeur. The perfect place to relish global cuisines after a business conference or a memorable rendezvous!
                            </p>
                        )}
                        {selectedDestination === 'Cinnamon Lakeside Colombo' && (
                            <p>Spend time with those who matter by a calm, rippling lake at Cinnamon Lakeside, the plush oasis of peace and warmth, right in the middle of Colombo.
                            </p>
                        )}
                        {selectedDestination === 'Cinnamon Red Colombo' && (
                            <p>South Asia's first ever lean luxury hotel situated right at the heart of Colombo. The vibrant rooftop bar and serene infinity pool overlooking the Colombo Skyline provides every sense of relaxation and rejuvenation for the adventurous traveller!
                            </p>
                        )}

                    </div>
                    <button className="learn-more-btn" onClick={handleDiscoverMore}>Discover More</button>
                </div>
            </div>
        </div>
    )
}

export default Destination;
