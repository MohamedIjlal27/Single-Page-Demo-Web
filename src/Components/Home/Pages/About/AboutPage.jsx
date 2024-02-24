import React from 'react';
import './AboutPage.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AboutPage() {
    const handleDiscoverMore = () => {
        let destinationURL = 'https://www.shangri-la.com/colombo/shangrila/about/';

        window.open(destinationURL);
    };
    return (
        <div id="about" className="about-container">
            <Row>
                <Col>
                    <div className="text-content">
                        <h1 className='header'>About</h1>
                        <p className='para'>A personal tropical sanctuary that is perfect for escaping the city, Shangri-La Colombo overlooks the Indian Ocean in the heart of the business district with direct access to the most extensive international shopping mall in Sri Lanka, Shangri-La’s own One Galle Face Mall. The hotel offers the finest accommodation in Colombo, an exciting new dining and social scene and the largest and extensive hotel conference and event facilities.</p>

                        <ul className="feature-list">
                            <li>541 rooms, suites and apartments</li>
                            <li>Signature dining venues with an exciting array of seasonal events</li>
                            <li>The city's most extensive and versatile event spaces</li>
                        </ul>
                    </div>
                    <button className="learnbtn" onClick={handleDiscoverMore}>Learn More</button>
                </Col>
                <Col>
                    <img src="https://sitecore-cd-imgr.shangri-la.com/MediaFiles/8/8/C/%7B88CB0620-D822-44DA-B5DB-85B84F9246D4%7DProposed-SLCB.jpg?w=600&h=500&mode=crop&scale=both" alt="" />
                </Col>
            </Row>
        </div>
    );
}

export default AboutPage;



