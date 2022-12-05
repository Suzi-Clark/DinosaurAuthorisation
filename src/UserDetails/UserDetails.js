import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import UpdateDetails from '../UpdateDetails/UpdateDetails';
import './userDetails.css';
import eggy from '../profileImages/eggy.png'
import steggy from '../profileImages/steggy.png'
import tricer from '../profileImages/tricer.png'

function UserDetails() {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState('ho');
  const [faveColour, setFaveColour] = useState('grey');

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = 'dev-0ynzls7dh5xjmgl5.eu.auth0.com';

      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: 'read:current_user',
        });

        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const { user_metadata } = await metadataResponse.json();

        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };
    
    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);

  
  let faveDino = userMetadata ? (userMetadata.favourite_dinosaur) : ("no favourite found");

  let imageUrl = "";

  function getFaveImage() {
      switch(faveDino) {
        case "triceratops": 
          return imageUrl = tricer;
        case "stegosaurus":
          return imageUrl = steggy;
        default:
          return imageUrl = eggy;
      }
    }
  getFaveImage()

  function handleClick(e) {
    e.preventDefault();
    let dinoOption = document.getElementsByName("colour");
    for(let i = 0; i < dinoOption.length; i++) {
      if(dinoOption[i].checked) {
        faveDino = dinoOption[i].id;
      }
    }
    let colourOption = document.getElementsByName("colour");
    for(let i = 0; i < colourOption.length; i++) {
      if(colourOption[i].checked) {
        setFaveColour(colourOption[i].id)
      }
    }
    console.log(faveColour)
  }

  return (
    isAuthenticated 
      ? (<div id='userContainer'>
          <Link to='/'>
            <button id='backButton'>Back</button>
          </Link>
        <div id='UserDetails'>
        <div id='displayData'>
          <h2>Your Account Info!</h2>
          <h3 id='userName' style={{color: `${faveColour}`}}>Hi <b>{user.nickname}</b>,</h3>
          <p>You told us your favourite dinosaur was: <b>{faveDino}!</b>
          <br></br> Here is an image for you:</p>
          <img src={imageUrl} alt="your favourite dinosaur" height='100px'></img>
          <br></br>
          <p>The email address on your account is: {user.email}</p>
        </div>
        <div id='update'>
          <UpdateDetails handleClick={handleClick} />
        </div>
        </div>
      </div>
      ) : (<p>it should not be possible to try to render this before log in</p>)
    );
  }
  
export default UserDetails;