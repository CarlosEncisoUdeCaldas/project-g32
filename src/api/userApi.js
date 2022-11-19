//este va a ser el archivo que contiene todas las conexiones a al servidor
import { base_url, api_version } from "../constants/UrlBase";

//function to create a user
export const userSignUp = (dataUser) => {
  //url para conectarse a la api
  const url_api = `${base_url}/${api_version}/createUser`;

  //los parametros que van en la Peticion HTTP
  const params = {
    method: "POST",
    body: JSON.stringify(dataUser),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url_api, params)
    .then((res) => res.json())
    .then((result) => result )
    .catch((err) => console.log(err.message));
};
