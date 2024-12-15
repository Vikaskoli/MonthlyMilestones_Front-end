import { useEffect, useState } from 'react';
import './App.css';
import ChallengeList from './component/ChallengeList'
import axios from

function App() {

  const[challenges, setChallenges] = useState([

    {id:1,month:'jan', description:'first challenge description'},
    {id:2,month:'feb', description:'second challenge description'}

  ]);

useEffect(() => {

      const fetchChallenges = async () => {
          const response = await axios.get('');
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
