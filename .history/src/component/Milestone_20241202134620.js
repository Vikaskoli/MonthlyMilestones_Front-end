function Milestone({challenge}) {

  return(
    <div>
      <h5>{challenge.month}</h5>
      <p>{challenge.description}</p>
    </div>
  );
  
}

export default Milestone;