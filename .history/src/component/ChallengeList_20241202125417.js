
function ChallengesList({challenges}){
  return(
    <div>
      {challenges.map(challenge =>  (
         <div>
          {challenge.na}
         </div>
      ))}
     
    </div>
  );
}

export default ChallengesList;