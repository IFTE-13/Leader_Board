import React from 'react';
import './Leader.css';

const Process = (props) => {
    const leaders = props.people;
    return (
        <div className="col-md-4 mt-2">
            {
                (leaders.rank < 10) ?
                    <div className="d-flex align-items-center">
                        <img src={leaders.avatar} alt={leaders.rank} className="leader_img" />
                        <p>{leaders.first_name}</p>
                    </div>
                    : ""
            }
        </div>
    );
};

export default Process;