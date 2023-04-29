import React, { useState } from 'react'
import axios from 'axios'
  
 const States = ({name:"", email:"", message:""})

 const Contact = (props) => {
  const[form, setForm] = React.useState(States);
  const handleChange =(event) => {
   const updatedForm = {...form, [event.target.id]: event.target.value}
    console.log(updatedForm)
    setForm(updatedForm)

  };
  const [submitted, setSumitted] = useState(false)  
  const [Error, setError] = useState(null)  
  const [Loading, setLoading] = useState(false)  

  const handleSubmit =(event) => {
    event.preventDefault();
    axios.post("https://my-json-server.typicode.com/tundeojediran/contacts-api-server/inquiries", {form})
    .then(response =>{
        console.log(response)
        setSumitted(true)
        setError(null);
    }).catch(error =>{
        console.log(error)
        setSumitted(false)
        setError("submission failed, please try again")
    }); 
      setForm(States);
  };

 

   return(
    <>
    {submitted && <p className='submit'>Submitted Sucessfully!</p>}
    {Error && <p className='error'>error: {Error}</p>}
    <div className='container'>
        <form  onSubmit={handleSubmit}>
          <h1>Contact Us</h1>
        <div>
   <label htmlFor='name'>Name:</label>
        <input type="text" name='name' id='name' onChange={handleChange} value={form.name} required></input>
        </div>

         <div>
        <label htmlFor='email'>Email:</label>
        <input type="email" name='email' id='email'  onChange={handleChange} value={form.email} required></input>
        </div>

         <div>
        <label htmlFor='message'>Message:</label>
        <textarea  name='message' id='message' cols="30" rows="10"  onChange={handleChange} value={form.message} required></textarea>
        </div>
       
       <button  className="btn" type="submit">Submit</button>
</form>
</div>
</>
   );
 }
  
 export default Contact;