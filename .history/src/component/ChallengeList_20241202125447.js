
function ChallengesList({challenges}){
  return(
    <div>
      {challenges.map(challenge =>  (
         <div key = {challenge.id}>
            {challenge.name}
         </div>
      ))}
     
    </div>
  );
}

export default ChallengesList;