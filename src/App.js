import "./App.css"
import QuestionPage from "./questionPage";
import LogInPage from "./LogIn";
import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LogInPage /> } />
        <Route path="/quiz" element={ <QuestionPage /> } />
      </Routes>
    </div>
  )
}

export default App;
