import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEdit, FaCheck } from "react-icons/fa";
import axios from 'axios';
import Loader from '../components/Loader';
import { UserContext } from '../context/userContext';

const UserProfile = () => {
  const { currentUser } = useContext(UserContext);
  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isAvatarTouched, setIsAvatarTouched] = useState(false);

  const navigate = useNavigate();
  const token = currentUser?.token;

  // Redirect to login if no token is present
  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  // Fetch user details on component mount
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/${currentUser.id}`, {
          withCredentials: true,
          headers: { Authorization: `Bearer ${token}` }
        });
        const { name, email, avatar } = response.data;
        setName(name);
        setEmail(email);
        setAvatar(avatar);
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Handle error (e.g., set error state)
      }
    };
    getUser();
  }, [currentUser.id, token]);

  // Handle avatar change
  const changeAvatarHandler = async () => {
    setIsAvatarTouched(false);
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('avatar', avatar);
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/change-avatar`, formData, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${token}` }
      });
      setAvatar(response.data.avatar);
    } catch (error) {
      console.error('Error changing avatar:', error);
      // Handle error (e.g., show error message to the user)
    } finally {
      setIsLoading(false);
    }
  };

  // Handle user details update
  const updateUserDetails = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        name,
        email,
        currentPassword,
        newPassword,
        confirmNewPassword
      };
      const response = await axios.patch(`${process.env.REACT_APP_BASE_URL}/users/edit-user`, userData, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${token}` }
      });
      if (response.status === 200) {
        navigate('/logout');
      }
    } catch (error) {
      setError(error.response.data.message);
      
    }
  };

  return (
    <section className="profile">
      <div className="container profile__container">
        <Link to={`/myposts/${currentUser.id}`} className='btn'>My Posts</Link>
        <div className="profile__details">
          <div className="avatar__wrapper">
            <div className="profile__avatar">
            <img src={`${process.env.REACT_APP_BASE_ASSETS_URL}/uploads/${avatar}`} alt='User Avatar' />
            </div>
            <form className="avatar__form">
              <input type='file' name='avatar' id='avatar' onChange={e => setAvatar(e.target.files[0])} accept='image/png, image/jpeg' />
              <label htmlFor='avatar' onClick={() => setIsAvatarTouched(true)}> <FaEdit /></label>
            </form>
            {isAvatarTouched && (
              <button className='profile__avatar-btn' onClick={changeAvatarHandler} disabled={isLoading}>
                {isLoading ? <Loader /> : <FaCheck />}
              </button>
            )}
          </div>
          <h1>{currentUser.name}</h1>
          <form className="form profile__form" onSubmit={updateUserDetails}>
            {error && <p className='form__error-message'>{error}</p>}
            <input type='text' placeholder='Full Name' value={name} onChange={e => setName(e.target.value)} />
            <input type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
            <input type='password' placeholder='Current Password' value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} />
            <input type='password' placeholder='New Password' value={newPassword} onChange={e => setNewPassword(e.target.value)} />
            <input type='password' placeholder='Confirm New Password' value={confirmNewPassword} onChange={e => setConfirmNewPassword(e.target.value)} />
            <button type="submit" className='btn primary' disabled={isLoading}>Update details</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;




