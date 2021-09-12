import React from 'react';
import './Plans.css';

const Plans = () => {
    return (
        <div>
            <h2 className="text-center">PLANS</h2>
            <div className="container text-light text-center d-flex justify-content-between">
                <div className="col-md-3 mt-5 pt-5 pb-5 price-body">
                    <h6 className="">RARE</h6>
                    <div className="pt-4 pb-4" style={{ background: "rgb(52, 43, 126)" }}>
                        <h3>$10.00</h3>
                    </div>
                    <p className="pt-3 pb-3">Basic</p>
                    <p className="pt-3 pb-3 mg">Basic</p>
                    <p className="pt-3 pb-3">Basic</p>
                    <button className="rounded-pill px-5 py-2 order">Order Now</button>
                </div>
                <div className="col-md-3 mt-5 pt-5 pb-5 price-body">
                    <h6 className="">EPIC</h6>
                    <div className="pt-4 pb-4" style={{ background: "rgb(52, 43, 126)" }}>
                        <h3>$10.00</h3>
                    </div>
                    <p className="pt-3 pb-3">Basic</p>
                    <p className="pt-3 pb-3 mg">Basic</p>
                    <p className="pt-3 pb-3">Basic</p>
                    <button className="rounded-pill px-5 py-2 order">Order Now</button>
                </div>
                <div className="col-md-3 mt-5 pt-5 pb-5 price-body">
                    <h6 className="">LEGENDARY</h6>
                    <div className="pt-4 pb-4" style={{ background: "rgb(52, 43, 126)" }}>
                        <h3>$10.00</h3>
                    </div>
                    <p className="pt-3 pb-3">Basic</p>
                    <p className="pt-3 pb-3 mg">Basic</p>
                    <p className="pt-3 pb-3">Basic</p>
                    <button className="rounded-pill px-5 py-2 order">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Plans;