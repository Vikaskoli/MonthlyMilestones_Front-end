import { useEffect, useState } from 'react';
import './App.css';
import ChallengeList from './component/ChallengeList'
import axios from 'axios';
import AddMilestone from './component/AddMilestone';

function App() {

  const[challenges, setChallenges] = useState([]);

useEffect(() => {

      const fetchChallenges = async () => {
        try{
          const response = await axios.get('http://localhost:8080/challenges');
          setChallenges(response.data);
        }catch(error){
          console.error("Error fetching challe")
        }
       
      };
      fetchChallenges();

},[]);

  return (
    <div className="App">
      <h1>Monthly Challenges</h1>
      <AddMilestone/>
      <ChallengeList challenges={challenges}/>
    </div>

  );
}

export default App;
