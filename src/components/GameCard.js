import React,{useEffect, useState} from "react";





const GameCard = ()=>{
    const [ipNumber,updateIpNumber] = useState(0);
    const [attempts,updateAttempts] = useState(0);
    const [buttonIsDisabled, disableButton] = useState(false);
    const [message,updateMessage] = useState("")
    function handleSubmit(event)
    {
        event.preventDefault();
        const random = Math.floor(Math.random() * 11)
        console.log(random);
        if(ipNumber==random)
        {
            updateMessage("your guess is right")
            setTimeout(()=>{
                updateMessage("")
            },2500)
        }
        if(attempts>3)
        {
            disableButton(true)
            updateMessage("exceeded attempts");
            // alert("exceeded attempts")
        }
        else{
            updateMessage("your guess is wrong");
            setTimeout(()=>{
                updateMessage("")
            },2500)
        }
         
    }
    
    return(
        <div id="container">
        <div id="form-box">
    <form onSubmit={handleSubmit}>
        <input type="number" value={ipNumber} onChange={(event)=>updateIpNumber(event.target.value)} min="0" max="10" />
        <button type="submit" onClick={()=>updateAttempts(attempts+1)} disabled={buttonIsDisabled}>Submit</button>
    </form>
   
    </div>
    <p id="message">{message}</p>
    </div>
    )
}

export default GameCard;