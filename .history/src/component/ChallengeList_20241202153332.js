import Milestone from './Milestone';

// Component to display a list of challenges
function ChallengeList({ challenges, onSelect, onDelete }) {
  return (
    <div>
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
