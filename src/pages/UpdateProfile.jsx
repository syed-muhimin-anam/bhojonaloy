import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateEmail } from 'firebase/auth';
import AuthContext from '../context/AuthContext';
import Swal from 'sweetalert2';

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate(); 

  const [profile, setProfile] = useState({
    name: user?.displayName || '',
    email: user?.email || '',
    photoURL: user?.photoURL || '',
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await updateUserProfile({
        displayName: profile.name,
        photoURL: profile.photoURL,
      });

   
      if (user.email !== profile.email) {
        await updateEmail(user, profile.email);
      }

      Swal.fire({
        title: 'Profile Updated!',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(() => {
        navigate('/'); 
      });

    } catch (error) {
      console.error(error);
      Swal.fire({
        title: 'Error updating profile',
        text: error.message,
        icon: 'error',
      });
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 mt-16 rounded shadow">
      <h2 className="text-xl font-semibold mb-4 text-purple-700">Update Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="photoURL"
          value={profile.photoURL}
          onChange={handleChange}
          placeholder="Photo URL"
          className="w-full border p-2 rounded"
        />
        <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
