
function ChallengeList({challenges}){
  return(
    <div>
    {challenges.map(challenge => (
      <challenge key = {challenge.id}
      challenge=/>
    ))}
     
    </div>
  );
}

export default ChallengeList;