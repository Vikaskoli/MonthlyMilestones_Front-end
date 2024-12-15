import { useEffect, useState } from 'react';
import './App.css';
import ChallengeList from './component/ChallengeList';
import axios from 'axios';
import AddMilestone from './component/AddMilestone';

function App() {
  const [challenges, setChallenges] = useState([]);
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  useEffect(() => {
    fetchChallenges();
  }, []);

  const fetchChallenges = async () => {
    try {
      const response = await axios.get('http://localhost:8080/challenges');
      setChallenges(response.data);
    } catch (error) {
      console.error('Error fetching challenges: ', error);
    }
  };

  const fetchChallengeByMonth = async (month) => {
    try {
      const response = await axios.get(`http://localhost:8080/challenges/${month}`);
      setChallenges([response.data]); // Show the filtered challenge
    } catch (error) {
      console.error('Error fetching challenge by month: ', error);
    }
  };

  const handleChallengeAdded = () => {
    fetchChallenges();
  };

  const handleChallengeUpdated = async (id, updatedChallenge) => {
    try {
      await axios.put(`http://localhost:8080/challenges/${id}`, updatedChallenge);
      fetchChallenges();
    } catch (error) {
      console.error('Error updating challenge: ', error);
    }
  };

  const handleChallengeDeleted = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/challenges/${id}`);
      fetchChallenges();
    } catch (error) {
      console.error('Error deleting challenge: ', error);
    }
  };

  return (
    <div className="App">
      <h1>Monthly Challenges</h1>
      <AddMilestone onChallengeAdded={handleChallengeAdded} />
      <ChallengeList
        challenges={challenges}
        onUpdate={handleChallengeUpdated}
        onDelete={handleChallengeDeleted}
        onFilterByMonth={fetchChallengeByMonth}
      />
    </div>
  );
}

export default App;
