
import Milestone from "./Milestone";

function ChallengeList({challenges}){
  return(
    <div>
    {challenges.map(mil => (
      <challenge key = {challenge.id}
      challenge = {challenge}/>
    ))}
     
    </div>
  );
}

export default ChallengeList;