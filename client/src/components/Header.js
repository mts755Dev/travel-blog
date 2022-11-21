import React, { useState } from 'react';
import {AppBar, Box, Button, Toolbar, Tabs, Tab, Typography} from "@mui/material";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store';
const Header = () => {
  const dispatch = useDispatch;
  const isLoggedIn = useSelector((state)=>state.isLoggedIn)
  const [value, setValue] = useState();
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Typography variant='h4'>Travelog</Typography>
        {isLoggedIn && <Box display='flex' marginLeft='auto' marginRight='auto'>
          <Tabs textColor="inherit" value={value} onChange={(e, val)=>setValue(val)}>
            <Tab LinkComponent={Link} to="/blogs" label="All Blogs" />
            <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs" />
            <Tab LinkComponent={Link} to="/blogs/add" label="Add Blog" />
          </Tabs>
        </Box> }
        <Box display='flex' marginLeft='auto'>
          {!isLoggedIn &&
            <>
              <Button LinkComponent={Link} to="/auth" sx={{margin:'1', borderRadius:'10'}} variant='oulined' color='error'>Sign In</Button>
              <Button LinkComponent={Link} to="/auth" sx={{margin:'1', borderRadius:'10'}} variant='oulined' color='error'>Sign Up</Button>
            </>
          }
          {isLoggedIn && <Button onClick={()=>dispatch(authActions.logout)} LinkComponent={Link} to="/auth" sx={{margin:'1', borderRadius:'10'}} variant='oulined' color='error'>Sign Out</Button> }
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
