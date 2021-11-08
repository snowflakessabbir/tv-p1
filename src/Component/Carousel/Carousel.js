import React from 'react';
import { Link } from 'react-router-dom';

const Carousel = () => {

    const img1 = "https://i.ibb.co/bmz15vJ/asdf.png";
    const img2 = "https://i.ibb.co/9pNMf7f/dfsd2.png";
    const img3 = "https://i.ibb.co/jyTKq4m/ASDASD2.png";

    return (
        <div className="container rounded my-4">
            
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={img1} className="d-block w-100 rounded" alt="..." />
                    <div className="carousel-caption d-none d-md-block mb-5">
                        <h5>Find Your best Products</h5>
                        <Link to="#"><button className="btn btn-primary">Browse Now</button></Link>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={img2} className="d-block w-100 rounded" alt="..." />
                    <div className="carousel-caption d-none d-md-block mb-5">
                        <h5>Find Your best Products</h5>
                        <Link to="#"><button className="btn btn-primary">Browse Now</button></Link>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={img3} className="d-block w-100 rounded" alt="..." />
                    <div className="carousel-caption d-none d-md-block mb-5">
                        <h5>Find Your best Products</h5>
                        <Link to="#"><button className="btn btn-primary">Browse Now</button></Link>
                    </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    );
};

export default Carousel;