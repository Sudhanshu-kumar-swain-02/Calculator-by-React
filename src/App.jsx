import Display from "./Components/Display";
import ButtonContainer from "./Components/ButtonContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  let [calVal,setCalVal]=useState("");
  const onbuttonClick=(ButtonText)=>{
    if(ButtonText==="C")
    {
      setCalVal("");
    }
    else if(ButtonText==="="){
      const resultEql=eval(calVal);
      setCalVal(resultEql);

    }
    else{
      const newValueRes=calVal+ButtonText;
      setCalVal(newValueRes);
    }
  };
  return (
    <div className={styles.calculator}>
      <h1 className={styles.heading}>React Calculator App</h1>
      <Display displayVal={calVal}></Display>
      <ButtonContainer onbuttonClick={onbuttonClick}></ButtonContainer>
      
     <p className={styles.caption}>
      🚀 Created by <strong>DEV_x_Sudhanshu </strong> —
      <a
        href="https://github.com/Sudhanshu-kumar-swain-02" 
        target="_blank"
        rel="noopener noreferrer"
        className={styles.githubLink}
      >
        🔗 View on GitHub 
      </a>
      </p>

    </div>
  );
}

export default App;