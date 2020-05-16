import { useState, useEffect } from "react";
import axios from "axios";

//const _API_BASE_URL = "https://jsonplaceholder.typicode.com/";
//posts 	100 posts
//comments 	500 comments
//albums 	100 albums
//photos 	5000 photos
//todos 	200 todos
//users 	10 users
export const useFetchCustomHookForJsonPlaceholder = (
  typeOfRequestedData = "users",
  indexOfRequestedItem = 1,
  initialState = []
) => {
  const [reqestResult, setRequestResult] = useState(initialState);

  useEffect(() => {
    //console.log(`https://jsonplaceholder.typicode.com/${typeOfRequestedData}/${indexOfRequestedItem}`)
    axios
      .get(
        `https://jsonplaceholder.typicode.com/${typeOfRequestedData}/${indexOfRequestedItem}`
      )

      .then(
        result => {
          setRequestResult(result);
        },
        error => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
          console.log(error.config);
        }
      );
  }, []);

  return reqestResult;
};
