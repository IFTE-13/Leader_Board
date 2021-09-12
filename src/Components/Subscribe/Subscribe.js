import React from 'react';
import './Subscribe.css';

const Subscribe = () => {
    return (
        <div className="sub-body d-flex align-items-center justify-content-center">
            <div className="row container d-flex align-items-center justify-content-center">
                <div className="col-md-6">
                    <h3 className="sub-text">SUBSCRIBE FOR UPDATE</h3>
                    <p className="text-muted">We won’t send any kind of spam</p>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control rounded-pill" placeholder="EMAIL" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div class="input-group-append">
                            <button class="btn btn-outline-info rounded-pill" type="button">SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;