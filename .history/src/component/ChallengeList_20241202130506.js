
function ChallengesList({challenges}){
  return(
    <div>
      {challenges.map(challenge =>  (
         <div key = {challenge.id}>
            {challenge.mo}
         </div>
      ))}
     
    </div>
  );
}

export default ChallengesList;