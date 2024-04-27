import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate()
  const [name,setName] = useState("")
  const [surname,setSurname] = useState("")
  const [email,setEmail] = useState("")
  const [record,setRecord] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = {
      id : Math.floor(Math.random()*10000),name,surname,email
    }

    let olddata = [...record,obj];
    setRecord(olddata);
    localStorage.setItem('users',JSON.stringify(olddata));
    alert("Record Add");
    setName("");
    setSurname("");
    setEmail("");
    navigate('/view');

  }

  useEffect(()=>{
      let alldata = JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : [];
      setRecord(alldata)
  },[])

  return (
    <>
      <Header />
      <div align="center">
        <h1>Add User</h1>
        <div  className="box w-25">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Employee First Name</Form.Label>
              <Form.Control type="text" onChange={ (e) => setName(e.target.value) } value={name} placeholder="Enter first name"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Employee Last Name </Form.Label>
              <Form.Control type="text" onChange={ (e) => setSurname(e.target.value) } value={surname} placeholder="Enter last name"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Email :- </Form.Label>
              <Form.Control type="email" onChange={ (e) => setEmail(e.target.value) } value={email} placeholder="Enter email"/>
            </Form.Group>
            <button type='submit' className='btn btn-success'>Submit</button>
          </Form>
        </div>
        <Link to={`/view`}>View</Link>
      </div>
    </>
  )
}

export default Home
