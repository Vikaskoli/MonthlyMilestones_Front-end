
function ChallengeList({challenges}){
  return(
    <div>
    {challenges.map(challenge => (
      <challenge key = {challenge}/>
    ))}
     
    </div>
  );
}

export default ChallengeList;