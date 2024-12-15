import { useState } from "react";
import axios from 'axios';

function AddMilestone({ onChallengeAdded }) {
  const [month, setMonth] = useState("");
  const [description, setDescription] = useState(""); // Fixed typo here

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
            await axios.post('http://localhost:8080/challenges', { month, description })
            setMonth('');
            setDescription(''); // Fixed typo here
            onChallengeAdded();
      } catch (error) {
        console.error("Error Adding challenges: ", error);
      }
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="month">Month </label>
          <input
            type="text"
            id="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)} // Fixed typo here
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddMilestone;
