import React from 'react';
import gData from '../../Data/fakeGame';
import GProcess from './GProcess';

const Games = () => {
    return (
        <div className="container mt-3">
            <h2 className="text-center">ACTIVE GAMES</h2> <hr />
            <div className="row">
                {
                    gData.map(game => (<GProcess game={game} />))
                }
            </div>
        </div>
    );
};

export default Games;