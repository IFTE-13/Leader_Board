import React from 'react';
import fakePeople from '../Data/fakePeople';

const People = () => {
    return (
        <div className="table-responsive container-fluid" style={{}}>
            <table class="table w-100 table-dark" style={{ overflowX: "auto" }}>
                <thead>
                    <tr>
                        <th></th>
                        <th>RANK</th>
                        <th>ID</th>
                        <th>First_Name</th>
                        <th>Last_Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Avatar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        fakePeople.map(people => (
                            <tr>
                                <th></th>
                                {
                                    people.rank === 1 ? <th className="text-warning">{people.rank}</th> :
                                        people.rank === 2 ? <th className="text-success">{people.rank}</th> :
                                            people.rank === 3 ? <th className="text-info">{people.rank}</th>
                                                : <th>{people.rank}</th>
                                }
                                <th>{people.id}</th>
                                <th>{people.first_name}</th>
                                <th>{people.last_name}</th>
                                <th>{people.email}</th>
                                <th>{people.gender}</th>
                                <th><img src={people.avatar} alt="" /></th>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default People;