import { React, Component } from 'react';
import { Link } from "react-router-dom"
import './App.css';
import { Parallax } from 'react-scroll-parallax';




const ParallaxImage = () => (
    <Parallax className="parallax_image" y="50%" >
        <img src="https://cdn.pixabay.com/photo/2017/08/27/03/24/backround-2685094_1280.jpg" />
    </Parallax>
);

const ParallaxImage2 = () => (
    <Parallax className="parallax_image2" y={[-70, 70]}  tagOuter="figure">
        <img src="https://images.unsplash.com/photo-1554034483-04fda0d3507b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFja3JvdW5kJTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
    </Parallax>
);


class FrontPage extends Component {

    render() {
        return (
            <div id="root">
                <div id="container">
                    <ParallaxImage/>
                    <ParallaxImage2/>
                    <ParallaxImage/>
                    <ParallaxImage/>
                    <ParallaxImage/>
                </div>            
            </div>
        );
    }

}

export default FrontPage;