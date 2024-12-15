function Milestone({ challenge, onSelect, onDelete }) {
  return (
    <div className="milestone">
      <h5 onClick={onSelect}>{challenge.month}</h5> {/* Clicking the month selects the challenge */}
      <p>{challenge.description}</p>
      
      {/* Update button */}
      <button onClick={() => onSelect(challenge)}>Update</button> {/* Trigger challenge editing */}
      
      {/* Delete button */}
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Milestone;
