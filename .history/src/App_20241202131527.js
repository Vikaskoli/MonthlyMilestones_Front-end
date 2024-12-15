import { useState } from 'react';
import './App.css';
import ChallengeList from './component/ChallengeList'

function App() {

  const[challenges, setChallenges] = useState([

    {id:1,month:'jan', description:'first challenge description'},
    {id:2,month:'feb', description:'second challenge description'}

  ]);

  return (
    <div className="App">
      <h1>Monthly Challenges</h1>
      <ChallengeList hallenges={challenges}/>
    </div>

  );
}

export default App;
