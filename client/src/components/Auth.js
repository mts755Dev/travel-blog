import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import { authActions } from '../store'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    name:'', email:'', password:''
  })
  const [isSignUp, setIsSignUp] = useState(false);
  const handleChange = (e) => {
    setInputs((prevState)=> ({
      ...prevState,
      [e.target.name]:e.target.value,
    }))
  }
  const sendRequest = async (type = 'signin') => {
    const res = await axios.post(`http://localhost:5001/api/user/${type}`, {
      name: inputs.name,
      email: inputs.email,
      password: inputs.password
    }).catch (err => console.log(err));
    const data = await res.data;
    return data;
  }
  const handleSubmit= (e) => {
    e.preventDefault();
    if(isSignUp){
      sendRequest('signup')
      .then((data)=> localStorage.setItem('userId', data.user._id))
      .then(()=> dispatch(authActions.login()))
      .then(()=> navigate('/blogs'))
    } else {
      sendRequest()
      .then((data)=> localStorage.setItem('userId', data.user._id))
      .then(()=> dispatch(authActions.login()))
      .then(()=> navigate('/blogs'))
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box maxWidth={400} display={'flex'} flexDirection={'column'} alignItems={'center'} boxShadow="10px 10px 20px #ccc" padding={3} margin='auto' marginTop={5} borderRadius={5}>
          <Typography variant='h3' padding={3} textAlign='center'>{isSignUp ? "Sign up" : "Sign in"}</Typography>
          {isSignUp && <TextField name='name' value={inputs.name} onChange={handleChange} placeholder='Name' margin='normal'/> }
          <TextField name='email' value={inputs.email} onChange={handleChange} type={'email'} placeholder='Email' margin='normal'/>
          <TextField name='password' value={inputs.password} onChange={handleChange} type={'password'} placeholder='Password' margin='normal'/>
          <Button type='submit' sx={{borderRadius:3, marginTop:3}} variant='contained' color='primary'>Submit</Button>
          <Button onClick={()=>setIsSignUp(!isSignUp)} sx={{borderRadius:3, marginTop:3}} color='primary' variant='contained'>Change To {isSignUp ? "Sign in" : "Sign up"}</Button>
        </Box>
      </form>
    </div>
  )
}

export default Auth
