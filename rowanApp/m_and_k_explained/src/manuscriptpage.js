import { React, Component } from "react";
import './manuscriptpage.css';

const IMG_URI_1 = 'https://github.com/cu-mkp/sandbox/blob/RowanWebApp/rowanApp/pics%20for%20site/book%20pic.png?raw=true';



class ManuscriptPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            popUpNum: 0
        }
        this.popUp = this.popUp.bind(this);
    }


    popUp() {
        let str = <p></p>;
        switch(this.state.popUpNum)
        {
            case 0:
                str = <p>
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
                </p>
                break;
            case 1:
        }
        return(
            <div className={this.state.clicked ? "popup" : "popuphidden"} id="popupnum0">
                <button className="popUpClose" onClick={() => this.closePopUp()}>⬅</button>
                <h2 className="popupheader">What is Ms. Fr. 640?</h2>
                <br></br>
                <br></br>
                <div className="popupcontent">{str}</div>
                <div className="popupcontent">{str}</div>
            </div>
        );
    }

    closePopUp = () => {
        const animationender = document.getElementById("popupnum0");
        animationender.addEventListener('animationend', this.tempfunc);
        this.setState({
            clicked: false,
            listener: true
        })
    }

    tempfunc = () => {
        document.getElementById('root').style.setProperty("--popupdisplay", "none")
        console.log('changing css var')
    }


    handleClick = (circleNum) => {
        document.getElementById('root').style.setProperty("--popupdisplay", "block");
        const animationender = document.getElementById("popupnum0");
        animationender.removeEventListener('animationend', this.tempfunc);
        this.setState({
            popUpNum: circleNum,
            clicked: true
        });
    }


    render() {
        const mystyle1 = {
            left: "128px",
            width: "auto",
            height: "170%"
          };
        return (
        <div className="backgrounds">
           <div className="container">
                <div class="circle" onClick={() => this.handleClick(0)}>
                        <img src={IMG_URI_1} alt="Image" style={mystyle1}/> 
                        <div class="centered">What is BnF Ms. Fr. 640?</div>
                </div>
            </div>
            <div>{this.popUp()}</div>
        </div>
        );
    }
    
}


export default ManuscriptPage;