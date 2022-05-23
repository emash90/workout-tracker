import React from 'react'
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
const navigate =useNavigate()
const { register, handleSubmit } = useForm();
const [data, setData] = useState('')
const onChange = (e) => {
   setData(e.target.value)
}
const handleLogin = async(data) => {
    try {
    console.log(`front username is: ${data}`);
    const res = await axios.post('http://localhost:3001/api/users/login', data,
    { headers: { 'Content-Type': 'application/json' }}
    )
    console.log(res);
    setData(res.data.username)
    } catch (error) {
        console.log(error);
    }
    
}
useEffect(() => {
    if(data) {
        navigate('/home')
    }
}, [data])
  return (
    <div className='login-form'>
        <p>Login to record your exercises</p>
        <form onSubmit={handleSubmit(handleLogin)}>
            <input {...register("username")} placeholder="username" name='username' onChange={handleSubmit} />
            <input type="submit" />
        </form>
    </div>
  )
}

export default Login
