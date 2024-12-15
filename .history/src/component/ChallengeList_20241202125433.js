
function ChallengesList({challenges}){
  return(
    <div>
      {challenges.map(challenge =>  (
         <div key>
            {challenge.name}
         </div>
      ))}
     
    </div>
  );
}

export default ChallengesList;