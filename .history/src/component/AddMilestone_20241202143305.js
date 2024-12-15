import { useState } from "react";

function AddMilestone(){

  const [month,setMonth] = useState('');
  const [month,setDescriptiion] = useState('');
  return(
    <div>
      <label htmlFor="month" >Month </label>
      <input type="text" id="month" value={month}> </input>
    </div>
  );
}

export default AddMilestone;