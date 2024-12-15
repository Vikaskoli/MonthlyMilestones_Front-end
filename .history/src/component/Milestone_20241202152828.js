// Component to display individual challenge details
function Milestone({ challenge, onSelect, onDelete }) {
  return (
    <div>
      <h5 onClick={onSelect}>{challenge.month}</h5> {/* Clicking the month selects the challenge */}
      <p>{challenge.description}</p>
      <button onClick={onDelete}>Delete</button> {/* Delete button */}
    </div>
  );
}

export default Milestone;
