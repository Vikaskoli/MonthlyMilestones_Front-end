
function ChallengeList({challenges}){
  return(
    <div>
      {challenges.map(challenge =>  (
         <div>
            {
              challenges
            }
         </div>
      ))}
     
    </div>
  );
}

export default ChallengeList;