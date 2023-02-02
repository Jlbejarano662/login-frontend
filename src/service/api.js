import axios from "axios";

const URL = "https://login-backend-ruddy.vercel.app";

export const signIn = async (user) => {
  try {
    console.log(user);
    return await axios.post(URL + "/api/auth/signin", user);
  } catch (e) {
    console.log("Error while calling signIn Api", e);
  }
};

export const getHome = async (token) => {
  try {
    return await axios.get(URL + "/api/home", {
      headers: {
        "x-access-token": token,
      },
    });
  } catch (e) {
    console.log("Error while calling getMovies API", e);
  }
};
