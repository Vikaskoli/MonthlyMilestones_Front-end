import { useState } from "react";

function AddMilestone(){

  const [month,setMonth] = useState('');
  const [description,setDescriptiion] = useState('');
  return(
    <div>
      <label htmlFor="month" >Month </label>
      <input type="text" id="month" value={month} onChange={(e) => setMonth(e.target.value)} required> </input>
    </div>
    div>
    <label htmlFor="month" >Month </label>
    <input type="text" id="month" value={month} onChange={(e) => setMonth(e.target.value)} required> </input>
  </div>
  );
}

export default AddMilestone;