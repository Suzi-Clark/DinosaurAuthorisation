import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import blueDino from '../../images/bluedino.png';
import babyDino from '../../images/babydino.png';
import orange from '../../images/orange.png';
import purpleDino from '../../images/purpledino.png';
import steggy from '../../images/steggy.png';
import tallGreen from '../../images/tallgreen.png';
import tricycle from '../../images/tricycle.png';
import { Link } from 'react-router-dom';
import './MainPage.css';

const MainPage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated ? (
      <div id='mainPage'>
        <Link to='/user'>
        <img src={user.picture} alt={user.name} id='userImage'/>
        </Link>
        <div className="dinoImages">
            <img className='blue' src={blueDino} alt='a blue dinosaur' height='250px'/>
            <img className='green' src={babyDino} alt='a baby dinosaur' height='250px'/>
            <img className='orange' src={orange} alt='a flying dinosaur' height='250px'/>
            <img className='purple' src={purpleDino} alt='a purple dinosaur' height='250px'/>
            <img className='orange' src={steggy} alt='a stegosaurus' height='250px'/>
            <img className='green' src={tallGreen} alt='a tall dinosaur' height='250px'/>
            <img className='blue' src={tricycle} alt='a triceratops' height='250px'/>
        </div>
      </div>
    ) : null
  );
};
export default MainPage;