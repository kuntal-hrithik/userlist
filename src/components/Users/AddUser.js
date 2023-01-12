import React, { useState } from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function AddUser(props) {

  const [enterUsername, setEnteredUsername] =useState('');

  const [enterAge,setEnteredAge]= useState('');


  const[error,setError]=useState();

    const addUserHandler = (event) =>{
        event.preventDefault();
        if(enterUsername.trim().length === 0 || enterAge.trim().length === 0) {

          setError({
            title:"invalid input" ,
            message:"please enter a valid name And age"
          })
          return;
        }
        if(+enterAge<1){
          setError({
            title:"invalid Age",
            message:"please enter a valid age (>0)."
          })
          return;
        }
        props.onAddUser(enterUsername,enterAge);
        setEnteredAge('');
        setEnteredUsername('');

    }

    const usernameChangeHandler = (event) => {
      setEnteredUsername(event.target.value);

    };

    const ageChangeHandler = (event) =>{
      setEnteredAge(event.target.value);
    }

    const errorHandler = () =>{
      setError(null);
    }


  return (
    <>
    {error && <ErrorModal titlt={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input id="username" type="text" value={enterUsername} onChange={usernameChangeHandler}/>
        <label htmlFor='age'>Age</label>
        <input id="age" type="number" value={enterAge} onChange={ageChangeHandler} />
        <Button type='submit'>Add User</Button>
    </form>
    </Card>
    </>
  );
  }

export default AddUser;
