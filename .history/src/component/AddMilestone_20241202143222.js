function AddMilestone(){

  const [month,setMonth] = us
  return(
    <div>
      <label htmlFor="month" >Month </label>
      <input type="text" id="month" value={month}> </input>
    </div>
  );
}

export default AddMilestone;