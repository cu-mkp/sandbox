import {React, Component } from "react";
import './manuscriptpage.css';


const IMG_URI = 'https://cdn.pixabay.com/photo/2020/05/26/15/42/eagle-5223559_960_720.jpg';



class ManuscriptPage extends Component {


    render() {
        return (
           <div>
                <div class="circle">
                    <img src={IMG_URI} alt="Image" /> 
                </div>
                <div>&nbsp;</div>
                <div class="circle">
                    <img src={IMG_URI} class="landscape" alt="Image" /> 
                </div>
            </div>
        );
    }
    
}


export default ManuscriptPage;