import React from 'react';
import './Offers.css';

function Offers() {

    return (
        <div id='offers'>
            <div>
                <h1>Offers</h1>
            </div>
            <div className="offers-container">
                <div className="card">
                    <img src="https://sitecore-cd-imgr.shangri-la.com/MediaFiles/F/F/B/%7BFFB818E7-56E7-49A9-A45F-54AC6C108241%7D[SL]%20SLC-Member-Rate_1920x940.png?w=360&h=175&mode=crop&scale=both" alt="" />
                    <div className="card-content">
                        <h6>Rooms & Suites</h6>
                        <p>17 Jan 2024 - 30 Jun 2024</p>
                        <p style={{ fontWeight: 900 }}>
                            <b>Make yourself at home, in the heart of the city</b>
                        </p>
                        <p>
                            Indulge in family time with 5-star service, dining credit and plenty of fun for the kids.
                        </p>
                        <p>
                            From <b>LKR 122,054</b> Average Per Night
                        </p>
                        <a href='https://www.shangri-la.com/en/colombo/shangrila/offer-detail/rooms-suites/apartment-family-staycation-2024/?cid=SLCB_OFFERS_MIDDLE_BANNER_TACTICAL-HOTEL_ROOMSSUITES-SLCB_EN-NA-ApartmentFamilyStaycation2024'>View Details</a>
                    </div>
                </div>
                <div className="card">
                    <img src="https://sitecore-cd-imgr.shangri-la.com/MediaFiles/A/B/7/%7BAB773075-02D2-4ADE-AB97-FEF7EE17932F%7D1a.-Serviced-Apartment,-one-bedroom---living-area.jpg?w=360&h=175&mode=crop&scale=both" alt="" />
                    <div className="card-content">
                        <h6>Rooms & Suites</h6>
                        <p>12 Dec 2023 - 30 Jun 2024</p>
                        <p style={{ fontWeight: 900 }}>
                            <b>5-Star Serviced Apartment Staycation</b>
                        </p>
                        <p>
                            Enjoy all the comforts of 5-Star service and exclusive access to Horizon Club Lounge.
                        </p>
                        <p>
                            From <b>LKR 118,925</b> Average Per Night
                        </p>
                        <a href='https://www.shangri-la.com/en/colombo/shangrila/offer-detail/rooms-suites/5star-serviced-apartment-staycation-2023/?cid=SLCB_OFFERS_MIDDLE_BANNER_TACTICAL-HOTEL_ROOMSSUITES-SLCB_EN-NA-5starServicedApartmentStaycation2023'>View Details</a>
                    </div>
                </div>
                <div className="card">
                    <img src="https://sitecore-cd-imgr.shangri-la.com/MediaFiles/3/2/9/%7B32926B10-8EE8-4639-B2DD-AC55F70CB76D%7Dslcwithbreakfast.jpg?w=360&h=175&mode=crop&scale=both" alt="" />
                    <div className="card-content">
                        <h6>Rooms & Suites</h6>
                        <p>16 Oct 2023 - 30 Jun 2024</p>
                        <p style={{ fontWeight: 900 }}>
                            <b>Shangri–La Circle Exclusive Member Rate with Breakfast</b>
                        </p>
                        <p>
                            Exclusive Member Rate with Breakfast for Shangri-La Circle member.
                        </p>
                        <p>
                            From <b>LKR 56,333</b> Average Per Night
                        </p>
                        <a href='https://www.shangri-la.com/en/colombo/shangrila/offer-detail/rooms-suites/apartment-family-staycation-2024/?cid=SLCB_OFFERS_MIDDLE_BANNER_TACTICAL-HOTEL_ROOMSSUITES-SLCB_EN-NA-ApartmentFamilyStaycation2024'>View Details</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Offers;