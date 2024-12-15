
function ChallengesList({challenges}){
  return(
    <div>
      {challenges.map(challenge =>  (
         <div >
            {challenge.name}
         </div>
      ))}
     
    </div>
  );
}

export default ChallengesList;