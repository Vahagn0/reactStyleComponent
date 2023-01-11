import { MainDiv } from "./MainDivs";
import { Option } from "./option";
import "./App.css"

function QuestionPage(){
    return(
        <div className="main">
            <MainDiv>
                <img src="logo.png" />
            </MainDiv>
            <MainDiv>
                <p className="text">The Question</p>
                <Option>option2</Option>
                <Option>option3</Option>
                <Option>option4</Option>
                <Option type = "yellow">Next</Option>
            </MainDiv>
        </div>  
    )
}

export default QuestionPage