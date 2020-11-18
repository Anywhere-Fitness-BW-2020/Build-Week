import React from "react";
import Styled from "styled-components";

export default function FormClient(props){
  const { formData, disabled, formSubmit, handleChanges, errors } = props;

  const onChange = (evt) => {
    const {name, value} = evt.target;
    handleChanges(name, value);
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    formSubmit();
  }

  return(
    <StyledInstructorForm>
      <form onSubmit={onSubmit}>
        <label> Name:
          <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={onChange}
          />
        </label>

        <label> Email:
          <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={onChange}
          />
        </label>

        <label> Password:
          <input 
            type="password"
            name="password"
            value={formData.password}
            onChange={onChange}
          />
        </label>

        <label> Authorization Code:
          <input 
            type="text"
            name="auth"
            value={formData.auth}
            onChange={onChange}
          />
        </label>

        <div className="submit-section">
          <div className="errors">
              <div>{errors.name}</div>
              <div>{errors.email}</div>
              <div>{errors.password}</div>
              <div>{errors.auth}</div>
          </div>
          <button disabled={disabled} >Sign Up</button>
        </div>
      </form>
    </StyledInstructorForm>
  )
}

const StyledInstructorForm = Styled.div`
  form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    label{
      font-size: 1.2rem;
      margin: 20px;
      text-align: center;
    }
  }
`;