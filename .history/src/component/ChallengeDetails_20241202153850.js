function ChallengeDetails({ challenge, onUpdate }) {
  const [month, setMonth] = useState(challenge.month);
  const [description, setDescription] = useState(challenge.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(challenge.id, { ...challenge, month, description });
  };

  return (
    <div>
      <h2>Edit Challenge</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="month">Month: </label>
          <input
            type="text"
            id="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default ChallengeDetails;
