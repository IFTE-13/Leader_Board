import React from 'react';
import Blog from '../Blogs/Blog';
import FAQ from '../FAQ/FAQ';
import Footer from '../Footer/Footer';
import Plans from '../Plans/Plans';
import Subscribe from '../Subscribe/Subscribe';
import Games from './Games/Games';
import Leaders from './Leaders/Leaders';

const Home = () => {
    return (
        <div>
            <Leaders />
            <Plans />
            <FAQ />
            <Blog />
            <Subscribe />
            <Footer />
        </div>
    );
};

export default Home;