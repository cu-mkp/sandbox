import { React, Component } from 'react';
import { Link } from "react-router-dom"
import './App.css';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';




const ParallaxB = () => (
    <ParallaxBanner className="parallax_banner" layers={[{image: "https://cdn.pixabay.com/photo/2017/08/27/03/24/backround-2685094_1280.jpg", amount: 0.3}]}></ParallaxBanner>
);


class FrontPage extends Component {

    render() {
        return (
            <div id="root">
                <div id="container">
                    <ParallaxB/>
                    <ParallaxB/>
                    <ParallaxB/>
                    <ParallaxB/>
                </div>            
            </div>
        );
    }

}

export default FrontPage;