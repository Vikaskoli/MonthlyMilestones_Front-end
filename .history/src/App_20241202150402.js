import { useEffect, useState } from 'react';
import './App.css';
import ChallengeList from './component/ChallengeList'
import axios from 'axios';
import AddMilestone from './component/AddMilestone';

function App() {

  const[challenges, setChallenges] = useState([]);

useEffect(() => {


},[]);

const handleChallengesAdded = () =>{
  fetchChallenges();
}


  return (
    <div className="App">
      <h1>Monthly Challenges</h1>
      <AddMilestone/>
      <ChallengeList challenges={challenges}/>
    </div>

  );
}

export default App;
