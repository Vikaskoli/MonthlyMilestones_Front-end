import { useEffect, useState } from 'react';
import './App.css';
import ChallengeList from './component/ChallengeList'
import axios from 'axios';

function App() {

  const[challenges, setChallenges] = useState([]);

useEffect(() => {

      const fetchChallenges = async () => {
          const response = await axios.get('http://localhost:8080/challenges');
      };
      fetchChallenges();

},[])

  return (
    <div className="App">
      <h1>Monthly Challenges</h1>
      <ChallengeList challenges={challenges}/>
    </div>

  );
}

export default App;
