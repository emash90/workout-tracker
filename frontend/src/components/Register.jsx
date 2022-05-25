import React from 'react'
import {toast} from 'react-toastify'
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate =useNavigate()
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState('')
    const [isLoading, setIsLoading] = useState('false')
    const onChange = (e) => {
       setData(e.target.value)
    }
    const handleLogin = async(data) => {
        try {
            setIsLoading(true)
        console.log(`front username is: ${data}`);
        const res = await axios.post('http://localhost:3001/api/users/', data,
        // { headers: { 
        //     Authorization: `Bearer ${token}`,
        //     'Content-Type': 'application/json' }}
        )
        console.log(res);
        localStorage.setItem('currentUser', JSON.stringify(res.data));
        setData(res.data)
        setIsLoading(false)
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
        <p>Register to record your exercises</p>
        <form onSubmit={handleSubmit(handleLogin)}>
            <input {...register("username")} placeholder="username" name='username' onChange={handleSubmit} />
            <input type="submit" value={'register'}/>
        </form>
        <p>Already registered? <a href="/login">login</a> </p>
    </div>
  )
}

export default Register