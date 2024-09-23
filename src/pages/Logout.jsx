import { useContext, useEffect } from 'react';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      try {
        setCurrentUser(null); // Update user context to indicate logout
        navigate('/login'); // Navigate to login page after logout
      } catch (error) {
        console.error('Error logging out:', error);
      }
    };

    logoutUser(); // Call the logout function on component mount

    // No dependencies here, so it runs only once after initial mount
  }, [setCurrentUser, navigate]); // Include dependencies if needed

  // Render nothing or a placeholder if needed
  return null;
};

export default Logout;

