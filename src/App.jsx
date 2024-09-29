import { useState } from "react"; 

const App = () => {
  const [user, setUser] = useState("");  
  const [gender, setGender] = useState("others"); 
  const [validate, setValidate] = useState(false); 
  const [city, setCity] = useState("city"); 

  const userHandler = (e) => {
    setUser(e.target.value);
    // console.log(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
    // console.log(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
    // console.log(e.target.value);
  };

  const handleValidateChange = (e) => {
    setValidate(e.target.checked); // Use checked for checkbox
    // console.log(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User:", user);
    console.log("Gender:", gender);
    console.log("City:", city);
    console.log("Validate:", validate);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="p-10 m-5 text-2xl"> {/* Add onSubmit */}
        <input 
          type="text" 
          onChange={userHandler}
          value={user} 
          placeholder="Enter User Name" 
        />
        <br /> <br />

        {/* Radio buttons for gender selection */}
        <input 
          checked={gender === "male"} 
          onChange={handleGenderChange} 
          value="male"  
          type="radio" 
          name="gender" 
        /> Male  
        <br />
        <input 
          checked={gender === "female"} 
          onChange={handleGenderChange} 
          value="female" 
          type="radio" 
          name="gender" 
        /> Female 
        <br />
        <input 
          checked={gender === "others"} 
          onChange={handleGenderChange} 
          value="others" 
          type="radio" 
          name="gender" 
        /> Others
        <br /> <br />

        {/* City dropdown */}
        <select 
          value={city}  
          onChange={handleCityChange} 
          name="city"
        >
          <option value="city">city</option>
          <option value="Bhopal">Bhopal</option>
          <option value="Satna">Satna</option>
          <option value="Jabalpur">Jabalpur</option>
          <option value="Indore">Indore</option>
        </select> 
        <br /><br />

        {/* Checkbox for validation */}
        <input 
          checked={validate} // Bind checkbox value to checked
          type="checkbox" 
          onChange={handleValidateChange} 
        /> Validate
        <br /><br /><br />

        <button type="submit">Submit</button>
      </form>
    </div> 
  );
};

export default App;
