import React, { useState } from 'react';
import {AppBar, Box, Button, Toolbar, Tabs, Tab, Typography} from "@mui/material";
import { Link } from 'react-router-dom';
const Header = () => {
  const [value, setValue] = useState();
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Typography variant='h4'>Travelog</Typography>
        <Box display='flex' marginLeft='auto' marginRight='auto'>
          <Tabs textColor="inherit" value={value} onChange={(e, val)=>setValue(val)}>
            <Tab LinkComponent={Link} to="/blogs" label="All Blogs" />
            <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs" />
          </Tabs>
        </Box>
        <Box display='flex' marginLeft='auto'>
          <Button LinkComponent={Link} to="/auth" sx={{margin:'1', borderRadius:'10'}} variant='oulined' color='error'>Sign In</Button>
          <Button LinkComponent={Link} to="/auth" sx={{margin:'1', borderRadius:'10'}} variant='oulined' color='error'>Sign Up</Button>
          <Button LinkComponent={Link} to="/auth" sx={{margin:'1', borderRadius:'10'}} variant='oulined' color='error'>Sign Out</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
