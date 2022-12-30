import React, {useRef} from 'react';



export default function QuestionBox({questions,ClickedOption,currentQuestion}) {

  const PresentQuestion = useRef();

  function handlePresent(){
    PresentQuestion.current.style.color = "yellow";
  }

  function DonthandlePresent(){
    PresentQuestion.current.style.color = "darkblue";
  }

  

  return (      
      <div className="question-card" >
        <h2>
          Question: {currentQuestion + 1} out of {questions.length}
        </h2>
        
        
        
        <h3 ref={PresentQuestion} className="question-text">{questions[currentQuestion].text}</h3>

        <ul>
          {questions[currentQuestion].options.map((option) => {
            return (
              <li
                key={option.id}
                onClick={() => ClickedOption(option.isCorrect)}
              >
                {option.text}
              </li>
            );
          })}
        </ul>
        <div id='buttons'>

        <button onClick={handlePresent}>Highlight</button>
        <button>Next</button>
        <button onClick={DonthandlePresent}>Remove Highlight</button>
        </div>
    </div>

          
        
      

  
  )
}