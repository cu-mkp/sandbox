import { React, Component } from "react";
import './manuscriptpage.css';


const IMG_URI = 'https://github.com/cu-mkp/sandbox/blob/RowanWebApp/rowanApp/pics%20for%20site/book%20pic.png?raw=true';



class ManuscriptPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            popUpNum: 0
        }
        this.popUp0 = this.popUp0.bind(this);
    }


    popUp0() {
        return(
            <div className={this.state.clicked ? "popup" : "popuphidden"} id="popupnum0">
                <button className="popUpClose" onClick={() => this.closePopUp()}>⬅</button>
                <br></br>
                <br></br>
                Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown 
                printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries, but also 
                the leap into electronic typesetting, remaining essentially 
                unchanged. It was popularised in the 1960s with the release of 
                Letraset sheets containing Lorem Ipsum passages, and more 
                recently with desktop publishing software like Aldus PageMaker 
                including versions of Lorem Ipsum.
            </div>
        );
    }

    closePopUp = () => {
        this.setState({
            clicked: false
        })
        const animationender = document.getElementById("popupnum0");
        animationender.addEventListener('animationend', () => document.getElementById('root').style.setProperty("--popupdisplay", "none"));
        console.log(animationender.onanimationend);
    }

    handleClick = (circleNum) => {
        this.setState({
            popUpNum: circleNum,
            clicked: true
        });
        //const animationender = document.getElementById("popupnum0");
        document.getElementById('root').style.setProperty("--popupdisplay", "block");
        /*animationender.style.animation = 'none';
        animationender.scrollBy(); 
        animationender.style.animation = null; */
    }


    render() {
        const mystyle1 = {
            left: "128px",
            width: "auto",
            height: "170%"
          };
        return (
        <div>
           <div className="container">
                <div class="circle" onClick={() => this.handleClick(0)}>
                        <img src={IMG_URI} alt="Image" style={mystyle1}/> 
                        <div class="centered">What is BnF Ms. Fr. 640?</div>
                </div>
            </div>
            <div>{this.popUp0()}</div>
        </div>
        );
    }
    
}


export default ManuscriptPage;