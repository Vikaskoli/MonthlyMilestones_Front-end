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

  // State to store the filtered challenges
  const [filteredChallenges, setFilteredChallenges] = useState([]);

  // Fetch the challenges when the component mounts
  useEffect(() => {
    fetchChallenges();
  }, []);

  // Function to fetch challenges from the backend
  const fetchChallenges = async () => {
    try {
      const response = await axios.get('http://localhost:8080/challenges');
      setChallenges(response.data);
      setFilteredChallenges(response.data);  // Set all challenges initially
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

  // Function to handle filtering challenges by month
  const handleFilter = (month) => {
    if (month === '') {
      setFilteredChallenges(challenges); // If no filter, show all challenges
    } else {
      const filtered = challenges.filter(challenge =>
        challenge.month.toLowerCase().includes(month.toLowerCase())
      );
      setFilteredChallenges(filtered);
    }
  };

  return (
    <div className="App">
      <h1>Monthly </h1>
      {/* Component to add a new challenge */}
      <AddMilestone onChallengeAdded={handleChallengeAdded} />
      
      {/* Component to display the list of challenges */}
      <ChallengeList
        challenges={filteredChallenges}  // Use filtered challenges
        onSelect={handleChallengeSelected}
        onDelete={handleChallengeDeleted}
        onFilter={handleFilter}  // Pass the onFilter function to the child
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
