import { useState } from 'react';
import './App.css';
import ChallengeList from './component/ChallengeList'

function App() {

  const[Challenges, setChallenges] = useState([

    {id:1,month:'jan', description:'first challenge description'},
    {id:1,month:'f', description:'second challenge description'}

  ]);

  return (
    <div className="App">
      <h1>Monthly Challenges</h1>
      <ChallengeList Challenges={Challenges}/>
    </div>

  );
}

export default App;
