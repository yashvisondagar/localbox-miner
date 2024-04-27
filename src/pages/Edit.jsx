import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Form from 'react-bootstrap/Form';
import { Link, useNavigate, useParams } from 'react-router-dom';
const Edit = () => {
    const {editid} = useParams();
    const navigate = useNavigate()
    const [name,setName] = useState("")
    const [surname,setSurname] = useState("")
    const [email,setEmail] = useState("")
    const [record,setRecord] = useState((JSON.parse(localStorage.getItem('users'))) || []);

  const handleSubmit = (e) => {
    e.preventDefault();

    let olddata = [...record];
    let updatee = olddata.map((val)=>{
        if(val.id == editid){
            return {
                ...val,
                name : name,
                surname : surname,
                email: email
            }
        }
        return val;
    })
    localStorage.setItem("users",JSON.stringify(updatee));
    alert("Record update");
    navigate('/view');
  }
  useEffect(()=>{
    let data = record.find(item => item.id == editid);
    if(data){
        setName(data.name)
        setSurname(data.surname) 
        setEmail(data.email) 
    }
  },[editid])
  return (
    <>
      <Header />
      <div align="center">
        <h1>Edit User</h1>
        <div  className="box w-25">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" onChange={ (e) => setName(e.target.value) } value={name} placeholder="Enter first name"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Phone :- </Form.Label>
              <Form.Control type="text" onChange={ (e) => setSurname(e.target.value) } value={surname} placeholder="Enter last name"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Email :- </Form.Label>
              <Form.Control type="email" onChange={ (e) => setEmail(e.target.value) } value={email} placeholder="Enter email"/>
            </Form.Group>
            <button type='submit' className='btn btn-success'>Update</button>
          </Form>
        </div>
        <Link to={`/view`}>View</Link>
      </div>
    </>
  )
}

export default Edit
