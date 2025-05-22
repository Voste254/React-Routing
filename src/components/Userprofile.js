import React from 'react';
import { useParams } from 'react-router-dom';

export default function UserProfile() {
    const {username}=useParams()
  const user = {
    name: 'Jane Doe',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    email: 'jane.doe@example.com',
    bio: 'Frontend Developer | React Enthusiast | Coffee Lover'
  };

  return (
    <div style={styles.container}>
        <h1>{username}'s page</h1>
      <img src={user.photo} alt={user.name} style={styles.image} />
      <h2 style={styles.name}>{user.name}</h2>
      <p style={styles.email}>{user.email}</p>
      <p style={styles.bio}>{user.bio}</p>
    </div>
  );
}

// Inline styling object
const styles = {
  container: {
    width: '300px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    margin: 'auto'
  },
  image: {
    width: '100px',
    borderRadius: '50%'
  },
  name: {
    margin: '10px 0 5px',
    color: '#333'
  },
  email: {
    margin: '5px 0',
    color: '#555',
    fontSize: '14px'
  },
  bio: {
    fontSize: '14px',
    color: '#777'
  }
};
