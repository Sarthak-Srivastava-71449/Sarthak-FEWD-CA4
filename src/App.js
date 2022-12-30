import React, { useEffect, useState } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";



function App() {

  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [theme, setTheme] = useState(true)
  const [themeName, setThemeName] = useState("dark")


  const ClickedOption = (isCorrect) => {

    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };


  const Toggle = ()=>{
    setTheme(theme?false:true);
  }

  function BGColors(color){

    document.body.style.backgroundColor = color? "black":"white";
    return{
      backgroundColor : color? "black":"white",
    }
  }

  function textColor(color){
    return{
      color:color?"white":"black",
    }
  }

  useEffect(()=>{
    setThemeName(themeName==="light"?"dark":"light")
  },[theme])


  return (
      <div className="App" style={BGColors(theme)}>
        <div className="flex">
          <h1 style={textColor(theme)}>Kalvium Quiz</h1>
          <button className="toggle-button" onClick={Toggle}>{themeName}</button>
        </div>
      
        {
          showResults ? <Result setScore={setScore} score={score} setCurrentQuestion={setCurrentQuestion} setShowResults={setShowResults} length={questions.length}/> : 
          <QuestionBox questions={questions} ClickedOption={ClickedOption} currentQuestion={currentQuestion}/>
        }

      
      
      </div>

  );
}

export default App;