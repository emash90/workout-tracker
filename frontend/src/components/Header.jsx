import React from 'react'
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()
    const handleExit = () => {
        localStorage.removeItem('currentUser')
        navigate('/')
    }
  return (
    <div className='heading'>
        <h3>Exercise Tracker Notepad</h3>
        <nav>
            <Button onClick={handleExit}>exit</Button>
        </nav>
    </div>
  )
}

export default Header
