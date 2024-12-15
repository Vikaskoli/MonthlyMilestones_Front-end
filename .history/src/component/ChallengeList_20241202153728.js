import { useState } from 'react';
import Milestone from './Milestone';

function ChallengeList({ challenges, onSelect, onDelete, onFilter }) {
  const [monthFilter, setMonthFilter] = useState('');

  const handleFilterChange = (e) => {
    setMonthFilter(e.target.value);
    onFilter(e.target.value); // Trigger filter function
  };

  return (
    <div>
      {/* Filter challenges by month */}
      <div style={{ marginBottom: '20px' }}>
        <label>Filter by Month: </label>
        <input
          type="text"
          value={monthFilter}
          onChange={handleFilterChange}
          placeholder="Enter month to filter"
        />
      </div>
      
      {/* Render each challenge using the Milestone component */}
      {challenges.map((challenge) => (
        <Milestone
          key={challenge.id}
          challenge={challenge}
          onSelect={() => onSelect(challenge)}
          onDelete={() => onDelete(challenge.id)}
        />
      ))}
    </div>
  );
}

export default ChallengeList;
