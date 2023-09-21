function QuizResult(fetch){
   return(
    <div className="final-result">
        <br /><br /><br /><br /><br />
         <h1> You scored = {fetch.score}</h1>
         <h1>Question Asked = {fetch.totalscore}</h1>
         <br />
         <h1>Correct answer </h1>
         <h1> Ratio is  = {(fetch.score / fetch.totalscore) * 100}%</h1>
         <button id="restart-button" onClick={()=>window.location.reload()}>Restart</button>
    </div>
   )
}
export default QuizResult ;
