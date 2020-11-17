import React from "react";
import FormClient from "../Forms/FormClient";

export default function ClientSignIn(props){
  const { formData, disabled, formSubmit, handleChanges, errors } = props;


  return(
    <div>

      <div>
        -- image here on left side --
      </div>

      <div>

        <div>
          <h2>Client<br/>Sign In</h2>
        </div>

        <FormClient 
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