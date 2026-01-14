import React, { useState } from 'react';
import { Camera, Mail, User } from 'lucide-react';

const EditProfileForm: React.FC = () => {
  const [userData, setUserData] = useState({
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    mobile: '+1 234 567 8900',
    role: 'Administrator',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Profile updated successfully!');
  };

  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Edit Profile</h2>

      <div className="space-y-6">
        {/* Avatar Upload */}
        <div className="flex items-center gap-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
              {userData.name.split(' ').map(n => n[0]).join('')}
            </div>
            <button
              type="button"
              className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-lg border border-gray-200 hover:bg-gray-50"
            >
              <Camera size={16} className="text-gray-600" />
            </button>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">{userData.name}</h3>
            <p className="text-sm text-gray-500">{userData.role}</p>
          </div>
        </div>

        {/* Name Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <div className="relative">
            <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={userData.name}
              onChange={(e) => setUserData({ ...userData, name: e.target.value })}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <div className="relative">
            <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              value={userData.email}
              onChange={(e) => setUserData({ ...userData, email: e.target.value })}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-4">
          <button
            onClick={handleSubmit}
            className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Save Changes
          </button>
          <button
            type="button"
            className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileForm;
