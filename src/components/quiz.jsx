import React, { useState } from "react";
import { QuizQues } from "../data/Quizdata";
import QuizResult from "./result";


function Quiz(){
    const [CurQues , setCurQues] = useState(0) ;
    const [number , setNumber] = useState(0) ; 
    const [selected , setSelected] = useState(0) ;
 const [ showResult , setShowResult] = useState(false) ; 


    const changeQues = () =>{ 
        updateScore() ;
       if ( CurQues < QuizQues.length - 1 ){
        setCurQues(CurQues+1) ;
        setSelected(0) ;
       }
      else{
        setShowResult(true) ; 
      }
    }

    const prevQues = ()=>{
      updateScore() ;
      if ( CurQues > 0 ){
       setCurQues(CurQues-1) ;
       setSelected(0) ;
      }
    }


   const updateScore = ()=>{
    if ( selected === QuizQues[CurQues].answer ){
        setNumber(number+1) ;
    }
   }


    return(
        <div>
            <p className="heading-text">Simple Quiz App</p>

           <div className="container">
                { showResult ? (
                 <QuizResult score={number} totalscore={QuizQues.length} />
                ):(
                <>
              <div className="question">
                <p>{CurQues+1}.</p>
                  <p className="">{QuizQues[CurQues].question}</p>
              </div>
               
              <div className="option-container">
               {
                  QuizQues[CurQues].options.map((option,i) =>{
                  return(
                    <button className={`option-btn ${selected == i+1 ? "checked" : null}`}
                     key={i}
                    onClick={()=>setSelected(i+1)}>
                      {option}
                    </button>
                  )
                }) }
               
              </div>
             
             <div className="my-buttons">
              
                    <input type="button" value="Previous" id="next-button" onClick={prevQues} />
                    <input type="button" value="Next" id="next-button" onClick={changeQues}/>
             </div>
         
              </>
      )}
           </div>

        </div>
    )
}

export default Quiz ;