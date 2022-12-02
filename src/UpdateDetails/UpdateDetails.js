import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
//import { Link } from 'react-router-dom';

function UserDetails({ onSubmit }) {
  const { isAuthenticated } = useAuth0();
  return (
    isAuthenticated ? (
      <div id='UserDetails'>
        <form>
          <label htmlFor='fname'>First name:</label>
          <input type='text' id='fname' name='fname'></input>
          <label htmlFor='lname'>Last name:</label>
          <input type='text' id='lname' name='lname'></input>
          <input type='submit' value='Submit' onClick={onSubmit()}></input>
        </form>
      </div>
    ) : (
      <p>oops</p>
    )
  );
}

export default UserDetails;
