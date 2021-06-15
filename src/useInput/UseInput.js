import React, {useState} from "react";

const useInput = (initialValue, validator) =>{
  const [value, setValue] = useState(initialValue);
  const onChange = event =>{
    // console.log(event.target.value)
    
    //둘이 같은 의미
    // const value = event.target.value;
    const{
        target: {value}
    } = event

    let willUpdate = true;
    if(typeof validator === "function"){
      willUpdate = validator(value)
    }
    if(willUpdate){
      setValue(value)
    }
  }
  return {value, onChange};
}

export default function UseInput(){
    const maxLen = (value) => value.length <= 10;
    const name = useInput("", maxLen);
    return(
        <div>
            <h1>useInput Hook</h1>
            <input placeholder="Name" {...name}></input>
        </div>
  
    )
}