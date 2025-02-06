import { useRecoilState } from "recoil";
import { atom } from "recoil";
import React from "react";

const userAtom = atom({
  key: "user",
  default: null,
});

const decodeJwt = (token) => {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const decoded = atob(base64);
  return JSON.parse(decoded);
};

const useGoogleAuth = () => {
  const [user, setUser] = useRecoilState(userAtom);

  const handleLoginSuccess = (response) => {
    const jwtToken = response.credential;
    const decodedToken = decodeJwt(jwtToken);
    localStorage.setItem("jwtToken", jwtToken);
    setUser(decodedToken);
  };

  const handleLoginFailure = (error) => {
    console.error("Google login failed", error);
  };

  React.useEffect(() => {
    const storedToken = localStorage.getItem("jwtToken");
    if (storedToken) {
      try {
        const decodedToken = decodeJwt(storedToken);
        setUser(decodedToken);
      } catch (error) {
        console.error("Error decoding stored token:", error);
      }
    }
  }, []);

  return {
    user,
    handleLoginSuccess,
    handleLoginFailure,
  };
};

export default useGoogleAuth;
