import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import blueDino from '../images/bluedino.png';
import babyDino from '../images/babydino.png';
import orange from '../images/orange.png';
import purpleDino from '../images/purpledino.png';
import steggy from '../images/steggy.png';
import tallGreen from '../images/tallgreen.png';
import tricycle from '../images/tricycle.png';
import { Link } from 'react-router-dom';

const MainPage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <Link to='/user'>
          <img src={user.picture} alt={user.name} />
        </Link>
        <div className="dinoImages">
            <img src={blueDino} alt='a blue dinosaur' height='400px'/>
            <img src={babyDino} alt='a baby dinosaur' height='400px'/>
            <img src={orange} alt='a flying dinosaur' height='400px'/>
            <img src={purpleDino} alt='a purple dinosaur' height='400px'/>
            <img src={steggy} alt='a stegosaurus' height='400px'/>
            <img src={tallGreen} alt='a tall dinosaur' height='400px'/>
            <img src={tricycle} alt='a triceratops' height='400px'/>
        </div>
      </div>
    )
  );
};
export default MainPage;