import React from "react";
import {useHistory} from "react-router-dom";

export default function Home(){
  const history = useHistory();

  const clientButton = () => {
    history.push("/client-sign-up");
  }

  const instructorButton = () => {
    history.push("/instructor-sign-up");
  }

  return(
    <div>
      <div>
        *image here ---
        <h2>Browse Classes</h2>
        --- as background*
      </div>
      <button onClick={clientButton} >Sign Up Today!</button>
      <button onClick={instructorButton} >Instructor Sign Up Here!</button>
    </div>
  )
}