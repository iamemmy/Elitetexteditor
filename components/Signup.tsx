import React, { useState } from 'react';
import { auth } from '../lib/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';
import Notifications from './Notification';
import { CheckCircleIcon } from '@heroicons/react/24/outline';


const SignUpForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  // const [profileImage, setProfileImage] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setloading] = useState(false);
  const [displayNotification, setDisplayNotification] = useState(false);
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setloading(true);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('Sign up successful!');
      setDisplayNotification(true);
      setloading(false);
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message);
      setloading(false);
    }
  };

  // const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (file) {
  //     setProfileImage(file);
  //   }
  // };

  return (
    <div className="w-full max-w-[85vw] lg:max-w-md p-8 space-y-4 bg-white rounded shadow-lg">
      <h2 className="text-lg lg:text-2xl font-bold text-center text-indigo-600">Sign Up</h2>
      <form onSubmit={handleSignUp} className="space-y-4 lg:space-y-6">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        {/* <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Upload Profile Image</label>
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="profile-image-upload"
              className="flex flex-col items-center justify-center w-full h-20 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-100 transition duration-300">
              {profileImage ? (
                <span className="text-sm text-gray-500">{profileImage.name}</span>
              ) : (
                <span className="text-sm text-gray-500">Click to upload or drag and drop</span>
              )}
              <input
                id="profile-image-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>
        </div> */}

        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          type="submit"
          className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          { loading ? (
              <div className="border-2 border-gray-300 border-t-2 border-t-indigo-600 rounded-full w-5 h-5 spinner"></div>
          ) : (
              <div className="text-white text-center h-5">Sign up</div>
          )}
        </button>
      </form>

      {displayNotification && <Notifications customClass={"top-20 lg:top-20 z-[9999] text-green-400"} message={"Sign up success!"} icon={CheckCircleIcon} textColor={"text-green-500"} />}
    </div>
  );
};

export default SignUpForm;
