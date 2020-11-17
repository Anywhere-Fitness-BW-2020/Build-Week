import React from "react";
import FormInstructor from "../Forms/FormInstructor";
import Styled from "styled-components";

export default function InstructorSignUp(props){
  const { formData, disabled, formSubmit, handleChanges, errors } = props;


  return(
    <InstructorSignUpStyles>

      <div className="side-image">
      </div>

      <div className="form-container">

        <div>
          <h2>Instructor<br/>Sign Up</h2>
        </div>

        <FormInstructor 
          formData={formData} 
          disabled={disabled}
          formSubmit={formSubmit}
          handleChanges={handleChanges}
          errors={errors}
        />
      </div>

    </InstructorSignUpStyles>
  )
}

const InstructorSignUpStyles = Styled.div`
  display: flex;
  Justify-content: space-evenly;
  align-items: center;

  .side-image{
    background-image: url("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/man-lifting-weights-in-gymnasium-royalty-free-image-591403645-1555718789.jpg?crop=0.66635xw:1xh;center,top&resize=480:*");
    min-height: 80vh;
    min-width: 50vw;
    max-width: 50vw;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .form-container{
    display: flex;
    flex-direction: column;
    Justify-content: space-evenly;
    align-items: center;

    h2{
      font-size: 3rem;
      text-align: center;
      margin: 30px;
    }
  }
`;