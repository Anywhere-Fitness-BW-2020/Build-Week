import React from "react";
import {useHistory} from "react-router-dom";
import Styled from "styled-components";

export default function Home(){
  const history = useHistory();

  const clientButton = () => {
    history.push("/client-sign-up");
  }

  const instructorButton = () => {
    history.push("/instructor-sign-up");
  }

  return(
    <StyledHome>
      <div className="home-image">
        <h2>Browse Classes</h2>
        <p>Doggo ipsum wrinkler such treat long woofer. Long doggo very jealous pupper fat boi puggorino, woofer long bois. very jealous pupper shoob the neighborhood pupper. puggorino the neighborhood pupper clouds. Big ol floofs wow very biscit blep you are doin me a concern, most angery pupper I have ever seen wrinkler. Shooberino the neighborhood pupper very taste wow porgo he made many woofs length boy wrinkler very good spot, such treat tungg many pats you are doing me a frighten vvv pupper. Long bois wow such tempt big ol pupper maximum borkdrive, dat tungg tho.
        </p>
      </div>
      <div className="buttons-container">
        <button onClick={clientButton} >Sign Up Today!</button>
        <button onClick={instructorButton} >Instructor Sign Up Here!</button>
      </div>
    </StyledHome>
  )
}

const StyledHome = Styled.div`
  .home-image{
    background-image: url("https://imgix.bustle.com/elite-daily/2016/05/07162917/Christine-Hewitt-yoga-poses-.jpg?w=1020&h=574&fit=crop&crop=faces&auto=format%2Ccompress&cs=srgb&q=70");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-height: 60vh;
    min-width: 100vw;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: start;

    h2{
      font-size: 2rem;
      margin: 20px;
      text-shadow: 1px 1px 3px grey;
    }

    p{
      font-size: 1.2rem;
      width: 50vw;
      margin: 20px;
      text-shadow: 1px 1px 3px grey;
    }
  }
  .buttons-container{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    min-height: 10vh;

    button{

    }
  }

`;