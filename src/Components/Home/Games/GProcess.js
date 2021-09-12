import React from 'react';
import './gstyle.css';
import g1 from '../../../icons/g-1.png'
import Modal from '../../Modal';

const GProcess = (props) => {
    const { g_name, active, downloads, desc, rating } = props.game;
    return (
        <div className="col-md-4 mb-5">
            <div className="row d-flex justify-content-between justify-content-md-between justify-content-sm-center">
                <div className="curd m-5">
                    <img src={g1} alt="" />
                    <div className="info">
                        <h4 className="pb-2">{g_name}</h4>
                        <div>
                            <div className="d-flex justify-content-between">
                                <small>ACTIVE: {active}</small>
                                <i class="fab fa-creative-commons-sampling"></i>
                            </div><br />
                            <div className="d-flex justify-content-between">
                                <small>RATINGS: {rating}</small>
                                <i class="fab fa-creative-commons-sampling"></i>
                            </div>
                        </div>

                        <button className="btn mt-3"><Modal name={g_name} dec={desc} d={downloads} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GProcess;