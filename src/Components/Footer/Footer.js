import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-body">
            <div className="container">
                <div className="d-flex justify-content-around row">
                    <ul className="table-data col-md-3">
                        <th>ABOUT</th>
                        <li>For Business</li>
                        <li>Premium Plans</li>
                        <li>Reviews</li>
                        <li>How It Works</li>
                        <li>Blogs</li>
                    </ul>
                    <ul className="table-data col-md-3">
                        <th>COMPANY</th>
                        <li>Product</li>
                        <li>Pricing</li>
                        <li>Members</li>
                        <li>TroubleShoots</li>
                        <li>App Update</li>
                    </ul>
                    <ul className="table-data col-md-3">
                        <th>Support</th>
                        <li>documentation</li>
                        <li>Data Security</li>
                        <li>performance</li>
                        <li>Action Plan</li>
                        <li>Resources</li>
                    </ul>
                    <ul className="table-data col-md-3">
                        <th>Legal</th>
                        <li>Terms and conditions</li>
                        <li>Privacy policy</li>
                        <li>cookie information</li>
                        <li>otp - out</li>
                    </ul>
                </div>
                <hr />
                <div className="d-flex justify-content-around mt-3 row">
                    <p className="text-light footer-font col-md-6">COPYRIGHT ©2021 ALL RIGHTS RESERVED | ONLY AUTHORIZED BY <i className="text-dark fas fa-user-secret"></i><a href="https://github.com/IFTE-13"> IFTE'13</a></p>
                    <div className="col-md-6 d-flex justify-content-center icons mb-3">
                        <i class="fab fa-google"></i>
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-behance"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-instagram"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;