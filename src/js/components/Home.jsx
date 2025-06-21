import React from "react";

import Navbar from './Navbar.jsx';
import Jumbotron from './Jumbotron.jsx';
import Card from './Card.jsx';
import Footer from './Footer.jsx';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Jumbotron />
                <div className="row text-center">
                    <Card 
                        imageUrl="https://picsum.photos/id/10/500/325" 
                        title="My First React Project" 
                        description="Here's how I created my first page using React components. What a great learning experience!" 
                        buttonText="Find out more" 
                    />
                    <Card 
                        imageUrl="https://picsum.photos/id/20/500/325" 
                        title="Adventures with JavaScript" 
                        description="A look at my challenges and solutions with pure JavaScript before React. Pure logic!" 
                        buttonText="Find out more" 
                    />
                    <Card 
                        imageUrl="https://picsum.photos/id/30/500/325" 
                        title="Designs with Modern CSS" 
                        description="Exploring modern CSS styles for beautiful, responsive interfaces. Design is key!"
                        buttonText="Find out more" 
                    />
                    <Card 
                        imageUrl="https://picsum.photos/id/40/500/325" 
                        title="Future Steps in Development" 
                        description="My plans to continue growing in the world of web development. Always learning and improving!" 
                        buttonText="Find out more" 
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home; 