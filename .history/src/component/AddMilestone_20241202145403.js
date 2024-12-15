import { useState } from "react";
import axios from 'axios';

function AddMilestone() {
  const [month, setMonth] = useState("");
  const [description, setDescriptiion] = useState("");

  const handleSubmit = async (e) => {
      e.preventDefault();
      try{
            await 
      }catch(error){

      }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="month">Month </label>
          <input
            type="text"
            id="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescriptiion(e.target.value)}
            required
          >
            {" "}
          </textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddMilestone;