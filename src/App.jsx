import React, { useRef, useState } from 'react';
import "./app.css"
import {data} from '././Assets/data'


const Calculator = () => {
    const [index, setindex] = useState(0)
    const [Score, setScore] = useState(0)
    const [question, setquestion] = useState(data[index])
    const [Lock, setLock] = useState(true)
    const option1 = useRef(null)
    const option2 = useRef(null)
    const option3 = useRef(null)
    const option4 = useRef(null)
    let option_array =[option1,option2,option3,option4]
    const handlenext =(e)=>{
        if(Lock===false){
        setindex(index+1)
        setquestion(data[index])
        setLock(true)
        option_array.map((option)=>{
            option.current.classList.remove("wrong")
            option.current.classList.remove("correct")
            return(null)
        })
        }
    }
    const handleclick = (e, ans) => {
        if (Lock === true) {
            if (ans === question.ans) {
                e.target.classList.add("correct");
                setLock(false);
                setScore(Score+1)
            } else {
                e.target.classList.add("wrong");
                setLock(false);
                switch (question.ans) {
                    case 1:
                        option1.current.classList.add("correct");
                        break;
                    case 2:
                        option2.current.classList.add("correct");
                        break;
                    case 3:
                        option3.current.classList.add("correct");
                        break;
                    case 4:
                        option4.current.classList.add("correct");
                        break;
                    default:
                        break;
                }
            }
        }
    };
    
    return(
        <div className='container'>
        <h1 >Quiz App</h1>
        <hr />
        <h2>{index+1}.{question.question}</h2>
        <ul>
          <li ref={option1} onClick={(e)=>{handleclick(e,1) }}>{question.option1}</li>
          <li ref={option2} onClick={(e)=>{handleclick(e,2)}}>{question.option2}</li>
          <li ref={option3} onClick={(e)=>{handleclick(e,3)}}>{question.option3}</li>
          <li ref={option4} onClick={(e)=>{handleclick(e,4)}}>{question.option4} </li> </ul>
          <div className='center'>
        <div className="index">{index+1} of {data.length} Question</div>
        <div className='index' >Your Score is {Score}</div>
        </div>
<button onClick={handlenext}>Next</button>
        
        
        
        </div>
 

    )
};

export default Calculator;
