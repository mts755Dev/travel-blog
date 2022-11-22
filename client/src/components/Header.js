import React from 'react';
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store';
const Header = () => {
  const dispatch = useDispatch;
  const isLoggedIn = useSelector((state)=>state.isLoggedIn)
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Typography variant='h4'>Travelog</Typography>
        {isLoggedIn && <Box display='flex'  marginLeft='auto'>
          <Button LinkComponent={Link} to="/blogs" variant='oulined' color='primary'>All Blogs</Button>
          <Button LinkComponent={Link} to="/myBlogs" variant='oulined' color='primary'>My Blogs</Button>
          <Button LinkComponent={Link} to="/blogs/add" variant='oulined' color='primary'>Add Blogs</Button>
        </Box> }
        <Box display='flex' marginLeft='auto'>
          {isLoggedIn && <Button onClick={()=>dispatch(authActions.logout())} LinkComponent={Link} to="/auth" sx={{margin:'1', borderRadius:'10'}} variant='oulined' color='primary'>Sign Out</Button> }
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
