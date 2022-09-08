import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { loginApi } from "../api/apiEndpoints";

export const useLogin = () => {
  const [serverError, setServerError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (user) => {
    setIsLoading(true);
    setServerError(null);
    try {
      const response = await loginApi(user);
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

  return { serverError, isLoading, login };
};
