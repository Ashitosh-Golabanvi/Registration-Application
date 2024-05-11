import {useEffect, useState } from "react";
import axios from 'axios';
function Register()
{

  const [id, setId] = useState('');
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [dob, setdob] = useState("");
  const [registers, setUsers] = useState([]);


useEffect(() => {
  (async () => await Load())();
  }, []);
  
  
  async function  Load()
  {
     const result = await axios.get(
         "http://127.0.0.1:8000/register");
         setUsers(result.data);
         console.log(result.data);
  }
    
  
 async function save(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://127.0.0.1:8000/register",
        {
          id: id,
          name: name,
          email: email,
          dob: dob
        
        });
          alert("Registation Successfull");
          setId("");
          setName("");
          setemail("");
          setdob("");
          Load();

      
        
        }
    catch(err)
        {
          alert("Registation Failed");
        }
   }



   async function editRegister(registers)
   {
    setId(registers.id);
    setName(registers.name);
    setemail(registers.email);
    setdob(registers.dob);
    setId(registers.id);
    
   }
   async function DeleteRegister(id)
   {
      
        await axios.delete("http://127.0.0.1:8000/register/" + id);
        alert("Record deleted Successfully");
        setId("");
        setName("");
        setemail("");
        setdob("");
        Load();
  
  
   }
   async function update(event)
   {
    event.preventDefault();
   try
       {
        
        await axios.put("http://127.0.0.1:8000/register/"+ registers.find(u => u.id === id).id || id,
       {
         id: id,
         name: name,
         email: email,
         dob: dob
      
       });
         alert("Registeration Updateddddd");
         setId("");
         setName("");
         setemail("");
         setdob("");
         Load();
      
       }
   catch(err)
       {
         alert(" Registeration updatation Failed");
       }
  }
  return (
    <div>
       <h1>Registeration Details</h1>
       <div class="container mt-4" >
          <form>
              <div class="form-group">
                <label>ID</label>
                <input type="text" class="form-control" id="id"
                  value={id}
                onChange={(event) =>
                  {
                    setId(event.target.value);      
                  }}
                />
              </div>
              <div class="form-group">
               <label> Name</label>
                <input  type="text" class="form-control" id="name"
                value={name}
                onChange={(event) =>
                  {
                    setName(event.target.value);      
                  }}
                />
              </div>

              <div class="form-group">
                <label>Email</label>
                <input  type="text" class="form-control" id="email"
                 value={email}
                  onChange={(event) =>
                    {
                     setemail(event.target.value);      
                    }}
                />
              </div>
              <div class="form-group">
                <label>DOB</label>
                <input type="text" class="form-control" id="dob"
                  value={dob}
                onChange={(event) =>
                  {
                    setdob(event.target.value);      
                  }}
                />
              </div>
                 <div>
              <button   class="btn btn-primary mt-4"  onClick={save}>Register</button> 
              <button   class="btn btn-warning mt-4"  onClick={update}>Update</button>
              </div>  

              
            </form>
          </div>


<table class="table table-dark" align="center">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">DOB</th>
      
      <th scope="col">Option</th>
    </tr>
  </thead>
       {registers.map(function fn(register)
       {
            return(
            <tbody>
                <tr>
                <th scope="row">{register.id} </th>
                <td>{register.name}</td>
                <td>{register.email}</td>
                <td>{register.dob}</td>        
                <td>
                    <button type="button" class="btn btn-warning"  onClick={() => editRegister(register)} >Edit</button>  
                    <button type="button" class="btn btn-danger" onClick={() => DeleteRegister(register.id)}>Delete</button>
                </td>
                </tr>
            </tbody>
            );
            })}
            </table>
       </div>
            );
        }
export default Register;