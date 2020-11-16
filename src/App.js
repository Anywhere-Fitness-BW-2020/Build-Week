import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import * as Yup from "yup";


import './App.css';
import Home from "./robs-components/Home";
import FormClient from "./robs-components/FormClient";
import FormInstructor from "./robs-components/FormInstructor";
import ClientSchema from "./robs-components/ClientValidation";
import InstructorSchema from "./robs-components/InstructorValidation";

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
      <div className="App">
        <header className="App-header">
          <h1>Anywhere Fitness</h1>
          <h3>The World is Your Gym</h3>
          <nav>
            <Link to="/" >Home</Link>
            <Link to="/client-sign-up" >Sign Up</Link>
            <Link to="/instructor-sign-up" >Instructor Sign Up</Link>
          </nav>
        </header>

        <Switch>
          <Route path={"/client-sign-up"} >
            <FormClient 
              formData={formDataClient}
              disabled={disabled}
              formSubmit={formSubmitClient}
              handleChanges={handleChangesClient}
              errors={errorsClient}
            />
          </Route>

          <Route path={"/instructor-sign-up"} >
          <FormInstructor 
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

        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
