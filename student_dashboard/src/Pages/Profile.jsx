import React, { useState, useEffect } from "react";
import Layout from "../Components/Layout";
import axios from "axios";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    address: "", 
    dob: "", 
    education: "", 
    institution: "", 
    course: "", 
    year: "", 
    skills: "", 
    profileImage: "" 
  });
  const [updatedProfile, setUpdatedProfile] = useState(profile);

  useEffect(() => {
    // Fetch profile data (Replace with actual API endpoint)
    axios.get("/api/profile").then((response) => {
      setProfile(response.data);
      setUpdatedProfile(response.data);
    });
  }, []);

  const handleChange = (e) => {
    setUpdatedProfile({ ...updatedProfile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Update profile API call (Replace with actual endpoint)
    axios.put("/api/profile", updatedProfile).then(() => {
      setProfile(updatedProfile);
      setIsEditing(false);
    });
  };

  return (
    <Layout>
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Profile</h2>
        <div className="space-y-4">
          <div className="flex flex-col items-center">
            <img 
              src={profile.profileImage || "https://via.placeholder.com/150"} 
              alt="Profile" 
              className="w-24 h-24 rounded-full border"
            />
            {isEditing && (
              <input
                type="text"
                name="profileImage"
                value={updatedProfile.profileImage}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-2"
                placeholder="Profile Image URL"
              />
            )}
          </div>
          <div>
            <label className="block font-medium">Name</label>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={updatedProfile.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            ) : (
              <p>{profile.name}</p>
            )}
          </div>
          <div>
            <label className="block font-medium">Email</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={updatedProfile.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            ) : (
              <p>{profile.email}</p>
            )}
          </div>
          <div>
            <label className="block font-medium">Phone</label>
            {isEditing ? (
              <input
                type="text"
                name="phone"
                value={updatedProfile.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            ) : (
              <p>{profile.phone}</p>
            )}
          </div>
          <div>
            <label className="block font-medium">Address</label>
            {isEditing ? (
              <input
                type="text"
                name="address"
                value={updatedProfile.address}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            ) : (
              <p>{profile.address}</p>
            )}
          </div>
          <div>
            <label className="block font-medium">Date of Birth</label>
            {isEditing ? (
              <input
                type="date"
                name="dob"
                value={updatedProfile.dob}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            ) : (
              <p>{profile.dob}</p>
            )}
          </div>
          <div>
            <label className="block font-medium">Education</label>
            {isEditing ? (
              <input
                type="text"
                name="education"
                value={updatedProfile.education}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            ) : (
              <p>{profile.education}</p>
            )}
          </div>
          <div>
            <label className="block font-medium">Institution</label>
            {isEditing ? (
              <input
                type="text"
                name="institution"
                value={updatedProfile.institution}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            ) : (
              <p>{profile.institution}</p>
            )}
          </div>
          <div>
            <label className="block font-medium">Course</label>
            {isEditing ? (
              <input
                type="text"
                name="course"
                value={updatedProfile.course}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            ) : (
              <p>{profile.course}</p>
            )}
          </div>
          <div>
            <label className="block font-medium">Year</label>
            {isEditing ? (
              <input
                type="text"
                name="year"
                value={updatedProfile.year}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            ) : (
              <p>{profile.year}</p>
            )}
          </div>
          <div>
            <label className="block font-medium">Skills</label>
            {isEditing ? (
              <input
                type="text"
                name="skills"
                value={updatedProfile.skills}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="E.g., JavaScript, React, Python"
              />
            ) : (
              <p>{profile.skills}</p>
            )}
          </div>
          <div className="flex space-x-2">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;