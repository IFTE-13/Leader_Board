import React from 'react';
import fakePeople from '../../Data/fakePeople';
import Process from './Process';
import g1 from '../../../icons/g-1.png'


const Leaders = () => {
    return (
        <div className="container">
            <h2 className="mt-2 text-center">TOP PLAYERS</h2>
            <hr />
            <div className="mt-1">

                <div className="row d-flex justify-content-around">
                    {
                        fakePeople.map(people => <Process people={people} />)
                    }
                </div>
            </div>
            <div class="card bg-dark text-white">
                <img src={g1} class="card-img" alt="..." />
                <div class="card-img-overlay">
                    <h5 class="card-title">X-FORCE</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text">2009-NOW</p>
                </div>
            </div>
        </div>
    );
};

export default Leaders;