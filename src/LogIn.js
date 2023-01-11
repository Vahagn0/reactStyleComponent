import { MainDiv } from "./MainDivs";
import { Option } from "./option";
import "./App.css"

function LogInPage(){
    return(
        <div className="main">
            <MainDiv>
                <img src="logo.png" />
            </MainDiv>
            <MainDiv>
                <p className="text">Log In</p>
                <Option>Email</Option>
                <Option>Password</Option>
                <Option type = "yellow">Submit</Option>
                <div className="or">
                    <div className="line"></div>
                        <p className="orText">Or</p>
                    <div className="line"></div>
                </div>
                <Option>
                    <img src="./google.png" className="registerIcon" />
                    <div className="registerDiv"></div>
                    <p>connect to Google</p>
                </Option>
                <Option>
                    <img src="./facebook.png" className="registerIcon" />
                    <div className="registerDiv"></div>
                    <p>connect with facebook</p>
                </Option>
            </MainDiv>
        </div>  
    )
}

export default LogInPage