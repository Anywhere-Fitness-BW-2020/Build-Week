import React from "react";
import FormInstructor from "../Forms/FormInstructor";

export default function InstructorSignIn(props){
  const { formData, disabled, formSubmit, handleChanges, errors } = props;


  return(
    <div>

      <div>
        -- image here on left side --
      </div>

      <div>

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

    </div>
  )
}