function Milestone({ challenge, onUpdate, onDelete }) {
  return (
    <div>
      <h5>{challenge.month}</h5>
      <p>{challenge.description}</p>
      <button onClick={() => onUpdate(challenge)}>Update</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Milestone;
