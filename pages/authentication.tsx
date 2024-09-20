import React, { useState } from "react";
import LoginForm from "../components/Login";
import SignUpForm from "../components/Signup";
import GoBackButton from "../components/GoBackButton";

const AuthPage: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[100vh] bg-gray-100 relative">
        <GoBackButton fallbackUrl="/" /> {/* Use fallbackUrl if needed */}
        {isSignUp ? <SignUpForm /> : <LoginForm />}
        <div className="text-center">
          <button
            onClick={toggleMode}
            className="mt-4 text-[#003366] hover:text-[#21578e] hover:underline"
          >
            {isSignUp
              ? "Already have an account? Login"
              : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
