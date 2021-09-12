import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Contact.css';
import pic from '../../icons/chess.jpg';

const Contact = () => {
    return (
        <div>
            <div className="text-center c-head">
                <img src={pic} alt="" />
                <h6 className="centered"><Link to="/" className="text-dark">HOME -></Link> CONTACT US</h6>
            </div>
            <div className="container mt-5">
                <h2>CONTACT US</h2>
                <hr />
                <div className="d-flex justify-content-between text-center mt-5 mb-5">
                    <div className="cardC mb-3">
                        <i class="fas fa-home"></i>
                        <div>
                            <small>Dhaka, Bangladesh</small> <br />
                            <small>262, Mk Avenue</small>
                        </div>
                    </div>
                    <div className="cardC mb-3">
                        <i class="fas fa-headset"></i>
                        <div>
                            <small>+880123456789</small> <br />
                            <small>Mon to Fri 9am to 6 pm</small>
                        </div>
                    </div>
                    <div className="cardC mb-3">
                        <i className="far fa-envelope"></i>
                        <div>
                            <small>ifte.phoenix@gmail.com</small> <br />
                            <small>Send us your query anytime!</small>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div class="mb-3">
                            <input type="text" class="form-control" placeholder="NAME" />
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" placeholder="EMAIL" />
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control" placeholder="SUBJECT" />
                        </div>
                    </div>
                    <div class="mb-3 col-md-6">
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="DESCRIPTION"></textarea>
                        <button className="float-end mt-3 submit btn w-25">SUBMIT</button>
                    </div>
                </div>
            </div>
            <div className="container mt-5 mb-5 map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.00977793337!2d90.3492858391922!3d23.780777744454788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1630152086619!5m2!1sen!2sbd"></iframe>
            </div>
            <Footer />
        </div >
    );
};

export default Contact;