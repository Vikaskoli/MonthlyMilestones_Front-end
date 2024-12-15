
import Challenge from "./challenge";
function ChallengeList({challenges}){
  return(
    <div>
    {challenges.map(challenge => (
      <challenge key = {challenge.id}
      challenge = {challenge}/>
    ))}
     
    </div>
  );
}

export default ChallengeList;