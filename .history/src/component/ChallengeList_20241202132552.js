
function ChallengeList({challenges}){
  return(
    <div>
    {challenges.map(challenge => (
      <challenge key = {challenge.i}/>
    ))}
     
    </div>
  );
}

export default ChallengeList;