import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function UpdateDetails({handleClick}) {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated ? (
      <div id='updateDetails'>
        <h2 id='changeUserHeading'>Change your details?</h2>
        <form>
          <label htmlFor='fname'>Nickname: </label>
          <input type='text' id='fname' name='fname'></input>
          <p>Which is the best colour for a dinosaur?</p>
          <input type="radio" id="green" name="colour" value="green"></input>
          <label htmlFor="green">Green</label>
          <br></br>
          <input type="radio" id="blue" name="colour" value="blue"></input>
          <label htmlFor="blue">Blue</label>
          <br></br>
          <input type="radio" id="orange" name="colour" value="orange"></input>
          <label htmlFor="orange">Orange</label>
          <br></br>
          <input type="radio" id="purple" name="colour" value="purple"></input>
          <label htmlFor="purple">Purple</label>
          <br></br>
          <br></br>
          <p>What is your favourite dinosaur?</p>
          <input type="radio" id="triceratops" name="dino" value="triceratops"></input>
          <label htmlFor="triceratops">Triceratops</label>
          <br></br>
          <input type="radio" id="stegosaurus" name="dino" value="stegosaurus"></input>
          <label htmlFor="stegosaurus">Stegosaurus</label>
          <br></br>
          <input type="radio" id="egg" name="dino" value="egg"></input>
          <label htmlFor="egg">I don't like dinosaurs 😤</label>
          <br></br>
          <br></br>
          <input type='submit' value='Submit' onClick={handleClick}></input>
        </form>
      </div>
    ) : (
      <p>it should not be possible to try to render this before log in</p>
    )
  );
}

export default UpdateDetails;
