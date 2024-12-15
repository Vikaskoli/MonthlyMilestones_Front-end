
function ChallengeList({challenges}){
  return(
    <div>
      {challenges.map(challenge =>  (
         <div key = {challenge.id}>
            
         </div>
      ))}
     
    </div>
  );
}

export default ChallengeList;