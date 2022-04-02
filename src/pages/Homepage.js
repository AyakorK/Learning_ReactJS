import React from 'react';
import Nav from '../components/Nav';
import Background from '../components/Background';

const Homepage = () => {
    return (
        <div className="homepage">
            <Nav />
            <Background />
            <div className="title">
                <h1>Hello !</h1>
                <h2>I'm Guillaume MORET</h2>
                <h3>Aka. Ayakor</h3>
                <h3>I'm a french young developer</h3>
            </div>
        </div>
        
    );
};

export default Homepage;