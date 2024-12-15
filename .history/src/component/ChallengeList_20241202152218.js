import Milestone from './Milestone';

function ChallengeList({ challenges, onUpdate, onDelete, onFilterByMonth }) {
  const handleFilter = () => {
    const month = prompt('Enter the month to filter challenges:');
    if (month) onFilterByMonth(month);
  };

  const handleUpdate = (challenge) => {
    const updatedDescription = prompt('Enter new description:', challenge.description);
    if (updatedDescription) {
      const updatedChallenge = { ...challenge, description: updatedDescription };
      onUpdate(challenge.id, updatedChallenge);
    }
  };

  return (
    <div>
      <button onClick={handleFilter}>Filter by Month</button>
      {challenges.map((challenge) => (
        <Milestone
          key={challenge.id}
          challenge={challenge}
          onUpdate={handleUpdate}
          onDelete={() => onDelete(challenge.id)}
        />
      ))}
    </div>
  );
}

export default ChallengeList;
