
import Milestone from "./Milestone";

function ChallengeList({challenges}){
  return(
    <div>
    {challenges.map(challenge => (
      <m key = {challenge.id}
      challenge = {challenge}/>
    ))}
     
    </div>
  );
}

export default ChallengeList;