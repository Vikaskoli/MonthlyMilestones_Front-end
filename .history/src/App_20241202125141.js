import { useState } from 'react';
import './App.css';
import ChallengeList from './component/ChallengeList'

function App() {

  const[Challenges, setChallenges] = useState([]);

  return (
    <div className="App">
      <h1>Monthly Challenges</h1>
      <ChallengeList />
    </div>

  );
}

export default App;
