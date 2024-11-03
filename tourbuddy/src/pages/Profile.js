// ProfilePage.js
import React, { useState } from 'react';
import Bottom from '../componets/Bottom';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    // In a real application, you would save this data to a backend
    console.log('User data saved:', user);
    setIsEditing(false);
  };

  return (
   <div>
     <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2>User Profile</h2>
      <div>
        <label>Name:</label>
        {isEditing ? (
          <input 
            type="text" 
            name="name" 
            value={user.name} 
            onChange={handleChange} 
            style={{ width: '100%', margin: '8px 0', padding: '8px' }} 
          />
        ) : (
          <p>{user.name}</p>
        )}
      </div>
      <div>
        <label>Email:</label>
        {isEditing ? (
          <input 
            type="email" 
            name="email" 
            value={user.email} 
            onChange={handleChange} 
            style={{ width: '100%', margin: '8px 0', padding: '8px' }} 
          />
        ) : (
          <p>{user.email}</p>
        )}
      </div>
      <div>
        <label>Phone:</label>
        {isEditing ? (
          <input 
            type="text" 
            name="phone" 
            value={user.phone} 
            onChange={handleChange} 
            style={{ width: '100%', margin: '8px 0', padding: '8px' }} 
          />
        ) : (
          <p>{user.phone}</p>
        )}
      </div>
      <button onClick={toggleEdit} style={{ margin: '10px 0', width: '100%', padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>
        {isEditing ? 'Cancel' : 'Edit'}
      </button>
      {isEditing && (
        <button onClick={handleSave} style={{ width: '100%', padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px' }}>
          Save Changes
        </button>
      )}
      
    </div>
    <Bottom/>
   </div>
    
  );
};

export default Profile;
