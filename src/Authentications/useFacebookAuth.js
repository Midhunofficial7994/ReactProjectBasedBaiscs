import {  useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { authState } from './authState';

const useFacebookAuth = () => {
  const [auth, setAuth] = useRecoilState(authState);

  useEffect(() => {
    const storedAuthState = localStorage.getItem("authState");
    if (storedAuthState) {
      const authData = JSON.parse(storedAuthState);
      setAuth(authData);
    }
  }, [setAuth]);

  const handleLoginSuccess = (response) => {
    console.log("Facebook Login Response:", response);

    if (!response || !response.data) {
      console.error("Invalid response received from Facebook");
      return;
    }

    const profileData = response.data;

    console.log("User Profile Data:");
    console.log("ID:", profileData.id);
    console.log("Name:", profileData.name);
    console.log("Email:", profileData.email || "Email not available");
    console.log(
      "Picture URL:",
      profileData.picture?.data?.url || "No picture available"
    );

    setAuth({
      isAuthenticated: true,
      profile: profileData,
    });

    localStorage.setItem(
      "authState",
      JSON.stringify({
        isAuthenticated: true,
        profile: profileData,
      })
    );
  };

  const handleLogout = () => {
    setAuth({
      isAuthenticated: false,
      profile: null,
    });
    localStorage.removeItem("authState");
  };

  return {
    auth,
    handleLoginSuccess,
    handleLogout,
  };
};

export default useFacebookAuth;
