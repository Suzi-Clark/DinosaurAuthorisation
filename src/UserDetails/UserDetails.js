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
 
  function onSubmit() {
    console.log('hi');
  }

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

  return (
    isAuthenticated 
      ? (<div className='container'>
        <div>
          <Link to='/'>
            <button id='backButton'>Back</button>
          </Link>
        </div>
        <div id='UserDetails'>
          <p>Hi {user.nickname},</p>
          <p>You told us your favourite dinosaur was: <b>{faveDino}!</b>
          <br></br> Here is an image for you:</p>
          <img src={imageUrl} alt="your favourite dinosaur" height='100px'></img>
          <br></br>
          <p>The email address on your account is: {user.email}</p>
          <button>Tell us more about yourself...</button>
          <UpdateDetails onSubmit={onSubmit} />
        </div>
      </div>
      ) : (<p>it should not be possible to try to render this before log in</p>)
    );
  }
  
export default UserDetails;