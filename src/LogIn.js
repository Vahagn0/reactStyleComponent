import { MainDiv } from "./MainDivs";
import { Option } from "./option";
import "./App.css"
import {Link} from "react-router-dom"

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
                <Option type = "yellow"><Link to="/quiz">Login</Link></Option>
                <div className="or">
                    <div className="line"></div>
                        <p className="orText">Or</p>
                    <div className="line"></div>
                </div>
                <Option>
                    <div className="img">
                        <img src="./google.png" className="registerIcon" />
                    </div>
                    <div className="registerDiv"></div>
                    <div className="txt">
                        <p>connect to Google</p>    
                    </div>
                </Option>
                <Option>
                    <div className="img">
                        <img src="./facebook.png" className="registerIcon" />
                    </div>
                    <div className="registerDiv"></div>
                    <div className="txt">
                        <p>connect with facebook</p>
                    </div>
                </Option>
            </MainDiv>
        </div>  
    )
}

export default LogInPage