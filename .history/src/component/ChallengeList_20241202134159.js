
import Milestone from "./Milestone";

function ChallengeList({challenges}){
  return(
    <div>
    {challenges.map(challenge => (
      <M key = {challenge.id}
      challenge = {challenge}/>
    ))}
     
    </div>
  );
}

export default ChallengeList;