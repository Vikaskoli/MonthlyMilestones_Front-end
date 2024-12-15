
function ChallengeList({challenges}){
  return(
    <div>
    {challenges.map(challenge => (
      <challenge key = {challenge.id}/>
    ))}
     
    </div>
  );
}

export default ChallengeList;