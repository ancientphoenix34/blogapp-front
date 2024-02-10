import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Loginpage = () => {
    const [input,setInput]=new useState(
        {
            "userEmail":"",
            "password":""
        }

    )
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const readvalues=()=>{
        console.log(input)
        axios.post("http://localhost:3001/api/users/signin",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("Successfully login")
                    setInput(
                        {
                            "userEmail":"",
                            "password":""
                        }
                    )
                } 
                else if (response.data.status=="incorrect password") {
                    alert("enter correct password")
                }
                else if (response.data.status=="invalid user") {
                    alert("invalid user")
                }
                else {
                    alert("something went wrong")
                }
            }
        )
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email Id</label>
                            <input type="text" className="form-control" name='userEmail' value={input.userEmail} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" className="form-control" name='password' value={input.password} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readvalues}>Login</button><br></br>
                            <Link to="/register">New user. Click here</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Loginpage