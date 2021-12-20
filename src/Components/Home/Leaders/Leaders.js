import React from 'react';
import g1 from '../../../icons/g-1.png'


const Leaders = () => {
    return (
        <div className="container mb-5">
            <h2 className="mt-2 text-center">TOP GAME OF THE WEEK</h2>
            <hr/>
            <div class="card bg-dark text-white">
                <img src={g1} class="card-img" alt="..." />
                <div class="card-img-overlay">
                    <h5 class="card-title">X-FORCE</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text">2009-NOW</p>
                </div>
            </div>
            <hr/>
        </div>
    );
};

export default Leaders;