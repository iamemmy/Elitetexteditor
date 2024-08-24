import React from 'react';

const Profile: React.FC = () => {
  // Hardcoded profile data
  const profile = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    totalProjects: 12,
  };

  // Get the first character of the first name
  const initial = profile.firstName.charAt(0).toUpperCase();

  return (
    <div className="w-full mx-auto bg-transparent">
      <div className="flex items-center space-x-6 mb-6">
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center overflow-hidden">
          <span className="text-4xl font-bold text-gray-500">{initial}</span>
        </div>
        <div>
          <h1 className="text-lg lg:text-2xl font-bold text-gray-800">{profile.firstName} {profile.lastName}</h1>
          <p className="text-sm lg:text-lg text-gray-600">{profile.email}</p>
        </div>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-300">
        <h2 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4">Profile Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
            <h3 className="text-xs lg:text-sm font-medium text-gray-700">First Name</h3>
            <p className="tedxt-sm lg:text-base text-gray-900">{profile.firstName}</p>
          </div>
          <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
            <h3 className="text-xs lg:text-sm font-medium text-gray-700">Last Name</h3>
            <p className="text-sm lg:text-base text-gray-900">{profile.lastName}</p>
          </div>
          <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
            <h3 className="text-xs lg:text-sm font-medium text-gray-700">Email</h3>
            <p className="text-sm lg:text-base text-gray-900">{profile.email}</p>
          </div>
          <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
            <h3 className="text-xs lg:text-sm font-medium text-gray-700">Total Projects</h3>
            <p className="text-sm lg:text-base text-gray-900">{profile.totalProjects}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
