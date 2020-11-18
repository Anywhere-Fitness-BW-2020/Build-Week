import React from "react";
import Styled from "styled-components";

export default function FormClient(props){
  const { formData, disabled, formSubmit, handleChanges, errors } = props;

  const onChange = (evt) => {
    const {name, value, checked, type} = evt.target;
    const correctValue = type === "checkbox" ? checked : value;
    handleChanges(name, correctValue);
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    formSubmit();
  }

  return(
    <StyledClientForm>
      <form onSubmit={onSubmit}>
        <label> Username:
          <input 
            type="text"
            name="name"
            value={formData.name}
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

        <label> Are You an Instructor?<br/> Yes
          <input 
            type="checkbox"
            name="instructor"
            value={formData.instructor}
            onChange={onChange}
          />
        </label>

        <div className="submit-section">
          <div className="errors">
              <div>{errors.name}</div>
              <div>{errors.password}</div>
              <div>{errors.instructor}</div>
          </div>
          <button disabled={disabled} >Sign Up</button>
        </div>
      </form>
    </StyledClientForm>
  )
}

const StyledClientForm = Styled.div`
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