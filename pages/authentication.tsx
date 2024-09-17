import React, { useState } from 'react';
import Link from 'next/link';
import LoginForm from '../components/Login';
import SignUpForm from '../components/Signup';
import Navbar from '../components/Navbar';

const AuthPage: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log('clicked!');
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[90vh] bg-gray-100">
        {isSignUp ? <SignUpForm /> : <LoginForm />}
        <div className="text-center">
          <button
            onClick={toggleMode}
            className="mt-4 text-indigo-600 hover:underline"
          >
            {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
