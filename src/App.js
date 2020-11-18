import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import * as Yup from "yup";
import Styled from "styled-components";


import Home from "./robs-components/Home";
import SignUp from "./robs-components/Sign Ups/ClientSignUp";
import SignIn from "./robs-components/Sign Ins/ClientSignIn";
import Schema from "./robs-components/Validations/ClientValidation";


const emptyForm = {
  username: "",
  password: "",
  instructor: "",
}

const emptyErrors = {
  username: "",
  password: "",
  instructor: "",
}

function App() {
  const [clientList, setClientList] = useState([]);
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState(emptyErrors);
  const [disabled, setDisabled] = useState(true);

  const formSubmit = () => {
    const newClient = {
      name: formData.name.trim(),
      password: formData.password.trim(),
      instructor: formData.instructor.trim(),
    }
    setClientList([
      newClient,
      ...clientList
    ]);
  }

  const handleChanges = (name, value) => {
    Yup.reach(Schema, name)
      .validate(value)
      .then(()=>{
        setErrors({
          ...errors,
          [name]: ""
        })
      })
      .catch((err)=>{
        setErrors({
          ...errors,
          [name]: err.errors[0]
        })
      });
      setFormData({
      ...formData,
      [name]: value
    });
  }

  useEffect(() => {
    Schema.isValid(formData).then((valid)=> {
      setDisabled(!valid);
    });
  }, [formData]);

  return (
    <BrowserRouter>
      <AppStyles className="App">
        <header className="App-header">
          <div className="title">
            <h1>Anywhere Fitness</h1>
            <nav>
              <Link to="/" style={{paddingLeft: "15px", color: "black"}}>Home</Link>
              <Link to="/client-sign-in" style={{paddingLeft: "15px", color: "black"}}>Sign In</Link>
            </nav>
          </div>
          <div className="slogan">
            <h3>The World is Your Gym</h3>
          </div>
        </header>

        <Switch>
          <Route path={"/client-sign-up"} >
            <SignUp 
              formData={formData}
              disabled={disabled}
              formSubmit={formSubmit}
              handleChanges={handleChanges}
              errors={errors}
            />
          </Route>

          <Route path={"/client-sign-in"} >
            <SignIn 
              formData={formData}
              disabled={disabled}
              formSubmit={formSubmit}
              handleChanges={handleChanges}
              errors={errors}
            />
          </Route>

          <Route path={"/"} >
            <Home />
          </Route>

        </Switch>

        <footer>
          <p>Made by Track Team 67 :)</p>
        </footer>
      </AppStyles>
    </BrowserRouter>
  );
}


const AppStyles = Styled.div`
  display: flex;
  flex-direction: column;
  .title{
    min-height: 15vh;
    h1{
      font-size: 4rem;
    }
    display: flex;
    align-items: center;
    justify-content: space-between;
    nav{
      font-size: 1.6rem;
      display: flex;
      justify-content: space-evenly;
    }
  }
  .slogan{
    min-height: 10vh;
    background-color: orange;
    display: flex;
    align-items: center;
    justify-content: center;
    h3{
      font-size: 1.6rem;
      text-align: center;
      text-shadow: 1px 1px 3px grey;
    }
  }
  footer{
    background-color: orange;
    min-height: 15vh;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;


export default App;