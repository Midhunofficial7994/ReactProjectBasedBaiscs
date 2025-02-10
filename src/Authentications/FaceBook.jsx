// components/FacebookLogin.js
import React from "react";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import useFacebookAuth from "./useFacebookAuth";

const FacebookLogin = () => {
  const { auth, handleLoginSuccess, handleLogout } = useFacebookAuth();
  const appId = "9112780518841229";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-12 max-w-md w-full transform transition-all duration-300 hover:shadow-2xl">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-3 animate-bounce">
              {auth.isAuthenticated
                ? `Welcome Back, ${auth.profile.name}`
                : "Welcome!"}
            </h1>
            <p className="text-gray-600 text-lg">
              Connect with Facebook & Google
            </p>
          </div>

          {auth.isAuthenticated && auth.profile && (
            <div className="text-center mt-4">
              <h2 className="text-xl text-gray-800">
                Hi, {auth.profile.name}!
              </h2>
              <p className="text-gray-600">Welcome back!</p>
              <img
                src={auth.profile.picture?.data?.url || ""}
                alt="User Profile"
                className="w-20 h-20 rounded-full mx-auto mt-4"
              />
              <p className="text-gray-600 mt-2">
                Email: {auth.profile.email || "No email available"}
              </p>
            </div>
          )}

          <div className="space-y-4">
            {!auth.isAuthenticated && (
              <LoginSocialFacebook
                appId={appId}
                onResolve={handleLoginSuccess}
                onReject={(error) => console.log(error)}
              >
                <div className="w-full transform transition-transform duration-300 hover:scale-105">
                  <FacebookLoginButton />
                </div>
              </LoginSocialFacebook>
            )}

            {auth.isAuthenticated && (
              <button
                onClick={handleLogout}
                className="w-full py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-700 focus:outline-none"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacebookLogin;
