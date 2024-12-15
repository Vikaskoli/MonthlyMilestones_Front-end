
function ChallengesList({challenges}){
  return(
    <div>
      {challenges.map(challenge =>  (
         <div>
          {challenge}
         </div>
      ))}
     
    </div>
  );
}

export default ChallengesList;