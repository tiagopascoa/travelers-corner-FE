import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { signupApi } from "../api/apiEndpoints";

export const useSignup = () => {
  const [serverError, setServerError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (user) => {
    setIsLoading(true);
    setServerError(null);
    try {
      const response = await signupApi(user);
      localStorage.setItem("user", JSON.stringify(response.data));
      //update auth context
      dispatch({ type: "LOGIN", payload: response.data });
      return response;
    } catch (error) {
      const { response } = error;
      const { request, ...errorObject } = response; // take everything but 'request'
      setServerError(errorObject.data.error);
    } finally {
      setIsLoading(false);
    }
  };

  return { serverError, isLoading, signup };
};
