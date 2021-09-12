import React from 'react';
import FAQ from '../FAQ/FAQ';
import Subscribe from '../Subscribe/Subscribe';
import C1 from '../../icons/c-1.jpg';
import './About.css';
import dart from '../../icons/dart.png';
import Footer from '../Footer/Footer';

const About = () => {
    return (
        <div>
            <div>
                <div id="carouselExampleDark" class="carousel carousel-light slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <img src={C1} class="d-block carousel-img" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h4>BATTLEFIELD IV</h4>
                                <p>500M+</p>
                                <div className="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum distinctio minus velit tenetur quasi doloribus laborum sint dolores nobis consectetur?</p>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="1500">
                            <img src={C1} class="d-block carousel-img" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h4>CALL OF DUTY BLACK OPS</h4>
                                <p>800M+</p>
                                <div className="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum distinctio minus velit tenetur quasi doloribus laborum sint dolores nobis consectetur?</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={C1} class="d-block carousel-img" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h4>PUBG</h4>
                                <p>1B+</p>
                                <div className="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum distinctio minus velit tenetur quasi doloribus laborum sint dolores nobis consectetur?</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <FAQ />
            <div className="d-flex justify-content-center">
                <img src={dart} alt="" />
            </div>
            <Subscribe />
            <Footer />
        </div>
    );
};

export default About;