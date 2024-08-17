import React from "react";

const ProfileForm = () => {
  return (
    <form className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-4">
            First Name
          </label>
          <input
            id="first-name"
            type="text"
            className="mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12"
          />
        </div>
        <div>
          <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-4">
            Last Name
          </label>
          <input
            id="last-name"
            type="text"
            className="mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-4">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12"
          />
        </div>
        <div>
          <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700 mb-4">
            Phone Number
          </label>
          <input
            id="phone-number"
            type="tel"
            className="mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12"
          />
        </div>
        <div>
          <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-4">
            Date of Birth
          </label>
          <input
            id="dob"
            type="date"
            className="mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12"
          />
        </div>
        <div>
          <label htmlFor="alt-phone" className="block text-sm font-medium text-gray-700 mb-4">
            Alternative Phone Number
          </label>
          <input
            id="alt-phone"
            type="tel"
            className="mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12"
          />
        </div>
        <div>
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-4">
            Gender
          </label>
          <div className="mt-1 flex items-center space-x-4">
            <div className="flex items-center">
              <input
                id="male"
                name="gender"
                type="radio"
                value="Male"
                className="h-4 w-4 border-gray-500 focus:ring-blue-500"
              />
              <label htmlFor="male" className="ml-2 text-sm text-gray-700">
                Male
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="female"
                name="gender"
                type="radio"
                value="Female"
                className="h-4 w-4 border-black focus:ring-blue-500"
              />
              <label htmlFor="female" className="ml-2 text-sm text-gray-700">
                Female
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="other"
                name="gender"
                type="radio"
                value="Other"
                className="h-4 w-4 border-black focus:ring-blue-500"
              />
              <label htmlFor="other" className="ml-2 text-sm text-gray-700">
                Other
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full max-w-xs"
        >
          Save Details
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
