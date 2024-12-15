
function ChallengesList({challenges}){
  return(
    <div>
      {challenges.map(challenges)}
      <div>List</div>
    </div>
  );
}

export default ChallengesList;