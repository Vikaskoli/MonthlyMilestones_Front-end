import { useState } from "react";

function AddMilestone(){

  const [month,setMonth] = useState('');
  const [description,setDescriptiion] = useState('');
  return(
  <div>
        <div>
              <label htmlFor="month" >Month </label>
              <input type="text" id="month" value={month} onChange={(e) => setMonth(e.target.value)} required/>
        </div>
        <div>
              <label htmlFor="description" >Description </label>
              <textarea  id="description" value={description} onChange={(e) => setDescriptiion(e.target.value)} required> </textarea>
      </div>
      <button type="sub">Submit<button/>
  </div>
  );
}

export default AddMilestone;