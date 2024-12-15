import { useEffect, useState } from 'react';
import './App.css';
import ChallengeList from './component/ChallengeList';
import axios from 'axios';
import AddMilestone from './component/AddMilestone';
import ChallengeDetails from './component/ChallengeDetails';

function App() {
  // State to store the list of challenges
  const [challenges, setChallenges] = useState([]);

  // State to track the selected challenge for update or display
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  // Fetch the challenges when the component mounts
  useEffect(() => {
    fetchChallenges();
  }, []);

  // Function to fetch challenges from the backend
  const fetchChallenges = async () => {
    try {
      const response = await axios.get('http://localhost:8080/challenges');
      setChallenges(response.data);
    } catch (error) {
      console.error('Error fetching challenges: ', error);
    }
  };

  // Function to handle adding a new challenge
  const handleChallengeAdded = () => {
    fetchChallenges();
  };

  // Function to handle selecting a challenge (for editing/viewing details)
  const handleChallengeSelected = (challenge) => {
    setSelectedChallenge(challenge);
  };

  // Function to handle updating a challenge
  const handleChallengeUpdated = async (id, updatedChallenge) => {
    try {
      await axios.put(`http://localhost:8080/challenges/${id}`, updatedChallenge);
      fetchChallenges(); // Refresh the list
      setSelectedChallenge(null); // Deselect after update
    } catch (error) {
      console.error('Error updating challenge: ', error);
    }
  };

  // Function to handle deleting a challenge
  const handleChallengeDeleted = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/challenges/${id}`);
      fetchChallenges(); // Refresh the list
      if (selectedChallenge?.id === id) setSelectedChallenge(null); // Deselect if deleted
    } catch (error) {
      console.error('Error deleting challenge: ', error);
    }
  };

  return (
    <div className="App">
      <h1>Monthly Challenges</h1>
      {/* Component to add a new challenge */}
      <AddMilestone onChallengeAdded={handleChallengeAdded} />
      
      {/* Component to display the list of challenges */}
      <ChallengeList
        challenges={challenges}
        onSelect={handleChallengeSelected}
        onDelete={handleChallengeDeleted}
      />
      
      {/* Component to display and update the selected challenge */}
      {selectedChallenge && (
        <ChallengeDetails
          challenge={selectedChallenge}
          onUpdate={handleChallengeUpdated}
        />
      )}
    </div>
  );
}

export default App;
