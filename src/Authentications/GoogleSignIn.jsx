import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { Card, CardContent, CardHeader, CardTitle } from './Card';
import { Button } from './Button';
import { LogOut } from "lucide-react";
import useGoogleAuth from './useGoogleAuth'; // Import the custom hook

const GoogleSignIn = () => {
  const { user, handleLoginSuccess, handleLoginFailure } = useGoogleAuth(); // Use the custom hook

  const clientId = "459947292244-964qsu7q4mgac98vd1o5854j8i3blbjp.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-800">
              {!user ? "Welcome" : `Welcome Back!`}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {!user ? (
              <div className="flex flex-col items-center space-y-4">
                <p className="text-gray-600 mb-4">
                  Sign in with your Google account to continue
                </p>
                <div className="w-full flex justify-center">
                  <GoogleLogin
                    onSuccess={handleLoginSuccess}
                    onError={handleLoginFailure}
                    theme="filled_black"
                    shape="pill"
                  />
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center space-y-6">
                <div className="relative">
                  <img
                    src={user.picture}
                    alt="User Profile"
                    className="w-40 h-40 rounded-full border-4 border-white shadow-xl"
                  />
                  <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-4 border-white" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {user.name}
                  </h3>
                  <p className="text-gray-600">{user.email}</p>
                </div>
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center space-x-2"
                  onClick={() => {
                    setUser(null);
                    localStorage.removeItem("jwtToken");
                  }}
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </GoogleOAuthProvider>
  );
};

export default GoogleSignIn;
