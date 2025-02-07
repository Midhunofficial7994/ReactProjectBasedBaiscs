import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
// import { authState } from '../store/authState';
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";

const FacebookLogin = () => {
  //   const navigate = useNavigate();
  //   const [auth, setAuth] = useRecoilState(authState);
  const appId = "9112780518841229";

  //   useEffect(() => {
  //     if (auth.isAuthenticated) {
  //       navigate('/home', { replace: true });
  //     }
  //   }, [auth.isAuthenticated, navigate]);

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

    navigate("/home", { replace: true });
    window.history.pushState(null, null, window.location.href);
    window.addEventListener("popstate", () => {
      window.history.pushState(null, null, window.location.href);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-12 max-w-md w-full transform transition-all duration-300 hover:shadow-2xl">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-3 animate-bounce">
              Welcome Back
            </h1>
            <p className="text-gray-600 text-lg">
              Connect with Facebook & Google
            </p>
          </div>
          <div className="space-y-4">
            <LoginSocialFacebook
              appId={appId}
              onResolve={handleLoginSuccess}
              onReject={(error) => console.log(error)}
            >
              <div className="w-full transform transition-transform duration-300 hover:scale-105">
                <FacebookLoginButton />
              </div>
            </LoginSocialFacebook>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacebookLogin;
