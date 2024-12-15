
function ChallengesList({challenges}){
  return(
    <div>
      {challenges.map(challenge =>  (
         <div key = {challenge.id}>
            {challenge.month}
         </div>
      ))}
     
    </div>
  );
}

export default ChallengesList;