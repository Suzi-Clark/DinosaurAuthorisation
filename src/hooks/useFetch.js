import { useEffect, useState } from "react";
//import { useAuth0 } from '@auth0/auth0-react';

export default function useFetch(url) {
  //const { user, getAccessTokenSilently } = useAuth0();
  const [data, setData] = useState('no')

  useEffect(() => {
    const getUserMetadata = async (url) => {

      try {
        // const accessToken = await getAccessTokenSilently({
        //   audience: `https://${url}/api/v2/`,
        //   scope: 'read:current_user',
        // });
        const pokemon = `pokeapi.co/api/v2/berry/1`
        
        const userDetailsByIdUrl = `https://${pokemon}`;


        console.log(`full url, ${userDetailsByIdUrl}`)

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            method: `GET`,
          },
        });

        const user_metadata = await metadataResponse.json();

        setData(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };
    getUserMetadata();
  }, []);
  console.log(data)
  return data;
}