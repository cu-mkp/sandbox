import { React, Component } from 'react';
import { Link } from "react-router-dom"
import './App.css';
import { ParallaxBanner } from 'react-scroll-parallax';



class FrontPage extends Component {

    render() {
        return (
            <div id="root">
                <div id="container">
                    <ParallaxBanner 
                    className="parallax_banner" 
                    layers={[{image: "https://github.com/cu-mkp/sandbox/blob/RowanWebApp/rowanApp/pics%20for%20site/website%20backdrop.png?raw=true", amount: 0.3}, {children:(<h1 className="header"><Link className="header" to="/manuscript">Why This Manuscript?</Link></h1>), amount: 0}]} 
                    style={{width: '100%', height: '350px'}}>
                    </ParallaxBanner>
                    <ParallaxBanner className="parallax_banner" layers={[{image: "https://github.com/cu-mkp/sandbox/blob/RowanWebApp/rowanApp/pics%20for%20site/website%20backdrop.png?raw=true", amount: 0.3}]} style={{width: '100%', height: '350px'}}></ParallaxBanner>
                    <ParallaxBanner className="parallax_banner" layers={[{image: "https://github.com/cu-mkp/sandbox/blob/RowanWebApp/rowanApp/pics%20for%20site/website%20backdrop.png?raw=true", amount: 0.3}]} style={{width: '100%', height: '350px'}}></ParallaxBanner>
                </div>     
            </div>
        );
    }

}

export default FrontPage;