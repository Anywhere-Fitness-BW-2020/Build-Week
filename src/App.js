import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import * as Yup from "yup";
import Styled from "styled-components";


import Home from "./robs-components/Home";
import ClientSignUp from "./robs-components/Sign Ups/ClientSignUp";
import InstructorSignUp from "./robs-components/Sign Ups/InstructorSignUp";
import ClientSignIn from "./robs-components/Sign Ins/ClientSignIn";
import InstructorSignIn from "./robs-components/Sign Ins/InstructorSignIn";
import ClientSchema from "./robs-components/Validations/ClientValidation";
import InstructorSchema from "./robs-components/Validations/InstructorValidation";


const emptyFormClient = {
  name: "",
  email: "",
  password: "",
}

const emptyFormInstructor = {
  name: "",
  email: "",
  password: "",
  auth: "",
}

const emptyErrorsClient = {
  name: "",
  email: "",
  password: "",
}

const emptyErrorsInstructor = {
  name: "",
  email: "",
  password: "",
  auth: "",
}

function App() {
  const [clientList, setClientList] = useState([]);
  const [instructorList, setInstructorList] = useState([]);
  const [formDataClient, setFormDataClient] = useState(emptyFormClient);
  const [formDataInstructor, setFormDataInstructor] = useState(emptyFormInstructor);
  const [errorsClient, setErrorsClient] = useState(emptyErrorsClient);
  const [errorsInstructor, setErrorsInstructor] = useState(emptyErrorsInstructor);
  const [disabled, setDisabled] = useState(true);

  const formSubmitClient = () => {
    const newClient = {
      name: formDataClient.name.trim(),
      email: formDataClient.email.trim(),
      password: formDataClient.email.trim(),
    }
    setClientList([
      newClient,
      ...clientList
    ]);
  }

  const formSubmitInstructor = () => {
    const newInstructor = {
      name: formDataInstructor.name.trim(),
      email: formDataInstructor.email.trim(),
      password: formDataInstructor.email.trim(),
      auth: formDataInstructor.auth.trim(),
    }
    setInstructorList([
      newInstructor,
      ...instructorList
    ]);
  }

  const handleChangesClient = (name, value) => {
    Yup.reach(ClientSchema, name)
      .validate(value)
      .then(()=>{
        setErrorsClient({
          ...errorsClient,
          [name]: ""
        })
      })
      .catch((err)=>{
        setErrorsClient({
          ...errorsClient,
          [name]: err.errors[0]
        })
      });
      setFormDataClient({
      ...formDataClient,
      [name]: value
    });
  }

  const handleChangesInstructor = (name, value) => {
    Yup.reach(InstructorSchema, name)
      .validate(value)
      .then(()=>{
        setErrorsInstructor({
          ...errorsInstructor,
          [name]: ""
        })
      })
      .catch((err)=>{
        setErrorsInstructor({
          ...errorsInstructor,
          [name]: err.errors[0]
        })
      });
      setFormDataInstructor({
      ...formDataInstructor,
      [name]: value
    });
  }

  useEffect(() => {
    ClientSchema.isValid(formDataClient).then((valid)=> {
      setDisabled(!valid);
    });
  }, [formDataClient]);

  useEffect(() => {
    InstructorSchema.isValid(formDataInstructor).then((valid)=> {
      setDisabled(!valid);
    });
  }, [formDataInstructor]);

  return (
    <BrowserRouter>
      <AppStyles className="App">
        <header className="App-header">
          <div className="title">
            <h1>Anywhere Fitness</h1>
            <nav>
              <Link to="/" style={{paddingLeft: "15px", color: "black"}}>Home</Link>
              <Link to="/client-sign-in" style={{paddingLeft: "15px", color: "black"}}>Sign In</Link>
              <Link to="/instructor-sign-in" style={{paddingLeft: "15px", color: "black"}}>Instructor Sign In</Link>
            </nav>
          </div>
          <div className="slogan">
            <h3>The World is Your Gym</h3>
          </div>
        </header>

        <Switch>
          <Route path={"/client-sign-up"} >
            <ClientSignUp 
              formData={formDataClient}
              disabled={disabled}
              formSubmit={formSubmitClient}
              handleChanges={handleChangesClient}
              errors={errorsClient}
            />
          </Route>

          <Route path={"/client-sign-in"} >
            <ClientSignIn 
              formData={formDataClient}
              disabled={disabled}
              formSubmit={formSubmitClient}
              handleChanges={handleChangesClient}
              errors={errorsClient}
            />
          </Route>

          <Route path={"/instructor-sign-up"} >
          <InstructorSignUp 
              formData={formDataInstructor}
              disabled={disabled}
              formSubmit={formSubmitInstructor}
              handleChanges={handleChangesInstructor}
              errors={errorsInstructor}
            />
          </Route>

          <Route path={"/instructor-sign-in"} >
          <InstructorSignIn 
              formData={formDataInstructor}
              disabled={disabled}
              formSubmit={formSubmitInstructor}
              handleChanges={handleChangesInstructor}
              errors={errorsInstructor}
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