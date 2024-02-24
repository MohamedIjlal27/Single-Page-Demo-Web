import React, { useState } from 'react';
import './Experience.css';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Experience() {
    const [show, setShow] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handlePop = (imageSrc) => {
        setSelectedImage(imageSrc);
        handleShow();
    };

    const renderModalTitle = () => {
        if (selectedImage === "https://www.hilton.com/im/en/PJMCRQQ/19298977/botanika-patio.jpg?impolicy=crop&cw=4498&ch=2530&gravity=NorthWest&xposition=0&yposition=234&rw=2048&rh=1154") {
            return "Embrace Mindfulness in Costa Rica";
        } else if (selectedImage === "https://www.hilton.com/im/en/NoHotel/19926911/ski-lift.png?impolicy=crop&cw=4032&ch=2268&gravity=NorthWest&xposition=0&yposition=378&rw=2048&rh=1154") {
            return "Retreat to Lake Tahoe for Cozy Stays";
        } else if (selectedImage === "https://www.hilton.com/im/en/CZMPCHH/19913865/czmpc-jardin-secreto-by-barefoot-04.jpg?impolicy=crop&cw=5000&ch=2812&gravity=NorthWest&xposition=0&yposition=2343&rw=2048&rh=1154") {
            return "Find Relaxation in Playa del Carmen";
        } else if (selectedImage === "https://www.hilton.com/im/en/NoHotel/19738849/family-suite-3284-v1-lux-sbv3.tif?impolicy=crop&cw=5000&ch=2812&gravity=NorthWest&xposition=0&yposition=260&rw=2048&rh=1154") {
            return "Wellness Adventures Await";
        } else {
            return "";
        }
    };

    const renderModalContent = () => {
        if (!selectedImage) return null;

        return (
            <div>
                <img src={selectedImage} alt="Selected" style={{ maxWidth: '100%' }} />
                {selectedImage === "https://www.hilton.com/im/en/PJMCRQQ/19298977/botanika-patio.jpg?impolicy=crop&cw=4498&ch=2530&gravity=NorthWest&xposition=0&yposition=234&rw=2048&rh=1154" ?
                    <div>
                        <p>🛎️ Stay: Immerse yourself in the Costa Rican "Pura Vida" lifestyle at Botanika Osa Peninsula, Curio Collection by Hilton. Prioritize relaxation by enjoying outdoor pools, a wellness spa, and nearby beaches.</p>
                        <p>🔎 See: Discover the wonders of Costa Rica, from the calming Arenal Volcano to the meditative Monteverde Cloud Forest and the soul-soothing beaches of Manuel Antonio National Park, providing a backdrop for connection with nature.</p>
                        <p>🍴 Do: Engage in wellness-focused activities, such as mindful walks in the rainforest, yoga sessions overlooking breathtaking landscapes, and guided meditations. Balance adventure with self-care, whether it's a gentle hike to a hidden waterfall or a peaceful snorkeling experience in crystal-clear waters.</p>
                        <p>🧳 Bring: Pack the essentials including comfortable activewear, a journal for reflection, and eco-friendly sunscreen for outdoor excursions. Don't forget an open heart and a sense of wonder to embrace Costa Rica's warmth and natural beauty.</p>
                    </div> :
                    selectedImage === "https://www.hilton.com/im/en/NoHotel/19926911/ski-lift.png?impolicy=crop&cw=4032&ch=2268&gravity=NorthWest&xposition=0&yposition=378&rw=2048&rh=1154" ?
                        <div>
                            <p>🛎️ Stay: Retreat to the serene beauty of Lake Tahoe, where snow-capped mountains and pristine alpine lakes create a picturesque winter wonderland. Choose from more than 50 hotels ready to welcome you for a memorable stay.</p>
                            <p>🔎 See: Marvel at the snow-covered landscapes surrounding Lake Tahoe, with opportunities for skiing, snowshoeing, and winter hikes. Take a scenic drive along the lake, framed by glistening snow and towering pine trees, for a truly enchanting experience.</p>
                            <p>🍴 Do: Embrace wellness by skiing or snowboarding on world-class slopes during the day, and unwind with yoga or hot tub sessions in the evening. Explore the quiet trails around the lake, breathing in the crisp mountain air, and finding solace in the peaceful winter surroundings.</p>
                            <p>🧳 Bring: Pack warm layers for chilly temperatures, including waterproof boots for snowy walks and outdoor activities. Don't forget your swimsuit for relaxing in hot tubs or heated pools. Bring a good book to read during tranquil moments.</p>
                        </div> :
                        selectedImage === "https://www.hilton.com/im/en/CZMPCHH/19913865/czmpc-jardin-secreto-by-barefoot-04.jpg?impolicy=crop&cw=5000&ch=2812&gravity=NorthWest&xposition=0&yposition=2343&rw=2048&rh=1154" ?
                            <div>
                                <p>🛎️ Stay: Escape to Playa del Carmen, where wellness takes center stage. Stay at Hilton Playa del Carmen, an All-Inclusive Adult Only Resort to experience an all-inclusive, seaside stay filled with pool side relaxation or nightlife adventure on Fifth Avenue.</p>
                                <p>🔎 See: Take in the beauty of the Caribbean Sea as you stroll along the pristine Playa del Carmen beaches, allowing the waves to inspire a sense of calm. Explore the vibrant underwater world with snorkeling adventures in the crystal-clear cenotes or take a mindful walk through lush botanical gardens.</p>
                                <p>🍴 Do: Prioritize your well-being with rejuvenating spa treatments, morning yoga sessions, and daily activities that recalibrate your energy. Engage in water activities or embark on a bike ride along the scenic coastline to blend fitness with the natural beauty that surrounds you.</p>
                                <p>🧳 Bring: Pack for a wellness-focused stay, including comfortable fitness attire, a reusable water bottle, and organic sunscreen for your outdoor activities. Embrace the opportunity to nourish your body and soul in this idyllic coastal retreat.</p>
                            </div> :
                            selectedImage === "https://www.hilton.com/im/en/NoHotel/19738849/family-suite-3284-v1-lux-sbv3.tif?impolicy=crop&cw=5000&ch=2812&gravity=NorthWest&xposition=0&yposition=260&rw=2048&rh=1154" ?
                                <div>
                                    <p>Looking for even more wellness inspiration? With more than 7,200 properties worldwide, your next stay is just around the corner. Whether you plan to explore somewhere new or visit a familiar favorite, let us help guide you to your next memorable stay.</p>
                                </div> :
                                null}
            </div>
        );
    };

    const renderModalFooterButton = () => {
        if (!selectedImage) return null;

        if (selectedImage === "https://www.hilton.com/im/en/PJMCRQQ/19298977/botanika-patio.jpg?impolicy=crop&cw=4498&ch=2530&gravity=NorthWest&xposition=0&yposition=234&rw=2048&rh=1154") {
            return "Plan your Stay in Costa Rica";
        } else if (selectedImage === "https://www.hilton.com/im/en/NoHotel/19926911/ski-lift.png?impolicy=crop&cw=4032&ch=2268&gravity=NorthWest&xposition=0&yposition=378&rw=2048&rh=1154") {
            return "Plan your Stay in Lake Tahoe";
        } else if (selectedImage === "https://www.hilton.com/im/en/CZMPCHH/19913865/czmpc-jardin-secreto-by-barefoot-04.jpg?impolicy=crop&cw=5000&ch=2812&gravity=NorthWest&xposition=0&yposition=2343&rw=2048&rh=1154") {
            return "Plan your Stay in Playa del Carmen";
        } else if (selectedImage === "https://www.hilton.com/im/en/NoHotel/19738849/family-suite-3284-v1-lux-sbv3.tif?impolicy=crop&cw=5000&ch=2812&gravity=NorthWest&xposition=0&yposition=260&rw=2048&rh=1154") {
            return "Plan Your Next Stay";
        } else {
            return "";
        }
    };

    const handleDiscoverMore = () => {
        let destinationURL = '';
        switch (selectedImage) {
            case 'https://www.hilton.com/im/en/PJMCRQQ/19298977/botanika-patio.jpg?impolicy=crop&cw=4498&ch=2530&gravity=NorthWest&xposition=0&yposition=234&rw=2048&rh=1154':
                destinationURL = 'https://www.hilton.com/en/locations/costa-rica/?cid=OH,WW,StayInspirationCostaRica,MULTIPR,fourxgrid,Home,Brand';
                break;

            case 'https://www.hilton.com/im/en/NoHotel/19926911/ski-lift.png?impolicy=crop&cw=4032&ch=2268&gravity=NorthWest&xposition=0&yposition=378&rw=2048&rh=1154':
                destinationURL = 'https://www.hilton.com/en/locations/usa/california/south-lake-tahoe/?cid=OH,WW,StayInspirationLakeTahoe,MULTIPR,fourxgrid,Home,Brand';
                break;

            case 'https://www.hilton.com/im/en/CZMPCHH/19913865/czmpc-jardin-secreto-by-barefoot-04.jpg?impolicy=crop&cw=5000&ch=2812&gravity=NorthWest&xposition=0&yposition=2343&rw=2048&rh=1154':
                destinationURL = 'https://www.hilton.com/en/locations/mexico/playa-del-carmen/?cid=OH,WW,StayInspirationPlayaDelCarmen,MULTIPR,fourxgrid,Home,Brand';
                break;
            case 'https://www.hilton.com/im/en/NoHotel/19738849/family-suite-3284-v1-lux-sbv3.tif?impolicy=crop&cw=5000&ch=2812&gravity=NorthWest&xposition=0&yposition=260&rw=2048&rh=1154':
                destinationURL = 'https://www.hilton.com/en/locations/?cid=OH,WW,StayInspirationLocations,MULTIPR,fourxgrid,Home,Brand';
                break;
            default:
                destinationURL = '';
        }
        window.open(destinationURL);
    };

    return (
        <div id='experience'>
            <div className='heading'>
                <h1>Embark on a journey to wellness</h1>
                <h5>Indulge in a tranquil stay and rejuvenate your mind, body, and soul.</h5>
            </div>
            <div className='image-container'>
                <div className='grid-item' onClick={() => handlePop("https://www.hilton.com/im/en/PJMCRQQ/19298977/botanika-patio.jpg?impolicy=crop&cw=4498&ch=2530&gravity=NorthWest&xposition=0&yposition=234&rw=2048&rh=1154")}>
                    <div className="image-with-heading">
                        <img src="https://www.hilton.com/im/en/PJMCRQQ/19298977/botanika-patio.jpg?impolicy=crop&cw=4498&ch=2530&gravity=NorthWest&xposition=0&yposition=234&rw=2048&rh=1154" alt="" />
                        <div className="image-heading">
                            <h6>Embrace Mindfulness in Costa Rica</h6>
                        </div>
                    </div>
                </div>
                <div className='grid-item' onClick={() => handlePop("https://www.hilton.com/im/en/NoHotel/19926911/ski-lift.png?impolicy=crop&cw=4032&ch=2268&gravity=NorthWest&xposition=0&yposition=378&rw=2048&rh=1154")}>
                    <div className="image-with-heading">
                        <img src="https://www.hilton.com/im/en/NoHotel/19926911/ski-lift.png?impolicy=crop&cw=4032&ch=2268&gravity=NorthWest&xposition=0&yposition=378&rw=2048&rh=1154" alt="" />
                        <div className="image-heading">
                            <h6>Retreat to Lake Tahoe for Cozy Stays</h6>
                        </div>
                    </div>
                </div>
                <div className='grid-item' onClick={() => handlePop("https://www.hilton.com/im/en/CZMPCHH/19913865/czmpc-jardin-secreto-by-barefoot-04.jpg?impolicy=crop&cw=5000&ch=2812&gravity=NorthWest&xposition=0&yposition=2343&rw=2048&rh=1154")}>
                    <div className="image-with-heading">
                        <img src="https://www.hilton.com/im/en/CZMPCHH/19913865/czmpc-jardin-secreto-by-barefoot-04.jpg?impolicy=crop&cw=5000&ch=2812&gravity=NorthWest&xposition=0&yposition=2343&rw=2048&rh=1154" alt="" />
                        <div className="image-heading">
                            <h6>Find Relaxation in Playa del Carmen</h6>
                        </div>
                    </div>
                </div>
                <div className='grid-item' onClick={() => handlePop("https://www.hilton.com/im/en/NoHotel/19738849/family-suite-3284-v1-lux-sbv3.tif?impolicy=crop&cw=5000&ch=2812&gravity=NorthWest&xposition=0&yposition=260&rw=2048&rh=1154")}>
                    <div className="image-with-heading">
                        <img src="https://www.hilton.com/im/en/NoHotel/19738849/family-suite-3284-v1-lux-sbv3.tif?impolicy=crop&cw=5000&ch=2812&gravity=NorthWest&xposition=0&yposition=260&rw=2048&rh=1154" alt="" />
                        <div className="image-heading">
                            <h6>Wellness Adventures Await</h6>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} centered className="custom-modal">
                <Modal.Header closeButton>
                    <Modal.Title>{renderModalTitle()}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {renderModalContent()}
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={handleDiscoverMore}>
                        {renderModalFooterButton()}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Experience;
