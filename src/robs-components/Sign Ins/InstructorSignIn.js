import React from "react";
import FormInstructor from "../Forms/FormInstructor";
import Styled from "styled-components";

export default function InstructorSignIn(props){
  const { formData, disabled, formSubmit, handleChanges, errors } = props;


  return(
    <InstructorSignInStyles>

      <div className="side-image">
      </div>

      <div className="form-container">

        <div>
          <h2>Instructor<br/>Sign In</h2>
        </div>

        <FormInstructor 
          formData={formData} 
          disabled={disabled}
          formSubmit={formSubmit}
          handleChanges={handleChanges}
          errors={errors}
        />
      </div>

    </InstructorSignInStyles>
  )
}

const InstructorSignInStyles = Styled.div`
  display: flex;
  Justify-content: space-evenly;
  align-items: center;

  .side-image{
    background-image: url("https://www.trainerize.com/blog/wp-content/uploads/2019/02/Fitness_for_2_selling_personal_training_to_couples.jpg");
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