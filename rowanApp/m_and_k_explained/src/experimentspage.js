import { React, Component } from "react";
import { Link } from "react-router-dom";
import './experimentspage.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Container } from "react-bootstrap";

const IMG_URI_1 = 'https://github.com/cu-mkp/sandbox/blob/RowanWebApp/rowanApp/pics%20for%20site/book%20pic.png?raw=true';
const IMG_URI_2 = 'https://edition640.makingandknowing.org/bnf-ms-fr-640/prod042721-0/images/ann_328_ie_19/1zRsS9xo_frc4YD9iB4yPUKuby4Brvddw.jpg';


class ExperimentsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            popUpNum: 0
        }
        this.popUp = this.popUp.bind(this);
    }


    popUp() {
        let display, display2 = <p style={{display: "none"}}></p>;
        let str = "Lorem Ipsum is simply dummy text of the printing and" + 
        "typesetting industry. Lorem Ipsum has been the industry's "  +
        "standard dummy text ever since the 1500s, when an unknown " +
        "printer took a galley of type and scrambled it to make a type " + 
        "specimen book. It has survived not only five centuries, but also " + 
        "the leap into electronic typesetting, remaining essentially " + 
        "unchanged. It was popularised in the 1960s with the release of " +
        "Letraset sheets containing Lorem Ipsum passages, and more " +
        "recently with desktop publishing software like Aldus PageMaker " +
        "including versions of Lorem Ipsum."
        switch(this.state.popUpNum)
        {
            //format text (bold, italic, links) to show full range of site
            default:
            case 0:
                display = <div className="popupcontent">{str}{" "}{<i>{str}</i>}</div>;
                display2 = <div className="popupcontent">{str}{" "}{<b>{str}</b>}{" "}{<a href="https://edition640.makingandknowing.org/#/essays">Link to Making and Knowing</a>}</div>;
                break;
            case 1:
                str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                display = <div className="popupcontent">{str}</div>;
                display2 = <div className="popupcontent">{str}</div>;
                break;
        }
        return(
            <div className={this.state.clicked ? "popup" : "popuphidden"} id="popupnum0">
                <button className="popUpClose" onClick={() => this.closePopUp()}>⬅</button>
                <h2 className="popupheader">What is Ms. Fr. 640?</h2>
                <br></br>
                <br></br>
                {display}
                {display2}
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
        const mystyle2 = {
            left: "128.5px",
            width: "auto",
            height: "175%"
          };
        return (
        <div>
            <Navbar className='navi' expand='lg' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>

                    <Nav className="me-auto">
                        <Nav.Link href="/manuscript">Manuscript</Nav.Link>
                        <Nav.Link href="/experiments">Experiments</Nav.Link>
                        <Nav.Link href="/process">Making</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        <div className="backgrounds">
           <div className="container">
                <div className="circle" onClick={() => this.handleClick(0)} style={{float: "left", top: "70px", left: "23%"}}>
                        <img src={IMG_URI_1} alt="book" style={mystyle1}/> 
                        <div className="centered">What is BnF Ms. Fr. 640?</div>
                </div>
                <div className="circle" onClick={() => this.handleClick(1)} style={{float: "left", top: "70px", left: "37%"}}>
                    <img src={IMG_URI_1} alt="page" style={mystyle2}/> 
                    <div className="centered">What's inside the manuscript?</div>
                </div>
                <div className="circle" onClick={() => this.handleClick(0)} style={{top: "400px", left: "-30%"}}>
                        <img src={IMG_URI_1} alt="book" style={mystyle1}/> 
                        <div className="centered">Circle 3</div>
                </div>
                <div className="circle" onClick={() => this.handleClick(0)} style={{top: "400px", left: "-15%"}}>
                        <img src={IMG_URI_1} alt="book" style={mystyle1}/> 
                        <div className="centered">Circle 4</div>
                </div>
                <div className="circle" onClick={() => this.handleClick(0)} style={{top: "400px", left: "0%"}}>
                        <img src={IMG_URI_1} alt="book" style={mystyle1}/> 
                        <div className="centered">Circle 5</div>
                </div>
            </div>
            <div>{this.popUp()}</div>
        </div>
        </div>
        );
    }
    
}


export default ExperimentsPage;