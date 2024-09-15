
import Button from "../UI/Button/Button";
import { useState } from "react";
import styled from "styled-components";

const Inputstyle=styled.input`
width: 100%;
`;

const Input =() =>{

    const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const nameChangeHandler=(event)=>{
    setEnteredName(event.target.value);
  }
  const ageChangeHandler=(event)=>{
    setEnteredAge(event.target.value);
  }
    const SubmitHandler =(event)=>{
        event.preventdefault();
        
        
        };

    return(
<div>
    <form onSubmit={SubmitHandler}>
        <div>
<label >Name</label>
<Inputstyle type='text'
value={enteredName}
onChange={nameChangeHandler}/>
        </div>
        <div>
<label>Age</label>
<Inputstyle type='number'
value={enteredAge}
onChange={ageChangeHandler}/>
        </div>
<Button type='submit'>Add User</Button>
</form>
</div>
    );
};

export default Input;